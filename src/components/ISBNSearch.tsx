import React from 'react'
import { BookList } from './bookList'
// import { useISBNSearch } from "../hooks/useISBNSearch"
import { useISBNSearchQuery } from '../hooks/useISBNQuery'
import reactifyWc from 'reactify-wc'

const FastTextField = reactifyWc('fast-text-field') as any

export const ISBNSearch: React.FC = () => {
  const { onChange, valid, loading, error, book } = useISBNSearchQuery()

  return (
    <div>
      <pre>9782205049879</pre>
      <FastTextField onInput={onChange}>
        <span slot="start"> {'🔍'}</span>
        <span slot="end">
          {loading && '⏳'}
          {valid ? '✅' : '❌'}
        </span>
      </FastTextField>

      <p></p>
      {!loading && error && 'ERROR'}
      {book && <BookList books={[book]} />}
    </div>
  )
}

export default ISBNSearch
