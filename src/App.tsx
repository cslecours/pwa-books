import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import { fetchBookByISBN } from './isbn/bookApi';
import { BookList } from './isbn/bookList';
import { Book } from './isbn/bookModel';


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

