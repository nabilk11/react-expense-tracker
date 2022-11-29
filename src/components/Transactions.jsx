import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transactions = () => {
    // destructured transactions from the Global Context
    const { transactions } = useContext(GlobalContext)


  return (
    <div>
      <h3>Transaction History</h3>
      <ul id="list" className="list">
      { transactions.map(transaction => (
        <li className="minus">
          { transaction.text } <span >${transaction.amount.toFixed(2)}</span>
          <button className="delete-btn">x</button>
        </li>
      )) }
        
      </ul>
    </div>
  );
};

export default Transactions;
