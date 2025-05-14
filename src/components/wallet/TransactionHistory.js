// src/components/wallet/TransactionHistory.js
import React from 'react';

const TransactionHistory = () => {
  // Example mock transaction data
  const transactions = [
    { id: 1, type: 'Deposit', amount: 0.01, date: '2025-05-10', status: 'Completed' },
    { id: 2, type: 'Gift Received', amount: 0.005, date: '2025-05-08', status: 'Completed' },
    { id: 3, type: 'Withdrawal', amount: 0.002, date: '2025-05-05', status: 'Pending' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-400">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">Transaction History 📜</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-pink-100">
          <thead>
            <tr className="bg-pink-100 text-pink-700 text-left">
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Amount (BTC)</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-pink-50 transition">
                <td className="py-2 px-4 border-b">{tx.type}</td>
                <td className="py-2 px-4 border-b">{tx.amount}</td>
                <td className="py-2 px-4 border-b">{tx.date}</td>
                <td className={`py-2 px-4 border-b font-semibold ${
                  tx.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
