export function parseISBN(isbn: string) {
  const value = isbn
  let error: 'length' | 'format13' | 'format10' | undefined = undefined
  let valid = false
  valid = value.length === 13 || value.length === 10
  if (value.length === 13) {
    let valid = validateISBN13(value)
    if (!valid) error = 'format13'
  } else if (value.length === 10) {
    let valid = validateISBN10(value)
    if (!valid) error = 'format10'
  } else {
    error = 'length'
  }

  return {
    valid,
    kind: valid ? value.length : '',
    value,
    ...(error ? { error } : {}),
  }
}

function total(isbn: string, getMultiplier: (index: number) => number) {
  const length = isbn.length - 1
  const total = Array.from(isbn.slice(0, length)).reduce(
    (acc, curr, currentIndex) => {
      const digit = parseInt(curr, 10)
      const multiplier = getMultiplier(currentIndex)
      return acc + digit * multiplier
    },
    0
  )
  return total
}

export function validateISBN10(isbn: string): boolean {
  const lastChar = isbn.slice(-1)
  const check = lastChar === 'X' ? 10 : parseInt(lastChar)
  return total(isbn, (idx) => idx + 1) % 11 === check
}

function validateISBN13(isbn: string): boolean {
  let valid = false
  const remainder = total(isbn, (idx) => (idx % 2 ? 1 : 3))
  if (remainder === 0) {
    valid = true
  } else {
    const lastDigit = parseInt(isbn.slice(-1), 10)
    valid = 10 - remainder === lastDigit
  }
  return valid
}
