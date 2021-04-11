import React from 'react'
import { BookList } from './bookList'
import { useISBNSearchQuery } from '../hooks/useISBNQuery'
import { TextField } from '../basic-components/Textfield/TextField'

export const ISBNSearch: React.FC = () => {
  const {
    onChange,
    loading,
    error,
    valid,
    isbnValidation,
    book,
  } = useISBNSearchQuery()

  return (
    <div>
      <TextField
        onChange={onChange}
        start={'🔎'}
        end={
          isbnValidation === 'length' ? undefined : valid ? (
            '✔'
          ) : (
            <span title={isbnValidation}>❌</span>
          )
        }
      />

      <p></p>
      {!loading && error && 'ERROR'}
      {book && <BookList books={[book]} />}
    </div>
  )
}

export default ISBNSearch
