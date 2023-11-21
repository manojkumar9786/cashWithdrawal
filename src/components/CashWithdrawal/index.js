// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = () => {
    this.setState(prevState => ({balance: prevState.balance - 10}))
  }

  render() {
    const {denominationList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <span className="logo">{initial}</span>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p>{balance}</p>
              <span>In Rupees</span>
            </div>
          </div>
          <p>Withdraw</p>
          <span>CHOOSE SUM(IN RUPEES)</span>
          <div className="amount-container">
            <ul>
              {denominationList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
