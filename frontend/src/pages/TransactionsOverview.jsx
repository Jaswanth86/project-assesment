import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsOverview = () => {
  const [transactions, setTransactions] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:3000/transactions');
      setTransactions(response.data);
    };
    fetch (Transactions());
  }, []);

  const filteredTransactions = transactions.filter(transaction => {
    return (
      (statusFilter ? transaction.status === statusFilter : true) &&
      (searchTerm ? transaction.custom_order_id.includes(searchTerm) : true)
    );
  });

  return (
    <div>
      <h1>Transactions Overview</h1>
      <input
        type="text"
        placeholder="Search by Custom Order ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
        <option value="">All Statuses</option>
        <option value="Success">Success</option>
        <option value="Pending">Pending</option>
        <option value="Failed">Failed</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Collect ID</th>
            <th>School ID</th>
            <th>Gateway</th>
            <th>Order Amount</th>
            <th>Transaction Amount</th>
            <th>Status</th>
            <th>Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.custom_order_id}>
              <td>{transaction.collect_id}</td>
              <td>{transaction.school_id}</td>
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

export default TransactionsOverview;