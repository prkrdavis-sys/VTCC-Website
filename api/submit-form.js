const FORM_CONFIG = {
  service_request: {
    table: 'service_requests',
    label: 'Service Request',
    fields: [
      'name',
      'email',
      'phone',
      'preferredContact',
      'ageRange',
      'service',
      'funding',
      'location',
      'message',
      'consent',
    ],
    columnMap: {
      preferredContact: 'preferred_contact',
      ageRange: 'age_range',
    },
  },
  referral: {
    table: 'referrals',
    label: 'Referral Inquiry',
    fields: [
      'name',
      'organization',
      'role',
      'email',
      'phone',
      'preferredContact',
      'parentName',
      'parentPhone',
      'ageRange',
      'service',
      'funding',
      'location',
      'message',
      'consent',
    ],
    columnMap: {
      preferredContact: 'preferred_contact',
      parentName: 'parent_name',
      parentPhone: 'parent_phone',
      ageRange: 'age_range',
    },
  },
}

const MAX_TEXT_LENGTH = 5000
const SUPABASE_REST_PATH = '/rest/v1'

function getRequiredEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = ''

    request.on('data', (chunk) => {
      body += chunk
      if (body.length > 64_000) {
        request.destroy()
        reject(new Error('Request body is too large'))
      }
    })

    request.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'))
      } catch {
        reject(new Error('Request body must be valid JSON'))
      }
    })

    request.on('error', reject)
  })
}

function normalizeString(value, maxLength = MAX_TEXT_LENGTH) {
  if (typeof value !== 'string') {
    return null
  }

  const normalized = value.trim()
  if (!normalized) {
    return null
  }

  return normalized.slice(0, maxLength)
}

function normalizeLocale(value) {
  const locale = normalizeString(value, 8)
  return locale === 'es' ? 'es' : 'en'
}

function normalizeSubmission(payload) {
  const config = FORM_CONFIG[payload.formType]
  if (!config) {
    throw new Error('Unknown form type')
  }

  const fields = payload.fields && typeof payload.fields === 'object' ? payload.fields : {}
  const name = normalizeString(fields.name, 200)
  if (!name) {
    throw new Error('Name is required')
  }

  if (fields.consent !== true) {
    throw new Error('Consent is required')
  }

  const record = {
    name,
    consent: true,
    locale: normalizeLocale(payload.locale),
    source_page: normalizeString(payload.sourcePage, 120) ?? '',
  }

  for (const field of config.fields) {
    if (field === 'name' || field === 'consent') {
      continue
    }

    const column = config.columnMap[field] ?? field
    record[column] = normalizeString(fields[field])
  }

  return { config, record }
}

function getSupabaseHeaders() {
  const serviceRoleKey = getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY')

  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    'Content-Type': 'application/json',
  }
}

async function insertSubmission(supabaseUrl, headers, table, record) {
  const response = await fetch(`${supabaseUrl}${SUPABASE_REST_PATH}/${table}`, {
    method: 'POST',
    headers: {
      ...headers,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(record),
  })

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${await response.text()}`)
  }

  const [submission] = await response.json()
  return submission
}

async function getActiveRecipients(supabaseUrl, headers, formType) {
  const params = new URLSearchParams({
    select: 'recipient_email',
    form_type: `eq.${formType}`,
    is_active: 'eq.true',
  })

  const response = await fetch(
    `${supabaseUrl}${SUPABASE_REST_PATH}/form_notification_recipients?${params}`,
    { headers },
  )

  if (!response.ok) {
    throw new Error(`Recipient lookup failed: ${await response.text()}`)
  }

  return (await response.json()).map((row) => row.recipient_email)
}

function formatSubmissionText(label, submission) {
  const lines = [
    `New VTCC ${label}`,
    '',
    `Submitted: ${submission.created_at ?? new Date().toISOString()}`,
    `Submission ID: ${submission.id ?? 'n/a'}`,
    '',
  ]

  for (const [key, value] of Object.entries(submission)) {
    if (['id', 'created_at', 'status'].includes(key) || value == null || value === '') {
      continue
    }

    lines.push(`${key}: ${value}`)
  }

  return lines.join('\n')
}

function formatSubmissionHtml(label, submission) {
  const rows = Object.entries(submission)
    .filter(([key, value]) => !['id', 'created_at', 'status'].includes(key) && value != null && value !== '')
    .map(
      ([key, value]) =>
        `<tr><th align="left" style="padding:6px 12px 6px 0;">${escapeHtml(key)}</th><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  return `<h2>New VTCC ${escapeHtml(label)}</h2>
<p><strong>Submitted:</strong> ${escapeHtml(submission.created_at ?? new Date().toISOString())}</p>
<p><strong>Submission ID:</strong> ${escapeHtml(submission.id ?? 'n/a')}</p>
<table>${rows}</table>`
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function sendNotificationEmail({ recipients, label, submission }) {
  const resendApiKey = process.env.RESEND_API_KEY
  const from = process.env.FORM_NOTIFICATION_FROM

  if (!resendApiKey || !from) {
    return { sent: false, reason: 'email_not_configured' }
  }

  if (!recipients.length) {
    return { sent: false, reason: 'no_active_recipients' }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject: `New VTCC ${label}`,
      text: formatSubmissionText(label, submission),
      html: formatSubmissionHtml(label, submission),
    }),
  })

  if (!response.ok) {
    throw new Error(`Email send failed: ${await response.text()}`)
  }

  return { sent: true }
}

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    sendJson(response, 405, { error: 'Method not allowed' })
    return
  }

  try {
    const supabaseUrl = getRequiredEnv('SUPABASE_URL').replace(/\/$/, '')
    const headers = getSupabaseHeaders()
    const payload = await readRequestBody(request)
    const { config, record } = normalizeSubmission(payload)
    const submission = await insertSubmission(supabaseUrl, headers, config.table, record)
    const recipients = await getActiveRecipients(supabaseUrl, headers, payload.formType)
    let email

    try {
      email = await sendNotificationEmail({
        recipients,
        label: config.label,
        submission,
      })
    } catch (error) {
      console.error(error)
      email = { sent: false, reason: 'email_send_failed' }
    }

    sendJson(response, 200, {
      ok: true,
      submissionId: submission.id,
      email,
    })
  } catch (error) {
    console.error(error)
    sendJson(response, 400, {
      error: 'Unable to submit form',
    })
  }
}
