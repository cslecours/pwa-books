import { useCallback, useEffect, useState } from "react";
import { fetchBookByISBN } from "./bookApi";
import { Book } from "./bookModel";

export const useISBNSearch = () => {
    const [book, setBook] = useState<Book | undefined>(undefined);
    const [loading, setLoading] = useState(false);
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


    return { onChange, book, valid, error, loading }
}

