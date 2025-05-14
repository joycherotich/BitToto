import React from 'react';

const SavingsProgressCard = ({ goalName, targetAmount, savedAmount }) => {
  // Calculate the progress percentage
  const progressPercent = Math.round((savedAmount / targetAmount) * 100);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-pink-600 mb-2">{goalName}</h3>
      <p className="text-sm text-gray-500 mb-4">
        ${savedAmount} of ${targetAmount} saved
      </p>
      
      {/* Progress bar */}
      <div className="w-full bg-pink-100 rounded-full h-4 mb-2">
        <div
          className="bg-pink-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <p className="text-sm text-pink-500 font-medium">{progressPercent}% completed</p>
    </div>
  );
};

export default SavingsProgressCard;
