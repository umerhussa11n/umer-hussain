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

//symbol example 
const symbolExample = `
const uniqueId = Symbol('uniqueId');

const user = {
  name: 'Alice',
  [uniqueId]: 12345, // Symbol as a property key
};

// Even if someone else adds a property called 'uniqueId', it won't conflict:
user.uniqueId = 'not secret';

console.log(user[uniqueId]); // 12345 (accesses the symbol property)
console.log(user.uniqueId);  // "not secret" (accesses the string property)

// Symbols are not included in for...in or Object.keys()
for (let key in user) {
  console.log(key); // Only logs 'name' and 'uniqueId', not the symbol property
}
console.log(Object.keys(user)); // ['name', 'uniqueId']

// But you can get symbol properties with Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(uniqueId)]
`

const VariablesAndDataTypes = () => (
  <>
  <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md p-4 m-8">
    <h1 className="text-3xl font-bold mb-4 text-center">Variables & Data Types in JavaScript</h1>
    <p className="mb-4 text-white">
      JavaScript provides three ways to declare variables: <code className="bg-white-100 px-1 rounded">var</code>, <code className="bg-white-100 px-1 rounded">let</code>, and <code className="bg-white-100 px-1 rounded">const</code>.
    </p>
    <ul className="mb-4 list-disc pl-6 text-white">
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
    <h2 className="text-2xl font-semibold mb-2 text-center">JavaScript Data Types</h2>
    <ul className="mb-4 list-disc pl-6 text-white-700">
      <li><strong>String</strong>: Textual data, e.g., <code>hello</code></li>
      <li><strong>Number</strong>: Numeric values, e.g., <code>42</code>, <code>3.14</code></li>
      <li><strong>Boolean</strong>: <code>true</code> or <code>false</code></li>
      <li><strong>Null</strong>: Intentional absence of value</li>
      <li><strong>Undefined</strong>: Variable declared but not assigned a value</li>
      <li><strong>Symbol</strong>: Unique and immutable primitive value (used as object keys)</li>
      <li><strong>Object</strong>: Collections of key-value pairs, arrays, functions, etc.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2 text-center">Examples</h2>
    <pre className="bg-white-900 text-white rounded p-4 overflow-x-auto mb-4">
      <code>{codeExample}</code>
    </pre>
    <p className="text-white">
      Understanding how to declare variables and the different data types is fundamental to writing robust JavaScript code.
    </p>
  </div>

    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md p-4 m-8">
      <h2 className="text-xl font-semibold mb-2 text-center">Symbol Examples</h2>
    <p className="text-white">
      Symbols are a unique data type introduced in ES6. They are often used to create unique property keys that won&apost conflict with other properties, even if they have the same name.
    </p>
    <pre className="bg-white-900 text-white rounded p-4 overflow-x-auto mb-4">
      <code>{symbolExample}</code>
    </pre>
    </div>
    </>
);

export default VariablesAndDataTypes;