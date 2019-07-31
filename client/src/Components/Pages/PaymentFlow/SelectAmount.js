import React, { useState } from 'react';

export const SelectAmount = (props) => {
  const [amount, setAmount] = useState(5)

  // Stretch goal: we can set user's currency in database and store it in Redux store
  const currency = "$"

  const submitHandler = () => {
    // Go to 'Enter Code'
    props.history.push('/tip')
  }

  return (
    <>
      <div className="upperRow">
        Log In or Register
      </div>

      <div className="selectAmount">
        <h2>SelectAmount</h2>
        $<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button
          onClick={() => submitHandler()}
        >
          Next
        </button>
      </div>

      <div className="buttonRow">
        <button
          onClick={() => setAmount(5)}
        >
          {currency}5
        </button>

        <button
          onClick={() => setAmount(10)}
        >
          {currency}10
        </button>

        <button
          onClick={() => setAmount(15)}
        >
          {currency}15
        </button>
      </div>
    </>
  )
}

export default SelectAmount;
