const TransactionItem = props => {
    const {eachTransaction} = props
    return (
      <li>
        <p>salary</p>
        <p>Amount</p>
        <p>type</p>
        <button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
  
  export default TransactionItem
  