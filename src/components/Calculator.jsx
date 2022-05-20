import React from 'react'
import './Calculator.css'
import ButtonsCal from './Button'

const buttons = ['%', 'C', 'DEL', '/', '1', '2', '3', '*', '4', '5', '6', '-', '7', '8', '9', '+', '0', '.', '=']
const Calcu = () => {
  const [operationText, setOperationText] = React.useState(0)
  const [ValueA, setValueA] = React.useState('')
  const [ValueB, setValueB] = React.useState('')
  const [ValueOpe, setValueOpe] = React.useState('')

  const clear = () => {
    setOperationText('')
    setValueA('')
    setValueB('')
    setValueOpe('')
  }

  React.useEffect(() => {
    if (eval(ValueA + ValueOpe + ValueB) === Infinity) {
      setOperationText('ERROR')
    } else if (eval(ValueA + ValueOpe + ValueB) < 0) {
      setOperationText('ERROR')
    } else if (eval(ValueA + ValueOpe + ValueB) > 999999999) {
      setOperationText('ERROR')
    } else if (ValueA === 'ERROR' || ValueB === 'ERROR' || ValueOpe === 'ERROR') {
      setOperationText('')
    } else if (ValueA === '' || ValueB === '' || ValueOpe === '') {
      setOperationText('')
    } else if (eval(ValueA + ValueOpe + ValueB).toString().length <= 9) {
      setOperationText(eval(ValueA + ValueOpe + ValueB))
    } else {
      setOperationText(eval(ValueA + ValueOpe + ValueB).toString().slice(0, -8))
    }
  }, [ValueB])

  return (
    <div className="calcuBack">
      <div className="displayT">
        {operationText}
      </div>
      <div className="gridButtons">
        {buttons.map((element, index) => (
          <ButtonsCal
            key={index}
            info={element}
            click={() => {
              if (element === 'C') {
                clear()
              } else if (element === 'DEL') {
                setOperationText(operationText.slice(0, -1))
              } else if (element === '/' || element === '*' || element === '-' || element === '+' || element === '%') {
                setValueOpe(element)
                setValueA(operationText)
                setOperationText('')
              } else if (operationText === 'ERROR') {
                setOperationText('')
              } else if (operationText.length > 9) {
                setOperationText(operationText.slice(0, 9))
              } else if (element === '=') {
                setValueB(operationText)
              } else {
                setOperationText(operationText + element)
              }
            }}
            className={element === '0' ? 'button-calc span2' : 'button-calc'}
          />
        ))}
      </div>
    </div>
  )
}

export default Calcu
