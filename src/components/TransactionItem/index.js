import './index.css'

const TransactionItem = props => {
  const {eachTransaction} = props
  const {id, title, amount, incomeText} = eachTransaction
  return (
    <li id={id} className="transaction-formate">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{incomeText}</p>
      <button className="del-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
