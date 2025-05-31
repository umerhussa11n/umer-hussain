import React, { useEffect, useMemo } from "react";
import { useState } from "react";

// 8. PERFORMANCE TUNING DEMO
const PerformanceDemo: React.FC = () =>{
  const [renderTime, setRenderTime] = useState<number>(0);
  const [listSize, setListSize] = useState<number>(100);
  const [useVirtualization, setUseVirtualization] = useState<boolean>(false);

  const ExpensiveComponent = React.memo(({ item, index }: { item: number; index: number }) => {
    // Simulate expensive computation
    const expensiveValue = useMemo(() => {
      let result = 0;
      for (let i = 0; i < 1000; i++) {
        result += Math.random();
      }
      return result;
    }, [item]);

    return (
      <div className="p-2 border-b border-gray-200 flex justify-between">
        <span>Item {item}</span>
        <span className="text-xs text-gray-500">
          {expensiveValue.toFixed(2)}
        </span>
      </div>
    );
  });

  const items = useMemo(() => 
    Array.from({ length: listSize }, (_, i) => i + 1), 
    [listSize]
  );

  const visibleItems = useVirtualization ? items.slice(0, 20) : items;

  useEffect(() => {
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      setRenderTime(end - start);
    }, 0);
  }, [listSize, useVirtualization]);

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Performance Tuning & Core Web Vitals</h3>
      <p className="text-sm text-gray-600 mb-4">React.memo, useMemo, and virtualization</p>
      
      <div className="flex items-center gap-4 mb-4">
        <label className="flex items-center gap-2">
          <span className="text-sm">List Size:</span>
          <input
            type="range"
            min="10"
            max="1000"
            value={listSize}
            onChange={(e) => setListSize(Number(e.target.value))}
            className="w-20"
          />
          <span className="text-sm w-8">{listSize}</span>
        </label>
        
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useVirtualization}
            onChange={(e) => setUseVirtualization(e.target.checked)}
          />
          <span className="text-sm">Use Virtualization</span>
        </label>
      </div>
      
      <div className="mb-4 p-2 bg-blue-50 rounded">
        <p className="text-sm">
          Render Time: <strong>{renderTime.toFixed(2)}ms</strong>
          {useVirtualization && <span className="text-green-600 ml-2">(Virtualized)</span>}
        </p>
      </div>
      
      <div className="h-40 overflow-y-auto border rounded">
        {visibleItems.map((item, index) => (
          <ExpensiveComponent key={item} item={item} index={index} />
        ))}
        {useVirtualization && listSize > 20 && (
          <div className="p-2 text-center text-gray-500 text-sm">
            ... and {listSize - 20} more items (virtualized)
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDemo;