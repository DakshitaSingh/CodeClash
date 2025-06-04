import React from 'react';
import { Leaf, ShoppingCart, Trash2, BadgeCheck } from 'lucide-react';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserDashboard = () => {
  const carbonReduced = 42;
  const itemsBought = 87;
  const plasticPrevented = 35.7;
  const rewardProgress = 72;
  const tips = "Buy 2 more green items to earn Green Hero badge!";

  const badges = [
    { level: 'Bronze', achieved: true },
    { level: 'Silver', achieved: true },
    { level: 'Gold', achieved: false },
    { level: 'Green Hero', achieved: false },
  ];

  const chartData = {
    labels: ['Carbon Reduced (%)', 'Plastic Prevented (kg)', 'Items Bought'],
    datasets: [
      {
        data: [carbonReduced, plasticPrevented, itemsBought],
        backgroundColor: ['#4ade80', '#22d3ee', '#a78bfa'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
   
      <div className="p-16 bg-gradient-to-tr from-green-50 via-white to-green-100 min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-800">Welcome Back, Eco Warrior!</h2>

            {/* Stat Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-green-100 p-2 rounded-full">
                  <Leaf className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Carbon Reduced</p>
                  <p className="text-xl font-semibold text-green-800">{carbonReduced}%</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-green-100 p-2 rounded-full">
                  <ShoppingCart className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Eco Items Bought</p>
                  <p className="text-xl font-semibold text-green-800">{itemsBought}</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Trash2 className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Plastic Waste Prevented</p>
                  <p className="text-xl font-semibold text-blue-800">{plasticPrevented} kg</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
                <p className="text-sm text-gray-500 mb-2">Progress to Next Badge</p>
                <div className="relative w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full transition-all"
                    style={{ width: `${rewardProgress}%` }}
                  ></div>
                  <span className="absolute inset-0 text-xs text-center text-white font-semibold leading-4">
                    {rewardProgress}%
                  </span>
                </div>
                <p className="mt-3 text-sm text-green-700 font-medium">{tips}</p>
              </div>
            </div>

            {/* Encouragement Box */}
            <div className="bg-green-100 p-6 rounded-lg text-center shadow-md">
              <h3 className="text-lg font-bold text-green-800">Keep Going, David!</h3>
              <p className="text-sm text-green-700 mt-2">
                Every small step counts. Your sustainable choices are making a real impact!
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Badge Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Your Badges</h3>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge.level}
                    className={`flex items-center gap-3 p-3 rounded-md border ${
                      badge.achieved
                        ? 'bg-green-200 border-green-500 shadow-green-300 shadow-sm'
                        : 'bg-gray-100 border-gray-300'
                    }`}
                  >
                    <BadgeCheck
                      className={`w-5 h-5 ${
                        badge.achieved ? 'text-green-700' : 'text-gray-400'
                      }`}
                    />
                    <span
                      className={`font-medium text-sm ${
                        badge.achieved ? 'text-green-800' : 'text-gray-500'
                      }`}
                    >
                      {badge.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Your Eco Contributions</h3>
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;