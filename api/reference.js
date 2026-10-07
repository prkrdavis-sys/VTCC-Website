const REFERENCE_URL =
  process.env.REFERENCE_COUNTER_URL ?? 'https://vtcc-website.cool-queen-3cc7.workers.dev/api/reference'

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(body))
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    sendJson(response, 405, { error: 'Method not allowed' })
    return
  }

  try {
    const upstream = await fetch(REFERENCE_URL, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    })
    const body = await upstream.text()
    response.statusCode = upstream.status
    response.setHeader('Content-Type', 'application/json')
    response.setHeader('Cache-Control', 'no-store')
    response.end(body)
  } catch (error) {
    console.error(error)
    sendJson(response, 503, { error: 'Unable to issue a reference number' })
  }
}
