import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders navbar', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Reinforcement learning/i)
  expect(linkElement).toBeInTheDocument()
});
