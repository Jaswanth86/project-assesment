import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionDetails = () => {
  const [schoolId, setSchoolId] = useState('');
  const [transactions, setTransactions] = useState([]);

  const fetchTransactionsBySchool = async () => {
    if (schoolId) {
      const response = await axios.get(`http://localhost:3000/transactions/school/${schoolId}`);
      setTransactions(response.data);
    }
  };

  return (
    <div>
      <h1>Transaction Details by School</h1>
      <input
        type="text"
        placeholder="Enter School ID"
        value={schoolId}
        onChange={(e) => setSchoolId(e.target.value)}
      />
      <button onClick={fetchTransactionsBySchool}>Fetch Transactions</button>
      <table>
        <thead>
          <tr>
            <th>Collect ID</th>
            <th>Gateway</th>
            <th>Order Amount</th>
            <th>Transaction Amount</th>
            <th>Status</th>
            <th>Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.custom_order_id}>
              <td>{transaction.collect_id}</td>
              <td>{transaction.gateway}</td>
              <td>{transaction.order_amount}</td>
              <td>{transaction.transaction_amount}</td>
              <td>{transaction.status}</td>
              <td>{transaction.custom_order_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetails;