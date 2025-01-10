import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TransactionsOverview from './pages/TransactionsOverview';
import TransactionDetails from './pages/TransactionDetails';
import TransactionStatusCheck from './pages/TransactionStatusCheck';

const App = () => {
return (
 <div className="container mx-auto p-4">
   <h1 className="text-2xl font-bold">School Payments Dashboard</h1>
   <Routes>
     <Route path="/" element={<TransactionsOverview />} />
     <Route path="/details" element={<TransactionDetails />} />
     <Route path="/check-status" element={<TransactionStatusCheck />} />
   </Routes>
 </div>
);
};

export default App;