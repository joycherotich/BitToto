import React, { useState } from 'react';
import SideBar from '../layout/SideBar';
import TopBar from '../pages/TopBar';

const ParentSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    twoFactorAuth: false,
    transactionAlerts: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-200">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <TopBar />

        <div className="flex justify-center items-center py-12 px-4 sm:px-8">
          <div className="w-full max-w-3xl bg-white/70 backdrop-blur-lg shadow-xl border border-pink-200 rounded-3xl p-8 sm:p-12">
            <h2 className="text-4xl font-serif font-extrabold text-center text-pink-600 mb-10">👨‍👩‍👧‍👦 Parent Settings</h2>

            {/* Settings Form */}
            <div className="space-y-8 font-serif">
              {[
                { label: "Email Notifications", name: "emailNotifications" },
                { label: "SMS Notifications", name: "smsNotifications" },
                { label: "Two-Factor Authentication", name: "twoFactorAuth" },
                { label: "Transaction Alerts", name: "transactionAlerts" },
              ].map((item) => (
                <div key={item.name} className="flex font-serif items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <span className="text-lg text-gray-700 font-serif font-medium">{item.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={settings[item.name]}
                      onChange={handleChange}
                      className="sr-only peer font-serif"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 peer-focus:ring-2 peer-focus:ring-pink-400 transition-all"></div>
                    <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
                  </label>
                </div>
              ))}
            </div>

            {/* Save Button */}
            <div className="text-center mt-10">
              <button
                onClick={() => alert('🎉 Settings Saved!')}
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

export default ParentSettings;
