import React from "react";
import { Book } from "./bookModel";

export const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <ul>
            {books.map(book => (<li>{book.title} - {book.subtitle}
                <pre>
                    {JSON.stringify(book, undefined, 2)}
                </pre>
            </li>))}
        </ul>
    )
}