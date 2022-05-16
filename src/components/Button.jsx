import './Button.css'

const ButtonsCal = ({ info, click }) => (
  <button className="button-calc" onClick={click} type="button">
    {info}
  </button>
)

export default ButtonsCal
