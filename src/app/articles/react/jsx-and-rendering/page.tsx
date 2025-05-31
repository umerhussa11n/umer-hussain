"use client";

import React from "react";

const JsxAndRenderingPage = () => (
  <main className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">JSX &amp; Rendering in React</h1>
    <p className="mb-4 text-gray-700">
      JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to describe what the UI should look like in a declarative way. React components use JSX to define their structure, which is then rendered to the DOM.
    </p>
    <p className="mb-2 text-gray-700">
      For example, a simple React component using JSX looks like this:
    </p>
    <pre className="bg-gray-900 text-green-200 rounded-md p-4 mb-4 overflow-x-auto text-sm">
      <code>{`function Welcome() {
  return <h2>Hello, React!</h2>;
}`}</code>
    </pre>
    <p className="mb-2 text-gray-700">
      When this component is rendered, React converts the JSX into JavaScript calls that create and update DOM elements efficiently. You can also embed JavaScript expressions inside JSX using curly braces:
    </p>
    <pre className="bg-gray-900 text-green-200 rounded-md p-4 mb-4 overflow-x-auto text-sm">
      <code>{`const name = "Umer";
function Greeting() {
  return <p>Welcome, {name}!</p>;
}`}</code>
    </pre>
    <p className="text-gray-700">
      In summary, JSX makes it easier to write and visualize the structure of your UI, and React handles rendering and updating the DOM based on your component definitions.
    </p>
  </main>
);

export default JsxAndRenderingPage;