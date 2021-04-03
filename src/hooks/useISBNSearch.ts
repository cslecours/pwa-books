import { useCallback, useEffect, useState } from "react";
import { fetchBookByISBN } from "../services/bookApi";
import { Book } from "../services/bookModel";
import { parseISBN } from "../services/isbn";

export const useISBNSearch : () => {onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void, book: Book | undefined, valid: boolean | undefined, error: Error | undefined, loading: boolean | undefined } = () => {
    const [book, setBook] = useState<Book | undefined>(undefined);

    const [state, setState] = useState<{loading?: boolean, valid?: boolean, error?: Error}>({loading: false, valid: false, error: undefined})

    const [value, setValue] = useState('')

    const onChange = useCallback(async (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setValue(value)
    }, [setValue])    

    useEffect(() => {
        (async () => {
            const validationResult = parseISBN(value)
            setState((prevState) => ({...prevState, valid: validationResult.valid, error: undefined}));
            if (validationResult.valid) {
                setState((prevState) => ({...prevState, loading: true}));
                try {
                    const fetchedBook = await fetchBookByISBN(validationResult.value);
                    setBook(fetchedBook)
                } catch (error) {
                    setState((prevState) => ({...prevState, error: error}));
                }

                setState((prevState) => ({...prevState, loading: false}));
            } else {
                setBook(undefined)
            }
        })()
    }, [value])


    return { onChange, book, valid: state.valid, error: state.error, loading: state.loading }
}

