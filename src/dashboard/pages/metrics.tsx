import React from "react";

export default function Metrics() {
  return (
    <div className="metrics-container p-6">
      <h1 className="text-2xl font-bold mb-6">Your Habit Metrics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Habits Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 text-lg">Total Habits</h2>
            <div className="p-2 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold">8</p>
            <p className="text-gray-500 text-sm mt-2">Active habits you're tracking</p>
          </div>
        </div>

        {/* Habits Completed Today Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 text-lg">Completed Today</h2>
            <div className="p-2 bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold">5 / 8</p>
            <p className="text-gray-500 text-sm mt-2">62% of habits completed</p>
          </div>
        </div>

        {/* Current Streaks Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 text-lg">Current Streaks</h2>
            <div className="p-2 bg-orange-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-4xl font-bold">12 days</p>
            <p className="text-gray-500 text-sm mt-2">Your longest current streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
