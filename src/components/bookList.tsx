import React from 'react'
import { imageUrl } from '../services/bookApi'
import { Book } from '../services/bookModel'
import { addBook } from '../services/bookStorage'
import reactifyWc from 'reactify-wc'

const FastButton = reactifyWc('fast-button') as any
const FastCard = reactifyWc('fast-card') as any

export const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          
            <BookItem book={book} />
            

          <code>
            <pre>{JSON.stringify(book, undefined, 2)}</pre>
          </code>
        </li>
      ))}
    </ul>
  )
}

export const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  return (
<FastCard style={{width: 300, paddingTop:0, paddingLeft:0, paddingRight:0}}>
              {book?.covers?.[0] && (
        <img
          style={{ width: 300 }}
          src={imageUrl(book.covers[0], 'L')}
          alt="book"
        />
      )}
    <div style={{margin:'calc(var(--design-unit) * 2px)'}}>

      {book.title} - {book.subtitle}
      
    </div>
    <FastButton  style={{margin:'0 calc(var(--design-unit) * 2px)'}}
              onClick={() => {
                addBook(book)
              }}
            >
              Add
            </FastButton>
            </FastCard>
  )
}
