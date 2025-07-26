import React, { useState } from 'react';
import axios from 'axios';

function Overview() {
  const [customerId, setCustomerId] = useState('');
  const [overview, setOverview] = useState(null);

  const fetchOverview = async () => {
    try {
      const res = await axios.get(`https://agetwareassignment.onrender.com/api/v1/customers/${customerId}/overview`);
      setOverview(res.data);
    } catch (err) {
      alert('Failed to fetch overview');
    }
  };

  return (
    <div>
      <h2>Customer Loan Overview</h2>
      <input placeholder="Customer ID" onChange={(e) => setCustomerId(e.target.value)} />
      <button onClick={fetchOverview}>Get Overview</button>
      {overview && <pre>{JSON.stringify(overview, null, 2)}</pre>}
    </div>
  );
}

export default Overview;
