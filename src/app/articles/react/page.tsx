'use client';
import React, { useState } from 'react';

const beginnerTopics = [
  {
    name: 'JSX & Rendering',
    notes: 'Understand how JSX works, how React renders elements, and the difference between elements and components.',
  },
  {
    name: 'Props & State',
    notes: 'Know how to pass data via props, manage local state, and lift state up for shared data.',
  },
];

const intermediateTopics = [
  {
    name: 'Component Lifecycle & Hooks',
    notes: 'Learn about functional/class components, lifecycle methods, and React hooks like useState, useEffect, and custom hooks.',
  },
  {
    name: 'Context & State Management',
    notes: 'Use React Context for global state, and explore state management libraries like Redux or Zustand.',
  },
];

const advancedTopics = [
  {
    name: 'Performance Optimization',
    notes: 'Optimize rendering with memoization, React.memo, useMemo, useCallback, and understand reconciliation.',
  },
];

const ReactFundamentals = () => {
  const [openIndex, setOpenIndex] = useState<{ section: string; idx: number } | null>(null);

  const toggle = (section: string, idx: number) => {
    if (openIndex && openIndex.section === section && openIndex.idx === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex({ section, idx });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center w-full">React Fundamentals</h1>

      {/* Beginner */}
      <h2 className="text-2xl font-semibold mb-4 text-center w-full">Beginner</h2>
      <ul className="w-full max-w-xl space-y-4 mb-8">
        {beginnerTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle('beginner', idx)}
            >
              {topic.name}
              <span>{openIndex?.section === 'beginner' && openIndex.idx === idx ? '-' : '+'}</span>
            </button>
            {openIndex?.section === 'beginner' && openIndex.idx === idx && (
              <div className="p-4 pt-0 text-gray-700">
                {topic.notes}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Intermediate */}
      <h2 className="text-2xl font-semibold mb-4 text-center w-full">Intermediate</h2>
      <ul className="w-full max-w-xl space-y-4 mb-8">
        {intermediateTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle('intermediate', idx)}
            >
              {topic.name}
              <span>{openIndex?.section === 'intermediate' && openIndex.idx === idx ? '-' : '+'}</span>
            </button>
            {openIndex?.section === 'intermediate' && openIndex.idx === idx && (
              <div className="p-4 pt-0 text-gray-700">
                {topic.notes}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Advanced */}
      <h2 className="text-2xl font-semibold mb-4 text-center w-full">Advanced</h2>
      <ul className="w-full max-w-xl space-y-4">
        {advancedTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle('advanced', idx)}
            >
              {topic.name}
              <span>{openIndex?.section === 'advanced' && openIndex.idx === idx ? '-' : '+'}</span>
            </button>
            {openIndex?.section === 'advanced' && openIndex.idx === idx && (
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

export default ReactFundamentals;