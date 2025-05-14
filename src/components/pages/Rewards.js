import React from 'react';
import { Link } from 'react-router-dom';

const Rewards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-8">
      <h1 className="text-3xl font-semibold mb-6">Available Rewards</h1>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">10 Sats Toy</h3>
          <p className="text-gray-600">Use 10 sats to get a toy in the store.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500">
            Redeem Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">50 Sats Bonus</h3>
          <p className="text-gray-600">Save 50 sats and get a special bonus!</p>
          <button className="mt-4 px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500">
            Redeem Now
          </button>
        </div>
      </div>

      <Link to="/kids-dashboard" className="mt-8 text-blue-500 font-semibold">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Rewards;
