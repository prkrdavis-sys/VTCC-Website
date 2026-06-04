import * as esbuild from 'esbuild'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

await esbuild.build({
  entryPoints: [join(rootDir, 'scripts/analytics-entry.mjs')],
  bundle: true,
  outfile: join(rootDir, 'prototype/analytics.js'),
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  minify: true,
})

console.log('Wrote prototype/analytics.js')
