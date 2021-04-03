import React from "react"
import { BookList } from "./bookList"
// import { useISBNSearch } from "../hooks/useISBNSearch"
import { useISBNSearchQuery } from "../hooks/useISBNQuery"


export const ISBNSearch: React.FC = () => {
    const { onChange, valid, loading, error, book } = useISBNSearchQuery()

    return (<div><pre>9782205049879</pre>
        <input type="text" onChange={onChange} /> {valid ? '✅' : '❌'}
        <p>
            {loading && 'loading...'}
        </p>
        {!loading && error && 'ERROR'}
        {book && <BookList books={[book]} />}
    </div>)
}

export default ISBNSearch