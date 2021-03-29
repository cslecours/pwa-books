import React from "react";
import { imageUrl } from "./bookApi";
import { Book } from "./bookModel";

export const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <ul>
            {books.map(book => (<li key={book.isbn_13}>
                <BookItem book={book} />
            
                <pre>
                    {JSON.stringify(book, undefined, 2)}
                </pre>
            </li>))}
        </ul>
    )
}

export const BookItem: React.FC<{book: Book}> = ({book}) => {

    return (
    <table>
        <thead style={{background:'red'}}>
            <tr><td>{book.title} - {book.subtitle}</td></tr>
            <tr><td>{book?.covers?.[0] && <img style={{width:300}} src={imageUrl(book.covers[0], 'L')} />}</td></tr>
        </thead>
        <tbody>
        </tbody>    
    </table>)

}