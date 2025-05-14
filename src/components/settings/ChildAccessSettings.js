import React, { useState } from 'react';
import SideBar from '../layout/SideBar';
import TopBar from '../pages/TopBar';

const ChildAccessSettings = () => {
  const [settings, setSettings] = useState({
    transactionLimit: 50,
    contentFilter: true,
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-200">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopBar />

        <div className="flex justify-center items-center py-12 px-4 sm:px-8">
          <div className="w-full max-w-3xl bg-white/70 backdrop-blur-lg shadow-xl border border-pink-200 rounded-3xl p-8 sm:p-12">
            <h2 className="text-4xl font-serif font-extrabold text-center text-pink-600 mb-10">
              👶 Child Access Settings
            </h2>

            {/* Form Fields */}
            <div className="space-y-8">
              {/* Transaction Limit */}
              <div className="flex flex-col">
                <label htmlFor="transactionLimit" className="text-m font-serif text-gray-700 font-medium mb-2">
                  💸 Transaction Limit (USD)
                </label>
                <input
                  type="number"
                  id="transactionLimit"
                  name="transactionLimit"
                  value={settings.transactionLimit}
                  onChange={handleChange}
                  className="p-3 border border-pink-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                  min="1"
                />
              </div>

              {/* Content Filtering */}
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <span className="text-m font-serif text-gray-700 font-medium">🔒 Enable Content Filtering</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="contentFilter"
                    checked={settings.contentFilter}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 transition-all"></div>
                  <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
                </label>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <span className="text-m font-serif text-gray-700 font-medium">🔔 Enable Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 transition-all"></div>
                  <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-center font-serif mt-10">
              <button
                onClick={() => alert('✅ Settings Saved!')}
                className="bg-pink-600 font-serif hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildAccessSettings;
