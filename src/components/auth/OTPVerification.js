import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = e => {
    e.preventDefault();
    // TODO: Add OTP verification logic
    console.log('Verifying OTP:', otp);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
      <form onSubmit={handleVerify} className="space-y-4">
        <input
          type="text"
          placeholder="One-Time Password"
          className="w-full p-2 border rounded"
          value={otp}
          onChange={e => setOtp(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
