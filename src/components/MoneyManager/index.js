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
    amountInput: '',

    type: transactionTypeOptions[0].optionId,
  }

  titleinput = event => {
    this.setState({title: event.target.value})
  }

  changeamountinput = event => {
    this.setState({amountInput: event.target.value})
  }

  incometype = event => {
    this.setState({type: event.target.value})

    // console.log(event.target.value)
  }

  transactionDelete = id => {
    const {moneyDetails} = this.state
    const filterdata = moneyDetails.filter(eachitems => eachitems.id !== id)
    this.setState({moneyDetails: filterdata})
  }

  formdata = event => {
    event.preventDefault()
    const {title, amountInput, type} = this.state

    const typeOption = transactionTypeOptions.find(
      eachoptions => eachoptions.optionId === type,
    )

    const displaytext = typeOption.displayText
    // console.log(typeOption.displayText)

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amountInput),
      incomeText: displaytext,
    }
    this.setState(prevState => ({
      moneyDetails: [...prevState.moneyDetails, newTransaction],
      title: '',
      amountInput: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  getexpenses = () => {
    const {moneyDetails} = this.state
    let expenses = 0

    moneyDetails.forEach(each => {
      if (each.incomeText === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {moneyDetails} = this.state
    let incomeamount = 0
    moneyDetails.forEach(each => {
      if (each.incomeText === transactionTypeOptions[0].displayText) {
        incomeamount += each.amount
      }
    })
    return incomeamount
  }

  getBalance = () => {
    const {moneyDetails} = this.state
    let balanceamount = 0
    let incomeamount = 0
    let expenses = 0
    moneyDetails.forEach(each => {
      if (each.incomeText === transactionTypeOptions[0].displayText) {
        incomeamount += each.amount
      } else if (each.incomeText === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    balanceamount = incomeamount - expenses
    return balanceamount
  }

  render() {
    const {moneyDetails, amountInput, type} = this.state
    console.log(moneyDetails)
    const expenses = this.getexpenses()
    const incomeamount = this.getIncome()
    const balanceamount = this.getBalance()
    return (
      <div className="bg-container">
        <div className="customer-details">
          <h1>Hello, Richard</h1>
          <p>
            Welcome back to your <span className="bold-text">Money Manger</span>
          </p>
        </div>

        <MoneyDetails
          incomeamount={incomeamount}
          expenses={expenses}
          balanceamount={balanceamount}
        />

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
              onChange={this.changeamountinput}
            />
            <label className="label-input" htmlFor="drop">
              TYPE
            </label>
            <select className="input" onChange={this.incometype} value={type}>
              {transactionTypeOptions.map(eachitem => (
                <option id={eachitem.optionId} value={eachitem.optionId}>
                  {eachitem.displayText}
                </option>
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
                    transactionDelete={this.transactionDelete}
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
