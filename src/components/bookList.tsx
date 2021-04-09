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
            title={book.title}
            secondary={book.subtitle}
            thumbnail={
              book.covers && (
                <img src={book.covers && imageUrl(book.covers[0], 'M')} alt=""/>
              )
            }
            actions={
              <Button
                style={{ margin: 'calc(var(--design-unit) * 2px)' }}
                onClick={() => {
                  addBook(book)
                }}
              >
                Add
              </Button>
            }
          />
          <code>
            <pre>{JSON.stringify(book, undefined, 2)}</pre>
          </code>
        </li>
      ))}
    </ul>
  )
}
