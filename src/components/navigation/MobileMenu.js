import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="lg:hidden">
      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="text-3xl text-pink-600">
        <FaBars />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
            {/* Close Button */}
            <button onClick={toggleMenu} className="text-3xl text-pink-600 absolute top-4 right-4">
              <FaTimes />
            </button>

            <ul className="space-y-4 mt-8">
              <li>
                <Link to="/" className="text-xl text-pink-600 hover:text-pink-800">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-xl text-pink-600 hover:text-pink-800">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/wallet" className="text-xl text-pink-600 hover:text-pink-800">
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-xl text-pink-600 hover:text-pink-800">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
