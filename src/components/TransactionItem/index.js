import './index.css'

const TransactionItem = props => {
  const {key, eachTransaction, transactionDelete} = props
  const {id, title, amount, incomeText} = eachTransaction
  const deletetransction = () => {
    transactionDelete(id)
  }
  return (
    <li key={key} className="transaction-formate">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{incomeText}</p>
      <button className="del-button" onClick={deletetransction} testid="delete">
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
