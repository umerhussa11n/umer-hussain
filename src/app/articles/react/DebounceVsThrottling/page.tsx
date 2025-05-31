"use client";
import { useRef, useState } from "react";

// 6. DEBOUNCING VS THROTTLING DEMO
const DebounceThrottleDemo: React.FC = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();
  const throttleLastRun = useRef<number>(0);

  const handleNormalClick = () => {
    setNormalCount(prev => prev + 1);
  };

  const handleDebounceClick = () => {
    // Clear previous timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    // Set new timeout
    debounceTimeoutRef.current = setTimeout(() => {
      setDebounceCount(prev => prev + 1);
    }, 500);
  };

  const handleThrottleClick = () => {
    const now = Date.now();
    if (now - throttleLastRun.current >= 500) {
      setThrottleCount(prev => prev + 1);
      throttleLastRun.current = now;
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Debouncing vs Throttling</h3>
      <p className="text-sm text-gray-600 mb-4">Click rapidly to see the difference</p>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-gray-100 rounded text-center">
          <h4 className="font-medium">Normal</h4>
          <p className="text-2xl font-bold">{normalCount}</p>
          <button
            onClick={handleNormalClick}
            className="mt-2 px-3 py-1 bg-gray-500 text-white rounded text-sm"
          >
            Click Me
          </button>
          <p className="text-xs text-gray-600 mt-1">Every click counts</p>
        </div>
        
        <div className="p-3 bg-yellow-100 rounded text-center">
          <h4 className="font-medium">Debounced</h4>
          <p className="text-2xl font-bold">{debounceCount}</p>
          <button
            onClick={handleDebounceClick}
            className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded text-sm"
          >
            Click Me
          </button>
          <p className="text-xs text-gray-600 mt-1">500ms delay after last click</p>
        </div>
        
        <div className="p-3 bg-orange-100 rounded text-center">
          <h4 className="font-medium">Throttled</h4>
          <p className="text-2xl font-bold">{throttleCount}</p>
          <button
            onClick={handleThrottleClick}
            className="mt-2 px-3 py-1 bg-orange-500 text-white rounded text-sm"
          >
            Click Me
          </button>
          <p className="text-xs text-gray-600 mt-1">Max once per 500ms</p>
        </div>
      </div>
    </div>
  );
};

export default DebounceThrottleDemo;