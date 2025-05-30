'use client';
import React, { useState } from 'react';

const nodeTopics = [
  {
    name: 'Event Loop & Asynchronous Programming',
    notes: 'Understand how Node.js handles non-blocking I/O, callbacks, promises, and async/await for efficient concurrency.',
  },
  {
    name: 'Express.js & RESTful APIs',
    notes: 'Learn to build web servers and APIs using Express, including routing, middleware, and request/response handling.',
  },
  {
    name: 'Working with Databases',
    notes: 'Know how to connect to and interact with databases like MongoDB, PostgreSQL, or MySQL using ORMs or native drivers.',
  },
  {
    name: 'Error Handling & Debugging',
    notes: 'Master error handling with try/catch, error middleware, and debugging tools for robust Node.js applications.',
  },
  {
    name: 'Authentication & Security',
    notes: 'Implement authentication (JWT, OAuth), secure APIs, manage environment variables, and protect against vulnerabilities.',
  },
];

const NodeFundamentals = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Node Fundamentals</h1>
      <p className="text-lg mb-8">
        This section covers the core concepts of Node.js
      </p>
      <ul className="w-full max-w-xl space-y-4">
        {nodeTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle(idx)}
            >
              {topic.name}
              <span>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 pt-0 text-gray-700">
                {topic.notes}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NodeFundamentals;