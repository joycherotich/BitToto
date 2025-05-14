import React from 'react';
import { IoRocketSharp } from 'react-icons/io5';
import SideBar from '../layout/SideBar';
import TopBar from './TopBar';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  // Log out function to clear user session and redirect to login page
  const handleLogout = () => {
    // Clear user session or authentication token here
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-300 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <SideBar  />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <header className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <h1 className="text-xl sm:text-3xl font-serif font-bold text-pink-500 text-center sm:text-left animate-pulse">
              Welcome Back, Saver! 🌟
            </h1>
            <button
              onClick={handleLogout}
              className="bg-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-pink-600 hover:scale-105 transition-all text-base sm:text-lg"
            >
              Log Out
            </button>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-serif text-m">
            {[
              { title: 'Total Savings', value: '₿ 0.056' },
              { title: 'Transactions Today', value: '10' },
              { title: 'Recent Activity', value: '₿ 0.01' }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all"
              >
                <h2 className="text-xl font-serif font-bold text-pink-500">{card.title}</h2>
                <p className="text-3xl font-serif font-bold text-gray-700 mt-2">{card.value}</p>
                <IoRocketSharp className="text-pink-400 font-serif text-4xl mt-4 animate-bounce" />
              </div>
            ))}
          </div>

          {/* Transactions Table */}
          <div className="mt-8 overflow-x-auto">
            <h2 className="text-2xl font-serif font-bold text-pink-500 mb-4">Recent Transactions</h2>
            <table className="w-full table-auto text-sm bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-pink-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 font-serif text-lg text-left">Date</th>
                  <th className="px-4 py-2 font-serif text-lg text-left">Amount</th>
                  <th className="px-4 py-2 font-serif text-lg text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: '2025-05-07', amount: '₿ 0.002', status: 'Completed', color: 'green' },
                  { date: '2025-05-06', amount: '₿ 0.003', status: 'Pending', color: 'yellow' },
                  { date: '2025-05-05', amount: '₿ 0.001', status: 'Failed', color: 'red' }
                ].map((tx, idx) => (
                  <tr key={idx} className="border-t font-serif text-m hover:bg-pink-50">
                    <td className="px-4 py-2">{tx.date}</td>
                    <td className="px-4 py-2">{tx.amount}</td>
                    <td className={`px-4 py-2 text-${tx.color}-500`}>{tx.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
