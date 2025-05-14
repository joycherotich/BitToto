import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaPiggyBank, FaGift, FaBars, FaTimes, FaCog, FaChild } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically


  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  const linkClass = (path) =>
    `flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
      location.pathname === path
        ? 'bg-white shadow-md text-pink-600 font-semibold'
        : 'text-pink-700 hover:bg-white hover:text-pink-500'
    } ${!isOpen ? 'justify-center' : ''}`;

    const handleLogoClick = () => {
      navigate('/'); // Redirects to the home page
    };

  return (
    <div
      className={`min-h-screen ${
        isOpen ? 'w-64' : 'w-20'
      } bg-gradient-to-b from-pink-100 to-yellow-50 shadow-2xl p-4 flex flex-col justify-between transition-all duration-300 rounded-tr-3xl rounded-br-3xl border-r border-pink-200`}
    >
      <div>
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between mb-8">
        <div
            className="text-2xl font-serif font-bold text-pink-500 whitespace-nowrap cursor-pointer"
            onClick={handleLogoClick} // Logo click to navigate
          >
            {isOpen ? '🐷 BitToto' : '🐷'}
          </div>
        <button
          className="p-2 bg-white text-pink-600 rounded-full shadow-md lg:hidden focus:outline-none hover:bg-pink-100"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

        {/* Nav Links */}
        <nav className={`flex flex-col text-xl font-serif gap-4 ${!isOpen ? 'items-center' : ''}`}>
          <Link to="/dashboardpage" className={linkClass('/dashboardpage')} title={!isOpen ? "Dashboard" : ""}>
            <FaHome className={`text-xl ${!isOpen ? '' : 'mr-3'}`} />
            {isOpen && 'Dashboard'}
          </Link>

          <Link to="/Saving" className={linkClass('/Saving')} title={!isOpen ? "Saving" : ""}>
            <FaPiggyBank className={`text-xl ${!isOpen ? '' : 'mr-3'}`} />
            {isOpen && 'Saving'}
          </Link>

          <Link to="/Wallet" className={linkClass('/Wallet')} title={!isOpen ? "Wallet" : ""}>
            <FaGift className={`text-xl  font-serif ${!isOpen ? '' : 'mr-3'}`} />
            {isOpen && 'Wallet'}
          </Link>
          <Link to="/CreateChild" className={linkClass('/CreateChild')} title={!isOpen ? "Child Account" : ""}>
            <FaChild className={`text-xl  font-serif ${!isOpen ? '' : 'mr-3'}`} />
            {isOpen && 'Child Account'}
          </Link>

          {/* Settings Dropdown */}
          <div className="relative w-full font-serif text-xl">
            <button
              onClick={toggleSettings}
              className={`${linkClass('/settings')} w-full focus:outline-none`}
              title={!isOpen ? "Settings" : ""}
            >
              <FaCog className={`text-xl ${!isOpen ? '' : 'mr-3'}`} />
              {isOpen && 'Settings'}
            </button>
            {settingsOpen && isOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
                <Link
                  to="/settings/parentsettings"
                  className="block px-4 py-2 text-sm text-pink-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  👨‍👩‍👧 Parental Settings
                </Link>
                <Link
                  to="/settings/childaccesssettings"
                  className="block px-4 py-2 text-sm text-pink-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  🧒 Child Settings
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Logout */}
      <div
        className={`flex items-center px-4 py-2 mt-6 text-lg rounded-lg text-pink-600 hover:bg-white hover:text-pink-400 transition-all cursor-pointer animate-bounceSlow ${
          !isOpen ? 'justify-center' : ''
        }`}
        title={!isOpen ? "Logout" : ""}
      >
        <IoIosLogOut className={`text-xl ${!isOpen ? '' : 'mr-3'}`} />
        {isOpen && 'Logout'}
      </div>
    </div>
  );
};

export default SideBar;
