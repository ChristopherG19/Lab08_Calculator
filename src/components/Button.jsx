import './Button.css'

const ButtonsCal = ({ info, click }) => {
	return (
		<div className='button-calc' onClick={click}>
			{info}
		</div>
	)
}

export default ButtonsCal