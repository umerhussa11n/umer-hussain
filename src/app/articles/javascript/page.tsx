'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown, ChevronRight, Code, Zap, Layers, Clock, Users, Lock, BookOpen
} from 'lucide-react';

// Demo components (replace with your own or remove if not available)
const Placeholder = ({ title }: { title: string }) => (
  <div className="text-gray-700 italic">Demo for {title} coming soon...</div>
);

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const beginnerTopics = [
  {
    name: 'Variables & Data Types',
    notes: 'Learn about let, const, var, and JavaScripts primitive types: string, number, boolean, null, undefined, symbol, and object.',
  },
  {
    name: 'Operators & Expressions',
    notes: 'Understand arithmetic, assignment, comparison, logical, and other operators in JavaScript.',
  },
  {
    name: 'Control Flow',
    notes: 'Master if/else, switch, for, while, and do...while statements for controlling program logic.',
  },
];

const intermediateTopics = [
  {
    name: 'Functions & Scope',
    notes: 'Explore function declarations, expressions, arrow functions, and lexical scope.',
  },
  {
    name: 'Arrays & Objects',
    notes: 'Work with arrays and objects, including methods like map, filter, reduce, and object manipulation.',
  },
  {
    name: 'ES6 Features',
    notes: 'Use modern JavaScript features like destructuring, spread/rest, template literals, and modules.',
  },
  {
    name: 'Error Handling',
    notes: 'Learn about try/catch, throw, and custom error handling in JavaScript.',
  },
  {
    name: 'debounce & throttle',
    notes: 'Understand how to control function execution frequency with debounce and throttle techniques.',
  },
  {
    name: 'Hoisting',
    notes: 'Learn how variable and function declarations are hoisted in JavaScript.',
  },
  {
    name: 'Pure Functions',
    notes: 'Understand the concept of pure functions and their importance in functional programming.',
  },
  {
    name: 'Objects In Javascript',
    notes: 'Explore how objects work in JavaScript, including object literals, constructors, and prototypes.',
  }
];

const advancedTopics = [
  {
    name: 'Asynchronous JavaScript',
    notes: 'Understand callbacks, promises, async/await, and event loop.',
  },
  {
    name: 'Closures & Lexical Environment',
    notes: 'Dive deep into closures, scope chains, and how JavaScript handles variable access.',
  },
  {
    name: 'Prototypes & Inheritance',
    notes: 'Learn about prototype chains, inheritance, and the class syntax.',
  },
];

// Concept demos for advanced section (replace Placeholder with real demos if available)
const conceptDemos = [
  {
    id: 'event-loop',
    title: 'Event Loop',
    description: 'How JavaScript handles asynchronous operations and concurrency.',
    component: () => <Placeholder title="Event Loop" />,
    icon: Clock,
  },
  {
    id: 'hoisting',
    title: 'Hoisting',
    description: 'Variable and function hoisting in JavaScript.',
    component: () => <Placeholder title="Hoisting" />,
    icon: BookOpen,
  },
  {
    id: 'closure',
    title: 'Closures',
    description: 'Understanding closures and lexical scope.',
    component: () => <Placeholder title="Closures" />,
    icon: Code,
  },
  {
    id: 'async-await',
    title: 'Async/Await',
    description: 'Modern asynchronous programming with async/await.',
    component: () => <Placeholder title="Async/Await" />,
    icon: Zap,
  },
  {
    id: 'prototype',
    title: 'Prototypes',
    description: 'Prototype-based inheritance and object creation.',
    component: () => <Placeholder title="Prototypes" />,
    icon: Layers,
  },
  {
    id: 'this-keyword',
    title: 'The "this" Keyword',
    description: 'How "this" works in different contexts.',
    component: () => <Placeholder title='The "this" Keyword' />,
    icon: Users,
  },
  {
    id: 'strict-mode',
    title: 'Strict Mode',
    description: 'Enforcing stricter parsing and error handling in JavaScript.',
    component: () => <Placeholder title="Strict Mode" />,
    icon: Lock,
  }];
