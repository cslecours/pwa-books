
export const BookDetailsRouteMatch = '/isbn/:isbn'
export type BookDetailsRoute = {match:typeof BookDetailsRouteMatch, params: {isbn: string}} 

export const BookListRouteMatch = '/list'
export type ListRoute = {match: typeof BookListRouteMatch, params: {}}

export const BookISBNSearchRouteMatch = '/isbn'
export type BookISBNSearchRoute = {match: typeof BookISBNSearchRouteMatch, params: {}}