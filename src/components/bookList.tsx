import React from 'react'
import { Card } from '../basic-components/Card/Card'
import { imageUrl } from '../services/bookApi'
import { Book } from '../services/bookModel'
import { addBook } from '../services/bookStorage'
import { Button } from '../basic-components/Button/Button'

export const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index} style={{ marginBottom: 4 }}>
          <Card
            img={book.covers && imageUrl(book.covers[0], 'M')}
            title={book.title}
            subtitle={book.subtitle}
          >
            <Button
              style={{ margin: 'calc(var(--design-unit) * 2px)' }}
              onClick={() => {
                addBook(book)
              }}
            >
              Add
            </Button>
          </Card>

          <code>
            <pre>{JSON.stringify(book, undefined, 2)}</pre>
          </code>
        </li>
      ))}
    </ul>
  )
}
