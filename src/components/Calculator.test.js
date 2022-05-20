import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonsCal from './Button'
import Calcu from './Calculator'

it('renders', () => {
  render(<ButtonsCal />)
})

it('renders', () => {
  render(<Calcu />)
  const element = screen.getByText(/9/)
  expect(element).toBeInTheDocument()
})
