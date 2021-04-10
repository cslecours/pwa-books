import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchBookByISBN } from '../services/bookApi'
import { Book } from '../services/bookModel'
import { parseISBN } from '../services/isbn'

const createISBNQueryKey = (isbn: string) => ['isbn-query', isbn]

export const useISBNQuery = (value: string) => {
  const { valid, error, value: isbn } = parseISBN(value)

  const query = useQuery<Book, Error>(
    createISBNQueryKey(isbn),
    () => fetchBookByISBN(isbn),
    { retry: false, staleTime: 60_000_000, enabled: valid }
  )

  return {
    book: query.data,
    error: query.error,
    loading: query.isLoading,
    isbnValidation: error,
    valid,
  }
}

export const useISBNSearchQuery: () => {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
} & ReturnType<typeof useISBNQuery> = () => {
  const [value, setValue] = useState('')

  const onChange = useCallback(
    async (evt: React.ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value
      setValue(value)
    },
    [setValue]
  )

  const query = useISBNQuery(value)

  return {
    onChange,
    ...query,
  }
}
