import './index.css'

const MoneyDetails = props => {
  const {incomeamount, balanceamount, expenses} = props
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
          <p testid="balanceAmount" className="amount">
            Rs {balanceamount}
          </p>
        </div>
      </div>

      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="logo"
          alt="income"
        />
        <div className="card-details">
          <p>Your Income</p>
          <p testid="incomeAmount" className="amount">
            Rs {incomeamount}
          </p>
        </div>
      </div>

      <div className="expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="logo"
          alt="expenses"
        />
        <div className="card-details">
          <p>Your Expenses</p>
          <p testid="expensesAmount" className="amount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
