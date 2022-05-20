import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonsCal from './Button'
import Calcu from './Calculator'

//Test de renderización
it('render botones', () => {
  render(<ButtonsCal />)
})

//Test de renderización del mapeo de botones
it('render calculadora', () => {
  render(<Calcu />)
  const element = screen.getByText(/9/)
  expect(element).toBeInTheDocument()
})

//Test para probar operaciones (Suma)
describe('Operation', () => {
  it('Suma', () => {
    render(<Calcu />)
    const btn = screen.getByText(/2/)
    const btn2 = screen.getByText('+')
    const btn3 = screen.getByText(/3/)
    const btn4 = screen.getByText('=')
    const display = screen.getByTitle('Displa')
    expect(display.innerHTML).toBe('')
    fireEvent.click(btn)
    fireEvent.click(btn2)
    fireEvent.click(btn3)
    fireEvent.click(btn4)
    expect(display.innerHTML).toBe('5')
  })
})

//Test para probar operaciones (Resta)
//Y comprobación de no aceptar números negativos
describe('Operation', () => {
  it('Resta', () => {
    render(<Calcu />)
    const btn = screen.getByText(/2/)
    const btn2 = screen.getByText('-')
    const btn3 = screen.getByText(/3/)
    const btn4 = screen.getByText('=')
    const display = screen.getByTitle('Displa')
    expect(display.innerHTML).toBe('')
    fireEvent.click(btn)
    fireEvent.click(btn2)
    fireEvent.click(btn3)
    fireEvent.click(btn4)
    expect(display.innerHTML).toBe('ERROR')
  })
})

//Test para probar operaciones (Multiplicación)
describe('Operation', () => {
  it('Multiplicación', () => {
    render(<Calcu />)
    const btn = screen.getByText(/2/)
    const btn2 = screen.getByText('*')
    const btn3 = screen.getByText(/3/)
    const btn4 = screen.getByText('=')
    const display = screen.getByTitle('Displa')
    expect(display.innerHTML).toBe('')
    fireEvent.click(btn)
    fireEvent.click(btn2)
    fireEvent.click(btn3)
    fireEvent.click(btn4)
    expect(display.innerHTML).toBe('6')
  })
})

//Test para probar operaciones (División)
//Y comprobación 9 carácteres máximo
describe('Operation', () => {
  it('División', () => {
    render(<Calcu />)
    const btn = screen.getByText(/2/)
    const btn2 = screen.getByText('/')
    const btn3 = screen.getByText(/7/)
    const btn4 = screen.getByText('=')
    const display = screen.getByTitle('Displa')
    expect(display.innerHTML).toBe('')
    fireEvent.click(btn)
    fireEvent.click(btn)
    fireEvent.click(btn2)
    fireEvent.click(btn3)
    fireEvent.click(btn4)
    expect(display.innerHTML).toBe('3.1428571')
  })
})

//Test para probar operaciones (Módulo)
describe('Operation', () => {
  it('Módulo', () => {
    render(<Calcu />)
    const btn = screen.getByText(/5/)
    const btnA = screen.getByText(/0/)
    const btn2 = screen.getByText('%')
    const btn3 = screen.getByText(/3/)
    const btn4 = screen.getByText('=')
    const display = screen.getByTitle('Displa')
    expect(display.innerHTML).toBe('')
    fireEvent.click(btn)
    fireEvent.click(btnA)
    fireEvent.click(btn2)
    fireEvent.click(btn3)
    fireEvent.click(btn4)
    expect(display.innerHTML).toBe('2')
  })
})
