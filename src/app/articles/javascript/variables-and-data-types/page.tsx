'use client';
import React from 'react';

const codeExample = `// Variable declarations
    var x = 10;        // Function-scoped, can be redeclared and updated
    let y = 20;        // Block-scoped, can be updated but not redeclared in same scope
    const z = 30;      // Block-scoped, cannot be updated or redeclared

    // Data types
    const str = "Hello";      // string
    const num = 42;           // number
    const bool = true;        // boolean
    const n = null;           // null
    const u = undefined;      // undefined
    const sym = Symbol('id'); // symbol
    const obj = { a: 1 };     // object
`;

const VariablesAndDataTypes = () => (
  <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md p-4 m-8">
    <h1 className="text-3xl font-bold mb-4">Variables & Data Types in JavaScript</h1>
    <p className="mb-4 text-white-700">
      JavaScript provides three ways to declare variables: <code className="bg-white-100 px-1 rounded">var</code>, <code className="bg-white-100 px-1 rounded">let</code>, and <code className="bg-white-100 px-1 rounded">const</code>.
    </p>
    <ul className="mb-4 list-disc pl-6 text-white-700">
      <li>
        <strong>var</strong>: Function-scoped. Can be redeclared and updated. Avoid using in modern code.
      </li>
      <li>
        <strong>let</strong>: Block-scoped. Can be updated but not redeclared in the same scope.
      </li>
      <li>
        <strong>const</strong>: Block-scoped. Cannot be updated or redeclared. Must be initialized at declaration.
      </li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">JavaScript Data Types</h2>
    <ul className="mb-4 list-disc pl-6 text-white-700">
      <li><strong>String</strong>: Textual data, e.g., <code>"hello"</code></li>
      <li><strong>Number</strong>: Numeric values, e.g., <code>42</code>, <code>3.14</code></li>
      <li><strong>Boolean</strong>: <code>true</code> or <code>false</code></li>
      <li><strong>Null</strong>: Intentional absence of value</li>
      <li><strong>Undefined</strong>: Variable declared but not assigned a value</li>
      <li><strong>Symbol</strong>: Unique and immutable primitive value (used as object keys)</li>
      <li><strong>Object</strong>: Collections of key-value pairs, arrays, functions, etc.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">Example</h2>
    <pre className="bg-white-900 text-white-100 rounded p-4 overflow-x-auto mb-4">
      <code>{codeExample}</code>
    </pre>
    <p className="text-white-700">
      Understanding how to declare variables and the different data types is fundamental to writing robust JavaScript code.
    </p>
  </div>
);

export default VariablesAndDataTypes;