import React, { useState } from 'react';
import SavingsProgressCard from '../goals/SavingProgressCard';
import { FaPiggyBank } from 'react-icons/fa';
import SideBar from '../layout/SideBar';
import TopBar from './TopBar';

const Saving = () => {
  const [savingsGoals, setSavingsGoals] = useState([
    {
      id: 1,
      goal: "College Fund",
      targetAmount: 5000,
      savedAmount: 2000,
    },
    {
      id: 2,
      goal: "Vacation Fund",
      targetAmount: 3000,
      savedAmount: 1500,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    goal: '',
    targetAmount: '',
    savedAmount: ''
  });

  const handleInputChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
  };

  const handleCreateGoal = (e) => {
    e.preventDefault();

    const newId = savingsGoals.length + 1;
    const goalToAdd = {
      id: newId,
      goal: newGoal.goal,
      targetAmount: parseFloat(newGoal.targetAmount),
      savedAmount: parseFloat(newGoal.savedAmount)
    };

    setSavingsGoals([...savingsGoals, goalToAdd]);
    setNewGoal({ goal: '', targetAmount: '', savedAmount: '' });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-300 flex lg:flex-row">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content with TopBar */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar only for content area */}
        <TopBar />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FaPiggyBank className="text-4xl text-pink-600" />
            <h1 className="text-3xl font-serif font-bold ml-4 text-pink-700">Your Savings Goals</h1>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 font-serif text-lg bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
          >
            Create New Goal
          </button>
        </div>

        <div className="grid grid-cols-1 font-serif text-lg sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savingsGoals.map((goal) => (
            <SavingsProgressCard
              key={goal.id}
              goalName={goal.goal}
              targetAmount={goal.targetAmount}
              savedAmount={goal.savedAmount}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-serif font-bold text-pink-700 mb-4">Create New Savings Goal</h2>
            <form onSubmit={handleCreateGoal}>
              <input
                type="text"
                name="goal"
                placeholder="Goal Name"
                value={newGoal.goal}
                onChange={handleInputChange}
                className="w-full font-serif mb-3 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                name="targetAmount"
                placeholder="Target Amount"
                value={newGoal.targetAmount}
                onChange={handleInputChange}
                className="w-full font-serif mb-3 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                name="savedAmount"
                placeholder="Amount Saved"
                value={newGoal.savedAmount}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 font-serif border border-gray-300 rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-2 px-4 py-2 font-serif bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-serif bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                  Save Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Saving;
