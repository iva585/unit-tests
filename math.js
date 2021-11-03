export function isOdd(number) {
  return Math.abs(number % 2) === 1
}

export function isEven(number) {
  return number % 2 === 0
}

export function isDivisibleBy3(number) {
  return Math.abs(number % 3) === 0
}

export function isDivisibleBy(number, divisor) {
  return Math.abs(number % divisor) === 0
}
