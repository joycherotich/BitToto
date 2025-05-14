import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code'; // Import QRCode component for generating the QR code
import axios from 'axios'; // Import axios for making API requests

const DepositBitcoin = () => {
  const [loading, setLoading] = useState(false); // To handle loading state
  const [message, setMessage] = useState(''); // To show messages to the user
  const [phone, setPhone] = useState(''); // To store parent's phone number
  const [amount, setAmount] = useState(''); // To store the amount in KES
  const [selectedChild, setSelectedChild] = useState('lnbc1kidwallet1'); // Default selected child wallet
  const [invoice, setInvoice] = useState(''); // To store the generated Lightning invoice
  const [childWallets, setChildWallets] = useState([]); // To store child wallets dynamically fetched from the API

  // Fetch child wallets dynamically when the component mounts
  useEffect(() => {
    // Mock fetching child wallets, simulate a delay
    setTimeout(() => {
      setChildWallets([
        { address: 'lnbc1kidwallet1', name: 'Child Wallet 1' },
        { address: 'lnbc1kidwallet2', name: 'Child Wallet 2' },
        { address: 'lnbc1kidwallet3', name: 'Child Wallet 3' },
      ]);
    }, 1000);
  }, []);

  // Handle M-Pesa to Bitcoin deposit
  const handleMpesaToBitcoin = async () => {
    setLoading(true); // Start loading when processing
    setMessage(''); // Clear previous messages
    try {
      // Validate the amount to ensure it's a positive value
      if (amount <= 0) {
        setMessage('Please enter a valid amount.'); // Error message for invalid amount
        setLoading(false); // Stop loading
        return;
      }

      // Simulate an API call with mock response
      setTimeout(() => {
        // Simulated API response after the request
        const response = {
          data: {
            message: 'Deposit initiated successfully!',
            invoice: 'lnbc1kidwallet1invoice12345',
          },
        };

        // Set the response message (success or failure)
        setMessage(response.data.message || 'Deposit initiated successfully!');

        // If the response includes the Lightning invoice, set it to state
        if (response.data.invoice) {
          setInvoice(response.data.invoice); // Store the Lightning invoice for generating the QR code
        } else {
          setMessage('Error: No invoice received from the server.'); // Error message if no invoice is received
        }

        setLoading(false); // Stop loading once the request is completed
      }, 2000); // Simulate network delay

    } catch (error) {
      setMessage('Error: ' + (error?.response?.data?.message || 'Unknown error')); // Handle any API request errors
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-5">
      <h2 className="text-xl font-semibold text-gray-800">Deposit Bitcoin via M-Pesa</h2>

      {/* Phone number input */}
      <div className="space-y-2 w-full">
        <label className="block text-sm font-medium text-gray-700">Parent Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone state
          placeholder="e.g., 254712345678"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Amount input */}
      <div className="space-y-2 w-full">
        <label className="block text-sm font-medium text-gray-700">Amount (KES)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Update amount state
          placeholder="e.g., 100"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Select child's wallet */}
      <div className="space-y-2 w-full">
        <label className="block text-sm font-medium text-gray-700">Select Child's Wallet</label>
        <select
          value={selectedChild}
          onChange={(e) => setSelectedChild(e.target.value)} // Update selected child's wallet state
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          {childWallets.length > 0 ? (
            childWallets.map((child) => (
              <option key={child.address} value={child.address}>
                {child.name} {/* Display child wallet's name */}
              </option>
            ))
          ) : (
            <option value="" disabled>Loading wallets...</option> // Show loading option if wallets are still being fetched
          )}
        </select>
      </div>

      {/* Deposit button */}
      <button
        onClick={handleMpesaToBitcoin}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
        disabled={loading || !phone || !amount} // Disable button if loading or input is invalid
      >
        {loading ? 'Processing...' : 'M-Pesa to Bitcoin'} {/* Show loading text while processing */}
      </button>

      {/* QR Code for the generated Lightning invoice */}
      {invoice && (
        <div className="mt-4 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-600">Scan this Lightning Invoice:</p>
          <QRCode value={invoice} size={200} /> {/* Generate and display the QR code */}
          <p className="text-xs text-gray-500 break-words text-center">Address: {invoice}</p>
        </div>
      )}

      {/* Message display */}
      {message && (
        <div className="mt-4 text-center text-sm font-medium text-pink-600">
          {message} {/* Show message to the user (success or error) */}
        </div>
      )}
    </div>
  );
};

export default DepositBitcoin;
