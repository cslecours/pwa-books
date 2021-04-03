import React from 'react'
import { imageUrl } from '../services/bookApi'
import { Book } from '../services/bookModel'
import { addBook } from '../services/bookStorage'

export const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <button
            onClick={() => {
              addBook(book)
            }}
          >
            Add
          </button>
          <BookItem book={book} />

          <pre>{JSON.stringify(book, undefined, 2)}</pre>
        </li>
      ))}
    </ul>
  )
}

export const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            {book.title} - {book.subtitle}
          </td>
        </tr>
        <tr>
          <td>
            {book?.covers?.[0] && (
              <img
                style={{ width: 300 }}
                src={imageUrl(book.covers[0], 'L')}
                alt="book"
              />
            )}
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}