// ConceptSection for advanced demos
const ConceptSection: React.FC<{
  concept: typeof conceptDemos[0];
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ concept, isExpanded, onToggle }) => {
  const Icon = concept.icon;
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-yellow-600" />
          <div className="text-left">
            <h2 className="font-semibold text-lg">{concept.title}</h2>
            <p className="text-sm text-gray-600">{concept.description}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <div className="border-t border-yellow-100 p-4 bg-yellow-50">
          <concept.component />
        </div>
      )}
    </div>
  );
};

const JavaScriptFundamentals = () => {
  const [openIndex, setOpenIndex] = useState<{ section: string; idx: number } | null>(null);
  const [expandedConcepts, setExpandedConcepts] = useState<Set<string>>(new Set());

  const toggle = (section: string, idx: number) => {
    if (openIndex && openIndex.section === section && openIndex.idx === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex({ section, idx });
    }
  };

  const toggleConcept = (id: string) => {
    const newSet = new Set(expandedConcepts);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedConcepts(newSet);
  };

  const expandAllConcepts = () => setExpandedConcepts(new Set(conceptDemos.map(c => c.id)));
  const collapseAllConcepts = () => setExpandedConcepts(new Set());

  const renderNotes = (topic: { name: string; notes: string }) => (
    <div className="p-4 pt-0 text-gray-700">
      {topic.notes}{' '}
      <Link
        href={`/articles/javascript/${slugify(topic.name)}`}
        className="text-yellow-700 underline hover:text-yellow-900"
      >
        ..more
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center w-full">JavaScript Fundamentals</h1>

      {/* Beginner */}
      <h2 className="text-2xl font-semibold mb-4 text-center w-full">Beginner</h2>
      <ul className="w-full max-w-xl space-y-4 mb-8">
        {beginnerTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle('beginner', idx)}
            >
              {topic.name}
              <span>{openIndex?.section === 'beginner' && openIndex.idx === idx ? '-' : '+'}</span>
            </button>
            {openIndex?.section === 'beginner' && openIndex.idx === idx && renderNotes(topic)}
          </li>
        ))}
      </ul>

      {/* Intermediate */}
      <h2 className="text-2xl font-semibold mb-4 text-center w-full">Intermediate</h2>
      <ul className="w-full max-w-xl space-y-4 mb-8">
        {intermediateTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle('intermediate', idx)}
            >
              {topic.name}
              <span>{openIndex?.section === 'intermediate' && openIndex.idx === idx ? '-' : '+'}</span>
            </button>
            {openIndex?.section === 'intermediate' && openIndex.idx === idx && renderNotes(topic)}
          </li>
        ))}
      </ul>

      {/* Advanced */}
      <h2 className="text-2xl font-semibold mb-4 text-center w-full">Advanced</h2>
      <ul className="w-full max-w-xl space-y-4 mb-8">
        {advancedTopics.map((topic, idx) => (
          <li key={topic.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle('advanced', idx)}
            >
              {topic.name}
              <span>{openIndex?.section === 'advanced' && openIndex.idx === idx ? '-' : '+'}</span>
            </button>
            {openIndex?.section === 'advanced' && openIndex.idx === idx && renderNotes(topic)}
          </li>
        ))}
      </ul>

      {/* Advanced Concept Demos */}
      <div className="w-full max-w-2xl">
        <div className="flex gap-2 mb-4">
          <button
            onClick={expandAllConcepts}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAllConcepts}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Collapse All
          </button>
        </div>
        <div className="space-y-4">
          {conceptDemos.map((concept) => (
            <ConceptSection
              key={concept.id}
              concept={concept}
              isExpanded={expandedConcepts.has(concept.id)}
              onToggle={() => toggleConcept(concept.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaScriptFundamentals;