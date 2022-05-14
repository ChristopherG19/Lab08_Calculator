import { useState } from 'react'
import './Calculator.css'
import ButtonsCal from './Button'

const buttons = ["AC", "DEL", "/", "X", "1", "2", "3", "-", "4", "5", "6", "+", "7", "8", "9", "0"]
const equal = "=" 

const Calcu = () => {

	const [operationText, setOperationText] = useState("")

	return (
		<div className='calcuBack'>
			<div className='displayBack'>
				<div className='displayT'>
					{operationText}
				</div>
			</div>
			<div className='gridButtons'>
				{buttons.map((element, index) => (
					<ButtonsCal 
						key={index}
						info={element}
					/>
				))}
			</div>
			<div className='equal'>
				<ButtonsCal info={equal}/>
			</div>
		</div>
	)
}

export default Calcu