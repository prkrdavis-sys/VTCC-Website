import { DurableObject } from 'cloudflare:workers'

const REFERENCE_BASE = 10_000_000
const REFERENCE_LIMIT = 89_999_999

export class ReferenceCounter extends DurableObject {

  async increment() {
    return this.ctx.blockConcurrencyWhile(async () => {
      const current = (await this.ctx.storage.get('n')) ?? 0
      if (current >= REFERENCE_LIMIT) {
        throw new Error('Reference numbers exhausted')
      }
      const next = current + 1
      await this.ctx.storage.put('n', next)
      return next
    })
  }
}

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/reference') {
      if (request.method !== 'POST') {
        return json({ error: 'Method not allowed' }, 405, { Allow: 'POST' })
      }

      try {
        const id = env.REFERENCE_COUNTER.idFromName('global')
        const stub = env.REFERENCE_COUNTER.get(id)
        const next = await stub.increment()
        return json({
          reference: String(REFERENCE_BASE + next),
          issuedAt: new Date().toISOString(),
        })
      } catch (error) {
        console.error(error)
        return json({ error: 'Unable to issue a reference number' }, 503)
      }
    }

    return env.ASSETS.fetch(request)
  },
}
