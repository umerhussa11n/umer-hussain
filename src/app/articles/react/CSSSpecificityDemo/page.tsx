import { useState } from "react";

// 5. CSS SPECIFICITY DEMO
const CSSSpecificityDemo: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string>('');

  const specificityExamples = [
    { selector: 'div', specificity: '0,0,0,1', description: 'Element selector' },
    { selector: '.class', specificity: '0,0,1,0', description: 'Class selector' },
    { selector: '#id', specificity: '0,1,0,0', description: 'ID selector' },
    { selector: 'div.class', specificity: '0,0,1,1', description: 'Element + Class' },
    { selector: '#id.class', specificity: '0,1,1,0', description: 'ID + Class' },
    { selector: 'div#id.class', specificity: '0,1,1,1', description: 'Element + ID + Class' }
  ];

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">CSS Specificity & Inheritance</h3>
      <p className="text-sm text-gray-600 mb-4">Understanding cascade and specificity calculations</p>
      
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-2 text-xs font-medium mb-2">
          <div>Selector</div>
          <div>Specificity</div>
          <div>Description</div>
        </div>
        {specificityExamples.map((example, index) => (
          <div key={index} className="grid grid-cols-3 gap-2 text-xs py-1 hover:bg-gray-100">
            <code className="bg-gray-200 px-1 rounded">{example.selector}</code>
            <span className="font-mono">{example.specificity}</span>
            <span>{example.description}</span>
          </div>
        ))}
      </div>
      
      <div className="demo-container">
        <div 
          id="specific-demo" 
          className="demo-element p-4 border-2 border-dashed border-gray-400 text-center"
          style={{ 
            color: 'blue',  // inline style (1,0,0,0)
            fontSize: '16px'
          }}
        >
          <p className="text-red-500">This text demonstrates CSS specificity</p>
          <p className="text-sm text-gray-600 mt-2">
            Inline styles override classes, IDs override classes, classes override elements
          </p>
        </div>
      </div>
    </div>
  );
};


export default CSSSpecificityDemo;