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
    type: transactionTypeOptions[0].optionId,
    incomeText: transactionTypeOptions[0].displayText,
  }

  titleinput = event => {
    this.setState({title: event.target.value})
  }

  amountinput = event => {
    this.setState({amount: event.target.value})
  }

  incometype = event => {
    this.setState({type: event.target.value})
  }

  formdata = event => {
    const {title, amount, type, balance, expenses} = this.state
    event.preventDefault()
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      balance,
      expenses,
      type,
    }
    this.setState(prevState => ({
      moneyDetails: [...prevState.moneyDetails, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {moneyDetails, amount, balance, expenses} = this.state
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
            <label className="label-input" htmlFor="text">
              TITLE
            </label>
            <input
              type="text"
              id="text"
              className="input"
              placeholder="TITLE"
              onChange={this.titleinput}
            />
            <label className="label-input" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
              onChange={this.amountinput}
            />
            <label className="label-input" htmlFor="drop">
              TYPE
            </label>
            <select className="input" onChange={this.type}>
              {transactionTypeOptions.map(eachitem => (
                <option id={eachitem.optionId}>{eachitem.displayText}</option>
              ))}
            </select>
            <button type="submit" className="form-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul>
              <div className="transaction-container">
                <li className="transaction-formate">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>

                {moneyDetails.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    eachTransaction={eachTransaction}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
