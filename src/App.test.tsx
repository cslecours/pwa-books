import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Header } from './components/layout/Header'

test('renders Header', async () => {
  render(<Header />)
  const linkElement = await screen.findByText('Book Pages')
  expect(linkElement).toBeInTheDocument()
})
