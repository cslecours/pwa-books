import { Book } from '../services/bookModel'
import { getBooks } from '../services/bookStorage'
import React from 'react'
import { Card } from '../basic-components/Card/Card'
import { imageUrl } from '../services/bookApi'

export const List: React.FC<{}> = () => {
  const books: Book[] = getBooks()
  return (
    <div style={{margin:10}}>
      {books.map((x, i) => (
        <Card style={{marginBottom:8}} key={`${x.isbn_13}-${i}`} img={x.covers && imageUrl(x.covers[0],'M')} title={x.title} subtitle={x.subtitle} />
      ))}
    </div>
  )
}

export default List
