import { Book } from '../services/bookModel'
import { getBooks } from '../services/bookStorage'
import React from 'react'
import { Card } from '../basic-components/Card/Card'
import { imageUrl } from '../services/bookApi'
import { generatePath } from 'react-router'
import { BookDetailsRouteMatch } from '../routes/config'

export const List: React.FC<{}> = () => {
  const books: Book[] = getBooks()
  return (
    <div>
      {books.map((x, i) => (
        <Card
          style={{ marginBottom: 8 }}
          key={`${x.isbn_13}-${i}`}
          img={x.covers && imageUrl(x.covers[0], 'M')}
          title={x.title}
          subtitle={x.subtitle}
          href={generatePath(BookDetailsRouteMatch, {
            isbn: books[0].isbn_13[0],
          })}
        />
      ))}
    </div>
  )
}

export default List
