
"use client";
import { useEffect, useState } from "react";

// 4. VIRTUAL DOM AND RECONCILIATION DEMO
const VirtualDOMDemo: React.FC = () => {
  const [items, setItems] = useState<{ id: number; text: string; color: string }[]>([
    { id: 1, text: 'Item 1', color: 'bg-red-200' },
    { id: 2, text: 'Item 2', color: 'bg-blue-200' },
    { id: 3, text: 'Item 3', color: 'bg-green-200' }
  ]);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  const shuffleItems = () => {
    setItems(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const addItem = () => {
    const colors = ['bg-yellow-200', 'bg-purple-200', 'bg-pink-200', 'bg-indigo-200'];
    const newItem = {
      id: Date.now(),
      text: `Item ${items.length + 1}`,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setItems(prev => [...prev, newItem]);
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Virtual DOM & Reconciliation</h3>
      <p className="text-sm text-gray-600 mb-2">React efficiently updates only changed elements</p>
      <p className="text-xs text-blue-600 mb-4">Component renders: {renderCount}</p>
      
      <div className="space-x-2 mb-4">
        <button onClick={shuffleItems} className="px-3 py-1 bg-orange-500 text-white rounded text-sm">
          Shuffle
        </button>
        <button onClick={addItem} className="px-3 py-1 bg-orange-500 text-white rounded text-sm">
          Add Item
        </button>
      </div>
      
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.id} className={`p-2 ${item.color} rounded flex justify-between items-center`}>
            <span>{item.text}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="px-2 py-1 bg-red-500 text-white rounded text-xs"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualDOMDemo;