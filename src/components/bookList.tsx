import React from 'react'
import { Card } from '../basic-components/Card'
import { imageUrl } from '../services/bookApi'
import { Book } from '../services/bookModel'
import { addBook } from '../services/bookStorage'
import reactifyWc from 'reactify-wc'

const FastButton = reactifyWc('fast-button') as any

export const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index} style={{marginBottom:4}}>
          <Card
            img={book.covers && imageUrl(book.covers[0], 'M')}
            title={book.title}
            subtitle={book.subtitle}
          >
            <FastButton
              style={{ margin: 'calc(var(--design-unit) * 2px)' }}
              onClick={() => {
                addBook(book)
              }}
            >
              Add
            </FastButton>
          </Card>

          <code>
            <pre>{JSON.stringify(book, undefined, 2)}</pre>
          </code>
        </li>
      ))}
    </ul>
  )
}
