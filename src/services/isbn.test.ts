import { parseISBN } from './isbn'

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
  `('should return $output when $input', ({ input, output }) => {
    const { valid } = parseISBN(input)
    expect(valid).toBe(output)
  })
})
