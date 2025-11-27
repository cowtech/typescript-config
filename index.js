import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import JSON5 from 'json5'

// Do not move this file into src. Typescript resolution will not work in packages.

export const config = JSON5.parse(readFileSync(resolve(import.meta.dirname, './tsconfig.json'), 'utf8'))
export default config
