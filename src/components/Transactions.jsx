import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  // destructured transactions from the Global Context
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
