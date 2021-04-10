export function parseISBN(isbn: string) {
  const value = isbn.replace(/[^0-9X]/gi, '')
  let error: 'length' | 'format13' | 'format10' | undefined = undefined
  let valid = false
  if (value.length === 13) {
    try {
      valid = validateISBN13(value)
      if (!valid) error = 'format13'
    } catch {
      error = 'format13'
    }
  } else if (value.length === 10) {
    try {
      valid = validateISBN10(value)
      if (!valid) error = 'format10'
    } catch {
      error = 'format10'
    }
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

  const total = Array.from(isbn.slice(0, length))
    .map((char, index) => {
      const digit = parseInt(char, 10)
      if (Number.isNaN(digit)) {
        throw new Error('Invalid Format')
      }
      const multiplier = getMultiplier(index)
      return digit * multiplier
    })
    .reduce((acc, curr) => acc + curr)

  return total
}

export function validateISBN10(isbn: string): boolean {
  const lastChar = isbn.slice(-1)
  const check = lastChar === 'X' ? 10 : parseInt(lastChar)
  const sum = total(isbn, (idx) => idx + 1)
  return sum % 11 === check
}

function validateISBN13(isbn: string): boolean {
  let valid = false
  const remainder = total(isbn, (idx) => (idx % 2 === 0 ? 1 : 3)) % 10

  const checkDigit = parseInt(isbn.slice(-1), 10)
  console.log(remainder, checkDigit)
  if (remainder === 0) {
    valid = checkDigit === 0
  } else {
    const restOfRemainder = 10 - remainder
    valid = restOfRemainder === checkDigit || remainder === checkDigit
  }
  return valid
}
