import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initialmoneyDetails = []

class MoneyManager extends Component {
  state = {
    moneyDetails: initialmoneyDetails,
    title: '',
    amount: 0,
    balance: 0,
    expenses: 0,
    incometype: '',
  }

  titleinput = event => {
    this.setState({title: event.target.value})
  }

  amountinput = event => {
    this.setState({amount: event.target.value})
  }

  incometype = event => {
    this.setState({incometype: event.target.value})
  }

  formdata = event => {
    const {title, amount, incometype, balance, expenses} = this.state
    event.prevent.Default()
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      balance,
      expenses,
      incometype,
    }
    this.setState(prevState => ({
      moneyDetails: [...prevState.moneyDetails, newTransaction],
    }))
  }

  render() {
    const {
      moneyDetails,
      title,
      amount,
      incometype,
      balance,
      expenses,
    } = this.state
    console.log(moneyDetails)
    return (
      <div className="bg-container">
        <div className="customer-details">
          <h1>Hello, Richard</h1>
          <p>
            Welcome back to your <span className="bold-text">Money Manger</span>
          </p>
        </div>
        <MoneyDetails amount={amount} balance={balance} expenses={expenses} />

        <div className="transcation">
          <form className="form-details" onSubmit={this.formdata}>
            <h1>Add Transaction</h1>
            <label htmlFor="text">TITLE</label>
            <input
              type="text"
              id="text"
              placeholder="TITLE"
              onChange={this.titleinput}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              type="text"
              id="amount"
              placeholder="AMOUNT"
              onChange={this.amountinput}
            />
            <label htmlFor="drop">TYPE</label>
            <select onChange={this.incometype}>
              {transactionTypeOptions.map(eachitem => (
                <option id={eachitem.optionId}>{eachitem.displayText}</option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul>
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              {moneyDetails.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  eachTransaction={eachTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
