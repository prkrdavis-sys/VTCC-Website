import { spawn } from 'node:child_process'
import net from 'node:net'
import { join } from 'node:path'
import { rootDir } from './lib.mjs'

const prototypeDir = join(rootDir, 'prototype')
const preferredPort = Number(process.env.PORT) || 4178
const maxAttempts = 10

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
    server.unref()
    server.on('error', () => resolve(false))
    server.listen({ port, host: '127.0.0.1' }, () => {
      server.close(() => resolve(true))
    })
  })
}

async function isPrototypeServer(port) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/styles.css`, {
      signal: AbortSignal.timeout(750),
    })
    return response.ok
  } catch {
    return false
  }
}

async function resolvePort(startPort) {
  for (let port = startPort; port < startPort + maxAttempts; port += 1) {
    if (await isPrototypeServer(port)) {
      console.log(`Dev server already running at http://localhost:${port}/`)
      process.exit(0)
    }

    if (await isPortAvailable(port)) {
      return port
    }
  }

  throw new Error(`Could not find an open port near ${startPort}. Stop the process using that port and try again.`)
}

async function main() {
  const port = await resolvePort(preferredPort)
  console.log(`Starting dev server at http://localhost:${port}/`)

  const child = spawn('python3', ['-m', 'http.server', String(port), '--directory', prototypeDir], {
    stdio: 'inherit',
    cwd: rootDir,
  })

  child.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal)
      return
    }

    process.exit(code ?? 0)
  })
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
