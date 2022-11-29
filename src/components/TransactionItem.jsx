import React from "react";

const TransactionItem = ({ transaction }) => {
  // Positive or Negative Item
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default TransactionItem;
