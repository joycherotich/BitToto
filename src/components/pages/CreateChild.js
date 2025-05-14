import React, { useState } from 'react';
import SideBar from '../layout/SideBar';
import TopBar from './TopBar';

// Generate a random satjarid
const generateSatjarid = () => Math.floor(Math.random() * 10000);

const CreateChild = () => {
  const [parents, setParents] = useState([
    {
      id: 1,
      name: 'Hidden Parent',
      children: [
        {
          id: 101,
          name: 'Letim Kay ',
          satjarid: generateSatjarid(),
        },
      ],
    },
  ]);

  const [newChildName, setNewChildName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addChild = (parentId) => {
    if (!newChildName) {
      alert("Please enter a name for the child.");
      return;
    }

    const newChild = {
      id: Math.floor(Math.random() * 10000),
      name: newChildName,
      satjarid: generateSatjarid(),
    };

    setParents((prevParents) =>
      prevParents.map((parent) =>
        parent.id === parentId
          ? { ...parent, children: [...parent.children, newChild] }
          : parent
      )
    );

    setNewChildName('');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-300 flex lg:flex-row">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center font-serif">Kids Account</h1>
          {parents.map((parent) => (
            <div key={parent.id} className="bg-white p-4 rounded-lg shadow-xl mb-6 font-serif">
              <p className="text-lg text-gray-700 mb-4">Create an account for your children and their satjarids here, they'll use it to login.</p>
              <h3 className="text-xl font-semibold text-purple-600">Children</h3>
              {parent.children.length === 0 ? (
                <p className="text-gray-600">No children added yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {parent.children.map((child) => (
                    <div
                      key={child.id}
                      className="bg-yellow-100 p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-blue-600">{child.name}</h4>
                      <p className="text-sm text-gray-600">Satjarid: {child.satjarid}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="py-2 px-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all"
                >
                  Add New Child
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-300 scale-100">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">Add New Child</h2>
            <input
              type="text"
              value={newChildName}
              onChange={(e) => setNewChildName(e.target.value)}
              placeholder="Enter child's name"
              className="w-full p-3 mb-4 rounded-lg shadow-md border border-gray-300 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => addChild(parents[0].id)}
                className="py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
              >
                Add Child
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateChild;
