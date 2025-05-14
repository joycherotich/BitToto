// src/components/wallet/WalletOverview.js
import React from 'react';

const WalletOverview = () => {
  const balance = 250; // Example balance in Satoshis (Sats)

  return (
    <section className="bg-white shadow-md rounded-lg p-5 border-l-4 border-pink-400">
      <h3 className="text-lg font-bold text-pink-600 mb-2">Current Balance</h3>
      <p className="text-3xl text-gray-800">
        {balance.toLocaleString()} <span className="text-base text-gray-600">Sats</span>
      </p>
    </section>
  );
};

export default WalletOverview;
