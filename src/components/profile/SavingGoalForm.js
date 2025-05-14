import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import SideBar from '../layout/SideBar';

const SavingGoalForm = () => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');
  const navigate = useNavigate(); // Create an instance of navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can replace this with actual logic to save the data
    const newGoal = {
      goal: goalName,
      targetAmount: parseFloat(targetAmount),
      savedAmount: parseFloat(savedAmount),
    };

    // For now, we'll log it to the console
    console.log("New goal created:", newGoal);

    // Redirect to the savings list page after creating the goal
    navigate('/saving'); // Use navigate() to redirect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-300 flex flex-col lg:flex-row">
    {/* Sidebar */}
    <SideBar />
      <div className="w-full sm:w-96 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">Create New Savings Goal</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="goalName" className="block text-lg font-medium text-pink-600">Goal Name</label>
            <input
              type="text"
              id="goalName"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your goal name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="targetAmount" className="block text-lg font-medium text-pink-600">Target Amount</label>
            <input
              type="number"
              id="targetAmount"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter target amount"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="savedAmount" className="block text-lg font-medium text-pink-600">Amount Saved</label>
            <input
              type="number"
              id="savedAmount"
              value={savedAmount}
              onChange={(e) => setSavedAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter amount saved"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
            >
              Create Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SavingGoalForm;
