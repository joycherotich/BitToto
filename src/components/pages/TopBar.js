import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-yellow shadow-md px-6 py-3 sticky top-0 z-40">
      {/* Logo or Page Title */}
      <h2 className="text-2xl font-semibold font-serif text-pink-600">Savings Time !!</h2>

      {/* Right Icons */}
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <div className="relative">
          <FaBell className="text-xl text-gray-600 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User Avatar */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="text-gray-700  font-serif font-medium">Letim Joy</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
