import { readFile } from 'node:fs/promises'

const packageJson = await readFile(new URL('../package.json', import.meta.url), 'utf8')

console.log(JSON.parse(packageJson).name)
