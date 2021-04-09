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
    <div style={{display:"flex", flexWrap: "wrap", background:'#ddd', padding:10}}>
      {books.map((x, i) => (
        <Card
          style={{ maxWidth: 300, marginRight:20, marginBottom:20 }}
          key={`${x.isbn_13}-${i}`}
          thumbnail={x.covers && <img src={x.covers && imageUrl(x.covers[0], 'S')} alt=""/>}
          mediaContent={x.covers && <img src={x.covers && imageUrl(x.covers[0], 'M')} alt=""/>}
          title={x.title}
          secondary={x.subtitle}
          href={generatePath(BookDetailsRouteMatch, {
            isbn: books[0].isbn_13[0],
          })}
        />
      ))}
    </div>
  )
}

export default List
