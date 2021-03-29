import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import { fetchBookByISBN } from './isbn/bookApi';
import { BookList } from './isbn/bookList';
import { Book } from './isbn/bookModel';


const useISBNSearch = () => {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined)
  const [valid, setValid] = useState<boolean | undefined>(undefined)
  const [value, setValue] = useState('')

  const onChange = useCallback(async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setValue(value)
  }, [setValue])

  useEffect(() => {
    (async () => {
      const isValid = (value.length === 10 || value.length === 13)
      setValid(isValid);
      setError(undefined)
      if (isValid) {
        setLoading(true);
        try {
          const fetchedBook = await fetchBookByISBN(value);
          setBook(fetchedBook)
        } catch (error) {
          setError(error)
        }

        setLoading(false)
      } else {
        setBook(undefined)
      }
    })()
  }, [value])


  return { onChange, book, valid, error, isLoading }
}

function App() {
  const { onChange, valid, isLoading, error, book } = useISBNSearch()

  return (
    <div>
      <input type="text" onChange={onChange} />
      <p>
        {valid ? 'valid' : 'invalid'}<br />
        {isLoading && 'loading...'}
      </p>
      {error?.toString()}
      {book && <BookList books={[book]} />}
    </div>
  );
}

export default App;
function classNames(): string | undefined {
  throw new Error('Function not implemented.');
}

