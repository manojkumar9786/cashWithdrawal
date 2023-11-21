// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onClickDonomination = () => {
    updateBalance(value)
  }
  return (
    <li>
      <button type="button" onClick={onClickDonomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
