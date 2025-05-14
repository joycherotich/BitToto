import React from 'react';
import { Link } from 'react-router-dom';
import piggyImage from '../../assets/cryp.jpeg'; // Replace with your actual image path
import bitcoinLogo from '../../assets/bitcoin.jpeg'; // Replace with your actual image path

const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="flex bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl">
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center">
          <h1 className="text-4xl font-bold text-purple-500 mb-2 font-comic">🎉 BitPiggy Toto</h1>
          <p className="text-md font-serif text-gray-600 mb-6">Let’s get you saving, little one!</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Parent Full Name"
              className="w-full px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-purple-400 font-serif"
            />
            <input
              type="email"
              placeholder="Parent Email"
              className="w-full px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-purple-400 font-serif"
            />
            <input
              type="password"
              placeholder="Create Password"
              className="w-full px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-purple-400 font-serif"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-purple-400 font-serif"
            />
            <button className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-all">
              🐷 Create Account
            </button>
          </form>

          <p className="mt-4 text-sm font-serif text-gray-600">
            Already have an account? <Link to="/" className="text-blue-500 font-serif font-semibold">Login</Link>
          </p>
        </div>

        {/* Illustration Side */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-100 to-yellow-100 items-center justify-center p-6">
          <div className="flex flex-col items-center space-y-4">
          <img 
            src={piggyImage} 
            alt="Piggy Kid" 
            className="w-full max-h-[500px] object-contain rounded-3xl shadow-xl animate-bounceSlow"
            />
            {/* <img 
              src={bitcoinLogo} 
              alt="Bitcoin Toy" 
              className="w-1/2 h-auto object-contain rounded-3xl shadow-xl"
            /> */}
            <p className="text-purple-600 font-bold text-lg font-serif text-center px-2">Saving Sats, One Toy at a Time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
