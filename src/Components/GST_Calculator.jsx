import React, { useState } from "react";
import "./GST_Style.css";

const GST_Calculator = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGSTRate] = useState('');
  const [gstAmount, setGSTAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRateChange = (event) => {
    setGSTRate(event.target.value);
  };

  const calculateGST = () => {
    const calculatedGST = (amount * gstRate) / 100;
    setGSTAmount(calculatedGST.toFixed(2));
  };

  const Reset = (e) => {
    setAmount("");
    setGSTRate("");
    setGSTAmount("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "300",
              marginTop: "-10px",
              color: "black",
            }}
          >
            GST Calculator !
          </h1>
          <div>
            <label>Amount (₹) : </label> <br />
            <input type="number" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="container">
            <label>GST Rate (%) : </label>
            <br />
            <input type="number" value={gstRate} onChange={handleRateChange} />
          </div>

          <div className="btn">
            <button onClick={calculateGST}>Calculate</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div>

          {/* <div className="output">Total Amount : {amount}</div> */}

          <div className="output">GST Amount: ₹{gstAmount}</div>
        </div>
      </form>
    </div>
  );
};

export default GST_Calculator;
