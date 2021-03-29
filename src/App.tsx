import './App.css';
import { BookList } from './isbn/bookList';
import { useISBNSearch } from './isbn/useISBNSearch';



function App() {
  const { onChange, valid, loading, error, book } = useISBNSearch()

  return (
    <div>
      <input type="text" onChange={onChange} />
      <p>
        {valid ? 'valid' : 'invalid'}<br />
        {loading && 'loading...'}
      </p>
      {error?.toString()}
      {book && <BookList books={[book]} />}
    </div>
  );
}

export default App;