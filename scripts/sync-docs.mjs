import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const rootDir = resolve(import.meta.dirname, '..')
const distDir = resolve(rootDir, 'dist')
const docsDir = resolve(rootDir, 'docs')

if (!existsSync(distDir)) {
  throw new Error('dist directory not found. Run the Vite build first.')
}

rmSync(docsDir, { recursive: true, force: true })
mkdirSync(docsDir, { recursive: true })
cpSync(distDir, docsDir, { recursive: true })
