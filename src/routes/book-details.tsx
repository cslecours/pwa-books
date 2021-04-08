import { useRouteMatch } from 'react-router-dom'
import { BookList } from '../components/bookList'
import { useISBNQuery } from '../hooks/useISBNQuery'
import { BookDetailsRoute, BookDetailsRouteMatch } from './config'

export const BookDetailsRouteComponent = () => {
  let match = useRouteMatch<BookDetailsRoute['params']>(BookDetailsRouteMatch)

  const query = useISBNQuery(match?.params.isbn ?? '')
  if (!query.valid) {
    return <>Invalid</>
  }
  if (query.loading) {
    return <>Loading</>
  }
  return (
    <>
      ISBN : {match?.params?.isbn}
      {query.book && <BookList books={[query.book]} />}
    </>
  )
}

export default BookDetailsRouteComponent
