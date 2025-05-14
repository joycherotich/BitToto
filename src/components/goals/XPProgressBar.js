import React from 'react';

const XPProgressBar = ({ currentXP, nextLevelXP }) => {
  const progressPercentage = Math.min((currentXP / nextLevelXP) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-sm font-medium text-pink-600">
        <span>XP: {currentXP}</span>
        <span>Level Goal: {nextLevelXP}</span>
      </div>
      <div className="w-full bg-pink-100 rounded-full h-5">
        <div
          className="bg-pink-500 h-5 rounded-full text-white text-xs flex items-center justify-center transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default XPProgressBar;
