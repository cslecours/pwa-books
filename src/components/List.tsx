import { BookItem } from "./bookList"
import { Book } from "../services/bookModel"
import { getBooks } from "../services/bookStorage"

export const List : React.FC<{}> = () => {
    const books : Book[] = getBooks()
    return <div>{books.map((x,i) => <BookItem key={`${x.isbn_13}-${i}`} book={x}/>)}</div>
}


export default List