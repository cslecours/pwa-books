import { parseISBN } from './isbn'

//

describe('parseIsbn10', () => {
  it.each`
    input            | output
    ${'1112223339'}  | ${true}
    ${'111222333'}   | ${false}
    ${'1112223339X'} | ${false}
    ${'1234554321'}  | ${true}
    ${'1234512345'}  | ${false}
    ${'048665088X'}  | ${true}
    ${'X123456788'}  | ${false}
    ${'2222222222'}  | ${true}
    ${'9971502100'}  | ${true}
  `('should return $output when $input', ({ input, output }) => {
    const { valid } = parseISBN(input)
    expect(valid).toBe(output)
  })
})

describe('parseIsbn13', () => {
  it.each`
    input                  | output
    ${'978-1-4028-9462-6'} | ${true}
    ${'978-1734314509'}    | ${false}
    ${'978-1788399081'}    | ${true}
    ${'978-1788399083'}    | ${false}
    ${'9782205049879'}     | ${true}
  `('should return $output when $input', ({ input, output }) => {
    const { valid } = parseISBN(input)
    expect(valid).toBe(output)
  })
})
