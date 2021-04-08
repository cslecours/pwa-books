import React from 'react'
import { BookList } from './bookList'
import { useISBNSearchQuery } from '../hooks/useISBNQuery'
import { TextField } from '../basic-components/Textfield/TextField'




export const ISBNSearch: React.FC = () => {
  const { onChange, valid, loading, error, book } = useISBNSearchQuery()

  return (
    <div>
      <pre>9782205049879</pre>
      <TextField onChange={onChange} start={'🔎'} end={valid? '✔' : '❌'}/>

      <p></p>
      {!loading && error && 'ERROR'}
      {book && <BookList books={[book]} />}
    </div>
  )
}

export default ISBNSearch
