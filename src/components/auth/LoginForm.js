import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import piggyImage from '../../assets/cryp.jpeg'; // Your piggy image
import bitcoinLogo from '../../assets/bitcoin.jpeg';

const LoginForm = () => {
  const [loginType, setLoginType] = useState('parent'); // 'parent' or 'kid'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [satjarId, setSatjarId] = useState('');
  const navigate = useNavigate();

  // Dummy credentials
  const dummyParentCredentials = { phoneNumber: '0712345678', password: 'parentpassword' };
  const dummyKidSatjarId = 'kid1234';

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginType === 'parent') {
      // Check if the parent entered the dummy phone number and password
      if (phoneNumber === dummyParentCredentials.phoneNumber && password === dummyParentCredentials.password) {
        // Simulate successful parent login
        navigate('/dashboardpage'); // Redirect to Dashboard after login
      } else {
        alert('Invalid parent credentials. Please try again.');
      }
    } else {
      // Check if the kid entered the correct Satjar ID
      if (satjarId === dummyKidSatjarId) {
        // Simulate successful kid login
        navigate('/kiddashboard'); // Redirect to Kid's Dashboard after login
      } else {
        alert('Invalid Satjar ID. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center px-4 py-8">
      <div className="flex bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl">
        
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center">
          <h1 className="text-4xl font-bold font-serif text-pink-500 mb-2 font-comic">🐷 BitPiggy Toto</h1>
          <p className="text-md font-serif text-gray-600 mb-6">Welcome back, little saver!</p>

          {/* Toggle Login Type */}
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setLoginType('parent')}
              className={`px-4 py-2 rounded-full font-semibold font-serif text-sm ${
                loginType === 'parent' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Parent Login
            </button>
            <button
              onClick={() => setLoginType('kid')}
              className={`px-4 py-2 rounded-full font-serif font-semibold text-sm ${
                loginType === 'kid' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Kid Login
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {loginType === 'parent' ? (
              <>
                <input
                  type="text"
                  placeholder="Parent Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </>
            ) : (
              <input
                type="text"
                placeholder="Enter Satjar ID"
                value={satjarId}
                onChange={(e) => setSatjarId(e.target.value)}
                className="w-full font-serif px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            )}

            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition-all"
            >
              🚀 Login
            </button>
          </form>

          {loginType === 'parent' && (
            <p className="mt-4 text-sm font-serif text-gray-600">
              Don’t have an account? <Link to="/register" className="text-blue-500 font-semibold">Register</Link>
            </p>
          )}
        </div>

        {/* Illustration Side */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-pink-100 to-yellow-100 items-center justify-center p-6">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={piggyImage} 
              alt="Piggy Kid" 
              className="w-full max-h-[500px] object-contain rounded-3xl shadow-xl animate-bounceSlow"
            />
            <p className="text-pink-600 font-bold text-lg font-serif text-center px-2">Saving Sats, One Toy at a Time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
