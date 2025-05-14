import React, { useState } from 'react';

const DepositBitcoin = () => {
  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setSuccessMessage('Please enter a valid amount!');
      return;
    }

    // Simulate deposit success
    setSuccessMessage(`🎉 You've deposited ${amount} BTC to kids wallet!`);
    setAmount('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">Deposit Bitcoin 💰</h2>
      
      <form onSubmit={handleDeposit} className="flex flex-col gap-4">
        <input
          type="number"
          step="0.0001"
          placeholder="Enter BTC amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-pink-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-400 transition"
        >
          Deposit Now
        </button>

        {successMessage && (
          <p className="text-green-600 font-medium mt-2">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default DepositBitcoin;
