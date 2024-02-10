import './index.css'

const DenominationItem = props => {
  const {denominations, onDecrement} = props
  const {value} = denominations
  const onChangeValue = () => {
    onDecrement(value)
  }
  return (
    <li className="listItem">
      <button type="button" className="button" onClick={onChangeValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
