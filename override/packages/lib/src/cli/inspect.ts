import { stat } from 'node:fs/promises'

export async function inspect(path: string) {
  const result = await stat(path)
  console.log(`${path}: ${result.size} bytes`)
}
