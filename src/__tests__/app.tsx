import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/home'

test('checks if home is rendered', () => {
  render(<Home />)
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})
