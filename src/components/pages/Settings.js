import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaUsers, FaLock } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-pink-200 p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FaCog className="text-4xl text-pink-600" />
        <h1 className="text-3xl font-bold ml-4 text-pink-700">Settings</h1>
      </div>

      {/* Settings Links */}
      <div className="space-y-6">
        {/* Parental Settings */}
        <Link
          to="/settings/parental"
          className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:bg-pink-100"
        >
          <FaUsers className="text-2xl text-pink-600 mr-4" />
          <span className="text-lg text-pink-600">Parental Settings</span>
        </Link>

        
        <Link
          to="/settings/child-access"
          className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:bg-pink-100"
        >
          <FaLock className="text-2xl text-pink-600 mr-4" />
          <span className="text-lg text-pink-600">Child Access Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
