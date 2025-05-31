"use client";

import { useState } from "react";

// 3. PROMISES AND ASYNC/AWAIT DEMO
const AsyncDemo: React.FC = () => {
  const [promiseResult, setPromiseResult] = useState<string>('');
  const [asyncResult, setAsyncResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Promise example
  const fetchWithPromise = () => {
    setLoading(true);
    setPromiseResult('Loading...');
    
    new Promise<string>((resolve) => {
      setTimeout(() => resolve('Promise resolved!'), 2000);
    })
    .then(result => setPromiseResult(result))
    .catch(error => setPromiseResult(`Error: ${error}`))
    .finally(() => setLoading(false));
  };

  // Async/await example
  const fetchWithAsync = async () => {
    setLoading(true);
    setAsyncResult('Loading...');
    
    try {
      const result = await new Promise<string>((resolve) => {
        setTimeout(() => resolve('Async/await resolved!'), 2000);
      });
      setAsyncResult(result);
    } catch (error) {
      setAsyncResult(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Promises & Async/Await</h3>
      <p className="text-sm text-gray-600 mb-4">Compare Promise chains vs async/await syntax</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-green-100 rounded">
          <h4 className="font-medium mb-2">Promise Chain</h4>
          <button
            onClick={fetchWithPromise}
            disabled={loading}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm disabled:opacity-50"
          >
            Fetch with Promise
          </button>
          <p className="mt-2 text-sm">{promiseResult}</p>
        </div>
        
        <div className="p-3 bg-green-100 rounded">
          <h4 className="font-medium mb-2">Async/Await</h4>
          <button
            onClick={fetchWithAsync}
            disabled={loading}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm disabled:opacity-50"
          >
            Fetch with Async
          </button>
          <p className="mt-2 text-sm">{asyncResult}</p>
        </div>
      </div>
    </div>
  );
};

export default AsyncDemo;