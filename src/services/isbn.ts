export function parseISBN(isbn: string) {
  const value = isbn.replace(/\D/g, '')
  let error: 'length' | 'format13' | 'format10' | undefined = undefined
  let valid = false
  if (value.length === 13) {
    const sum = Array.from(value.slice(0, 12)).reduce(
      (acc, curr, currentIndex) => {
        const digit = parseInt(curr, 10)
        const multiplier = currentIndex % 2 === 0 ? 1 : 3
        return acc + digit * multiplier
      },
      0
    )
    const remainder = sum % 10
    if (remainder === 0) {
      valid = true
    } else {
      const lastDigit = parseInt(value.slice(-1), 10)
      valid = 10 - remainder === lastDigit
    }
    if (!valid) {
      error = 'format13'
    }
    console.log(sum % 10, value.slice(-1))
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
