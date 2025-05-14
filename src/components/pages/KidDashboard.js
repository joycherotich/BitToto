import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import piggyImage from '../../assets/cryp.jpeg'; // Your piggy image
import learnIcon from '../../assets/learn.jpeg'; // Add a learn icon
import puzzleIcon from '../../assets/puzzle.jpeg'; // Add a puzzle icon

const KidsDashboard = () => {
  const [balance, setBalance] = useState(100); // Just a dummy balance for the kid
  const [activity, setActivity] = useState([
    { id: 1, description: 'Saved 10 sats for the first time!' },
    { id: 2, description: 'Redeemed reward for saving!' },
    { id: 3, description: 'Got 5 sats for completing a challenge!' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-pink-300 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-pink-600 font-serif text-white p-6 flex flex-col justify-between rounded shadow-2xl">
        <div className="text-center">
          {/* Make the title clickable */}
          <Link to="/" className="text-3xl font-bold font-serif text-white mb-4">
            BitPiggy Toto
          </Link>

          <img
            src={piggyImage}
            alt="Piggy"
            className="w-28 h-28 mx-auto my-4 font-serif rounded-full border-4 border-white shadow-lg"
          />
          <p className="text-xl font-serif font-semibold">Your Balance</p>
          <p className="text-2xl font-serif  font-bold">{balance} Sats</p>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to="/rewards"
            className="block py-3 text-lg text-center bg-yellow-400  font-serif rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all"
          >
            🎁 Rewards
          </Link>
          <Link
            to="/activities"
            className="block py-3 text-lg text-center bg-purple-400 font-serif rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all"
          >
            📅 Activities
          </Link>
          <Link
            to="/learn"
            className="block py-3 text-lg text-center font-serif bg-green-400 rounded-lg shadow-lg hover:bg-green-500 transform hover:scale-105 transition-all"
          >
            🧠 Learn
          </Link>
          <Link
            to="/PuzzleGame"
            className="block py-3 text-lg font-serif text-center bg-blue-400 rounded-lg shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all"
          >
            🎮 Game Puzzle
          </Link>
          <Link
            to="/"
            className="block py-3 text-lg text-center font-serif bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all"
          >
            🚪 Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h1 className="text-4xl font-semibold font-serif text-pink-600 mb-6">Welcome kiddo!</h1>

        {/* Recent Activities */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-3xl font-bold font-serif  text-purple-600 mb-4 col-span-full">Recent Activities</h2>
          {activity.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-all"
            >
              <p className="text-gray-600 font-serif text-lg">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Learn Section */}
        <section className="mt-8 bg-gradient-to-br from-green-300 to-green-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">Learn and Earn</h2>
          <div className="flex items-center mb-4">
            <img src={learnIcon} alt="Learn" className="w-12 h-12 mr-4" />
            <p className="text-lg font-serif text-white">Learn how to save and manage your sats with fun lessons and challenges! Earn rewards for completing them.</p>
          </div>
          <Link
            to="/kids-dashboard/learn"
            className="py-3 px-6 font-serif bg-green-500 font-serif text-white rounded-lg shadow-md hover:bg-green-600 transition-all text-lg transform hover:scale-105"
          >
            Start Learning
          </Link>
        </section>

        {/* Puzzle Game Section */}
        <section className="mt-8 bg-gradient-to-br from-blue-300 to-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Puzzle Game</h2>
          <div className="flex items-center mb-4">
            <img src={puzzleIcon} alt="Puzzle" className="w-12 h-12 mr-4" />
            <p className="text-lg font-serif text-white">Put your thinking cap on! Solve puzzles to win more sats and fun rewards. Challenge yourself!</p>
          </div>
          <Link
            to="/PuzzleGame"
            className="py-3 px-6 font-serif bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all text-lg transform hover:scale-105"
          >
            Play Puzzle Game
          </Link>
        </section>
      </div>
    </div>
  );
};

export default KidsDashboard;
