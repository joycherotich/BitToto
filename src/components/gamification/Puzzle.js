import React, { useState, useEffect } from 'react';

const PuzzleGame = () => {
  const [puzzle, setPuzzle] = useState(generatePuzzle());
  const [emptySlot, setEmptySlot] = useState(15);

  // Function to generate a shuffled puzzle
  function generatePuzzle() {
    const puzzleArray = Array.from({ length: 16 }, (_, index) => index);
    return shuffleArray(puzzleArray);
  }

  // Function to shuffle puzzle pieces
  function shuffleArray(arr) {
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Function to handle piece click (move it to the empty space)
  const handlePieceClick = (index) => {
    if (canMove(index)) {
      const newPuzzle = [...puzzle];
      newPuzzle[emptySlot] = newPuzzle[index];
      newPuzzle[index] = 0;
      setPuzzle(newPuzzle);
      setEmptySlot(index);
    }
  };

  // Function to check if the piece can be moved
  function canMove(index) {
    const validMoves = [
      emptySlot - 1,
      emptySlot + 1,
      emptySlot - 4,
      emptySlot + 4,
    ];
    return validMoves.includes(index);
  }

  // Function to check if the puzzle is solved
  function isSolved() {
    return puzzle.every((value, index) => value === index);
  }

  useEffect(() => {
    if (isSolved()) {
      alert("Congratulations! You solved the puzzle!");
    }
  }, [puzzle]);

  return (
    <div className="puzzle-container">
      <h2 className="text-3xl font-bold text-white mb-4">Puzzle Game</h2>
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
        {puzzle.map((value, index) => (
          <div
            key={index}
            className={`puzzle-piece ${value === 0 ? 'empty' : ''}`}
            onClick={() => handlePieceClick(index)}
            style={{
              backgroundColor: value === 0 ? 'transparent' : '#4c6ef5',
              color: value === 0 ? 'transparent' : 'white',
              border: value === 0 ? 'none' : '2px solid #fff',
            }}
          >
            {value !== 0 ? value : ''}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => setPuzzle(generatePuzzle())}
          className="px-6 py-2 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all text-white"
        >
          Reset Puzzle
        </button>
      </div>
    </div>
  );
};

export default PuzzleGame;
