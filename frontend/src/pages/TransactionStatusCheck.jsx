import React, { useState } from 'react';
import axios from 'axios';

const TransactionStatusCheck = () => {
  const [customOrderId, setCustomOrderId] = useState('');
  const [status, setStatus] = useState('');

  const checkStatus = async () => {
    const response = await axios.get(`http://localhost:3000/transactions/check-status/${customOrderId}`);
    setStatus(response.data.status);
  };

  return (
    <div>
      <h1>Transaction Status Check</h1>
      <input
        type="text"
        placeholder="Enter Custom Order ID"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
      />
      <button onClick={checkStatus}>Check Status</button>
      {status && <p>Status: {status}</p>}
    </div>
  )}