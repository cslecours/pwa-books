import { Book } from './bookModel'

export function addBook(book: Book) {
  const books = getBooks()
  books.push(book)
  sessionStorage.setItem('books', JSON.stringify(books, undefined, 2))
}

export function getBooks(): Book[] {
  const books = JSON.parse(sessionStorage.getItem('books') ?? '[]') as Book[]
  return books
}
