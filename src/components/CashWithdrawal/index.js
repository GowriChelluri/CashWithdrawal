import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  onDecrement = value => {
    this.setState(prevState => ({amt: prevState.amt - value}))
  }

  render() {
    const {amt} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <button type="button" className="name-button">
              S
            </button>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="bal">Your Balance</p>
            <div>
              <p className="rupees">{amt}</p>
              <p className="description">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="values-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                denominations={eachValue}
                key={eachValue.id}
                onDecrement={this.onDecrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
