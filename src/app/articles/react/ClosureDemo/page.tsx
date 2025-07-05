"use client";

import { useEffect, useState } from "react";

// 2. CLOSURES AND LEXICAL SCOPE DEMO
const ClosuresDemo: React.FC = () => {

  // Closure example - each counter maintains its own scope
  const createCounter = () => {
    let count = 0;
    return {
      increment: () => ++count,
      decrement: () => --count,
      getValue: () => count
    };
  };

  const [counter1] = useState(() => createCounter());
  const [counter2] = useState(() => createCounter());
  const [values, setValues] = useState({ counter1: 0, counter2: 0 });


  useEffect(() => {
    setValues({
      counter1: counter1.getValue(),
      counter2: counter2.getValue()
    });
  }, [counter1, counter2]);

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Closures & Lexical Scope</h3>
      <p className="text-sm text-gray-600 mb-4">Each counter maintains its own private scope</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-purple-100 rounded">
          <h4 className="font-medium">Counter 1: {values.counter1}</h4>
          <div className="space-x-2 mt-2">
            <button
              onClick={() => { counter1.increment(); updateCounters(); }}
              className="px-2 py-1 bg-purple-500 text-white rounded text-sm"
            >
              +
            </button>
            <button
              onClick={() => { counter1.decrement(); updateCounters(); }}
              className="px-2 py-1 bg-purple-500 text-white rounded text-sm"
            >
              -
            </button>
          </div>
        </div>
        
        <div className="p-3 bg-purple-100 rounded">
          <h4 className="font-medium">Counter 2: {values.counter2}</h4>
          <div className="space-x-2 mt-2">
            <button
              onClick={() => { counter2.increment(); updateCounters(); }}
              className="px-2 py-1 bg-purple-500 text-white rounded text-sm"
            >
              +
            </button>
            <button
              onClick={() => { counter2.decrement(); updateCounters(); }}
              className="px-2 py-1 bg-purple-500 text-white rounded text-sm"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosuresDemo;