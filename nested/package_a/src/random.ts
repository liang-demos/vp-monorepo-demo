const numbers = [3, 1, 4]

export function totalNumbers() {
  return numbers.reduce((total, value) => total + value, 0)
}
