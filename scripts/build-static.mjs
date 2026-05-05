import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const docsDir = resolve(rootDir, 'docs')
const indexFile = resolve(rootDir, 'index.html')
const faviconFile = resolve(rootDir, 'favicon.svg')

for (const target of [distDir, docsDir]) {
  rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  copyFileSync(indexFile, resolve(target, 'index.html'))

  if (existsSync(faviconFile)) {
    copyFileSync(faviconFile, resolve(target, 'favicon.svg'))
  }
}
