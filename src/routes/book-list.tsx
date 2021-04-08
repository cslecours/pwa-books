import { useRouteMatch } from 'react-router-dom'
import List from '../components/List'
import { BookListRoute, BookListRouteMatch } from './config'

export const BookListRouteComponent = () => {
  let match = useRouteMatch<BookListRoute['params']>(BookListRouteMatch)

  return (
    <>
      <List />
    </>
  )
}

export default BookListRouteComponent
