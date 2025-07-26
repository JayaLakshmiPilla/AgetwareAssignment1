import React, { useState } from 'react';
import axios from 'axios';

function Ledger() {
  const [loanId, setLoanId] = useState('');
  const [ledger, setLedger] = useState(null);

  const fetchLedger = async () => {
    try {
      const res = await axios.get(`https://agetwareassignment.onrender.com/api/v1/loans/${loanId}/ledger`);
      setLedger(res.data);
    } catch (err) {
      alert('Failed to fetch ledger');
    }
  };

  return (
    <div>
      <h2>Loan Ledger</h2>
      <input placeholder="Loan ID" onChange={(e) => setLoanId(e.target.value)} />
      <button onClick={fetchLedger}>Get Ledger</button>
      {ledger && <pre>{JSON.stringify(ledger, null, 2)}</pre>}
    </div>
  );
}

export default Ledger;
