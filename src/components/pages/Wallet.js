import React from 'react';
import WalletOverview from '../wallet/WalletOverview';
import DepositBitcoin from '../wallet/DepositBitcoin';
import TransactionHistory from '../wallet/TransactionHistory';
import TopBar from './TopBar';
import SideBar from '../layout/SideBar';

const Wallet = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-200">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Main Container */}
        <div className="flex flex-col items-center justify-start px-4 py-8 sm:px-8 lg:px-16">
          <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl shadow-md rounded-xl p-6 sm:p-8 border-2 border-pink-300 transition duration-300 ease-in-out hover:shadow-xl hover:shadow-pink-500 transform hover:scale-102">
            
            <h1 className="text-4xl font-serif font-semibold text-pink-600 text-center mb-8 tracking-tight drop-shadow-lg transition-all">
              🐷 My Magical Wallet
            </h1>

            {/* Wallet Overview */}
            <div className="w-full mb-8 font-serif p-4 bg-gradient-to-br from-pink-200 via-yellow-200 to-purple-200 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-102">
              <h2 className="text-xl text-pink-600 font-semibold mb-4">Wallet Overview</h2>
              <WalletOverview />
            </div>

            {/* Deposit Bitcoin */}
            <div className="w-full mb-8 font-serif p-4 bg-gradient-to-br from-pink-200 via-yellow-200 to-purple-200 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-102">
              <h2 className="text-xl text-pink-600 font-semibold mb-4">Deposit Bitcoin</h2>
              <DepositBitcoin />
            </div>

            {/* Transaction History */}
            <div className="w-full mb-8 font-serif p-4 bg-gradient-to-br from-pink-200 via-yellow-200 to-purple-200 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-102">
              <h2 className="text-xl text-pink-600 font-semibold mb-4">Transaction History</h2>
              <TransactionHistory />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
