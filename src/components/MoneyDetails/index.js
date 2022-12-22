import './index.css'

const MoneyDetails = props => {
  const {amount, balance, expenses} = props
  return (
    <div className="money-details">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="logo"
          alt="balance"
        />
        <div className="card-details">
          <p>Your Balance</p>
          <h3>Rs {balance}</h3>
        </div>
      </div>

      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="logo"
          alt="balance"
        />
        <div className="card-details">
          <p>Your Income</p>
          <h3>Rs {amount}</h3>
        </div>
      </div>

      <div className="expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="logo"
          alt="balance"
        />
        <div className="card-details">
          <p>Your Expenses</p>
          <h3>Rs {expenses}</h3>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
