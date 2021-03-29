import { useCallback, useEffect, useState } from "react";
import { fetchBookByISBN } from "./bookApi";
import { Book } from "./bookModel";
import { parseISBN } from "./isbn";

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
            const validationResult = parseISBN(value)
            setValid(validationResult.valid);
            setError(undefined)
            if (validationResult.valid) {
                setLoading(true);
                try {
                    const fetchedBook = await fetchBookByISBN(validationResult.value);
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

