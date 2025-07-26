import React, { useState } from 'react';
import axios from 'axios';

function MakePayment() {
  const [loan_id, setLoanId] = useState('');
  const [amount, setAmount] = useState('');
  const [payment_type, setPaymentType] = useState('EMI');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `https://agetwareassignment.onrender.com/api/v1/loans/${loan_id}/payments`,
        { amount, payment_type }
      );
      setResponse(res.data);
    } catch (err) {
      alert('Error making payment');
    }
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <input placeholder="Loan ID" onChange={(e) => setLoanId(e.target.value)} />
      <input placeholder="Amount" type="number" onChange={(e) => setAmount(e.target.value)} />
      <select onChange={(e) => setPaymentType(e.target.value)}>
        <option value="EMI">EMI</option>
        <option value="LUMP_SUM">LUMP_SUM</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default MakePayment;
