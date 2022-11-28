import React, { useState } from "react";

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)


    
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text..." value={text} onChange={ (e) => setText(e.target.value) } />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter Amount..." value={amount} onChange={ (e) => setAmount(e.target.value) } />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};


export default AddTransaction;



