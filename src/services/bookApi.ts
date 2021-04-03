import { Book } from './bookModel'

export function imageUrl(cover: string, size: 'S' | 'M' | 'L'): string {
  return `https://covers.openlibrary.org/b/id/${cover}-${size}.jpg `
}

export async function fetchBookByISBN(isbn: string): Promise<Book> {
  const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
  if (!response.ok) {
    throw new Error('Failed fetchBookByISBN Network')
  }
  if (response.headers.get('Content-Type') === 'application/json') {
    const book = await response.json()
    return book as Book
  } else {
    throw new Error('fetchBookByISBN : Expected json')
  }
}
