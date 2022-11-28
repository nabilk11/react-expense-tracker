import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};


export default AddTransaction;



