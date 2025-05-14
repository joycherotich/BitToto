import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaQuestionCircle, FaPlayCircle } from 'react-icons/fa';

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-pink-200 p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FaBook className="text-4xl text-pink-600" />
        <h1 className="text-3xl font-bold ml-4 text-pink-700">Learn About Bitcoin</h1>
      </div>

      {/* Learn Sections */}
      <div className="space-y-6">
        {/* Learn Basics of Bitcoin */}
        <Link
          to="/learn/bitcoin-basics"
          className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:bg-pink-100"
        >
          <FaQuestionCircle className="text-2xl text-pink-600 mr-4" />
          <span className="text-lg text-pink-600">Bitcoin Basics</span>
        </Link>

        {/* Watch Videos */}
        <Link
          to="/learn/videos"
          className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:bg-pink-100"
        >
          <FaPlayCircle className="text-2xl text-pink-600 mr-4" />
          <span className="text-lg text-pink-600">Bitcoin Video Tutorials</span>
        </Link>

        {/* Frequently Asked Questions */}
        <Link
          to="/learn/faq"
          className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:bg-pink-100"
        >
          <FaQuestionCircle className="text-2xl text-pink-600 mr-4" />
          <span className="text-lg text-pink-600">Frequently Asked Questions</span>
        </Link>
      </div>
    </div>
  );
};

export default Learn;
