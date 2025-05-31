import { useState } from "react";

// 1. EVENT DELEGATION DEMO
/**
 * A React functional component demonstrating event delegation.
 *
 * This component renders a list of clickable items and a button to add more items.
 * Instead of attaching individual click handlers to each item, it uses a single
 * click handler on the container to manage item clicks via event delegation.
 *
 * Features:
 * - Displays a list of items, each clickable.
 * - Uses event delegation to handle clicks on any item.
 * - Allows dynamically adding new items to the list.
 * - Shows which item was last clicked.
 *
 * @component
 */
const EventDelegationDemo: React.FC = () => {
  const [clickedItem, setClickedItem] = useState<string>('');
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);

  // Event delegation - single handler for all items
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    debugger;
    const target = e.target as HTMLElement;
    if (target.dataset.item) {
      setClickedItem(target.dataset.item);
    }
  };

  const addItem = () => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`]);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Event Delegation</h3>
      <p className="text-sm text-gray-600 mb-4">Single event listener handles all dynamic items</p>
      
      <div onClick={handleContainerClick} className="space-y-2 mb-4">
        {items.map((item, index) => (
          <div
            key={index}
            data-item={item}
            className="p-2 bg-black border border-white rounded cursor-pointer hover:bg-gray-800 text-white"
          >
            {item}
          </div>
        ))}
      </div>
      
      <button onClick={addItem} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Item
      </button>
      
      {clickedItem && (
        <p className="mt-2 text-green-600">Clicked: {clickedItem}</p>
      )}
    </div>
  );
};

export default EventDelegationDemo;