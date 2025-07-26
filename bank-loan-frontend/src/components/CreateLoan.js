import React, { useState } from 'react';
import axios from 'axios';

function CreateLoan() {
  const [form, setForm] = useState({
    customer_id: '',
    loan_amount: '',
    loan_period_years: '',
    interest_rate: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'https://agetwareassignment.onrender.com/api/v1/loans',
        form
      );
      setResult(res.data);
    } catch (error) {
      console.error('Loan creation failed:', error.response?.data || error.message);
      alert('Error creating loan');
    }
  };

  return (
    <div>
      <h2>Create Loan</h2>
      <div className="form-group">
        <label>Customer ID</label>
        <input name="customer_id" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Loan Amount</label>
        <input name="loan_amount" type="number" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Loan Period (Years)</label>
        <input name="loan_period_years" type="number" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Interest Rate (%)</label>
        <input name="interest_rate" type="number" onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      {result && (
        <div className="result-box">
          <h3>Loan Created</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CreateLoan;
