export function parseISBN (isbn:string){
    const value = isbn.replace(/\D/g,'')
    const valid = (value.length === 10 || value.length === 13)
    return {valid, value}
}