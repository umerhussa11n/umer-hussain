'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown, ChevronRight, Shield, Zap, Code, Eye, Layers, Clock, Users, Lock
} from 'lucide-react';

// Demo components (ensure these exist or replace with placeholders)
import EventDelegationDemo from './EventDelegationDemo/page';
import ClosuresDemo from './ClosureDemo/page';
import VirtualDOMDemo from './VirtualDomDemo/page';
import AsyncDemo from './PromiseAsyncDemo/page';
import CSSSpecificityDemo from './CSSSpecificityDemo/page';
import DebounceThrottleDemo from './DebounceVsThrottling/page';
import BrowserCompatibilityDemo from './BrowserCompetibility/page';
import PerformanceDemo from './PerformanceDemo/page';
import AccessibilityDemo from './AccessibilityDemo/page';
import SecurityDemo from './WebSecurityDemo/page';
import User from './ClassComponent/page';

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const beginnerTopics = [
  {
    name: 'JSX & Rendering',
    notes: 'Understand how JSX works, how React renders elements, and the difference between elements and components.',
  },
  {
    name: 'Props & State',
    notes: 'Know how to pass data via props, manage local state, and lift state up for shared data.',
  },
];

const intermediateTopics = [
  {
    name: 'Component Lifecycle & Hooks',
    notes: 'Learn about functional/class components, lifecycle methods, and React hooks like useState, useEffect, and custom hooks.',
  },
  {
    name: 'Context & State Management',
    notes: 'Use React Context for global state, and explore state management libraries like Redux or Zustand.',
  },
];

// Advanced topics: combine original advanced + new concept demos
const advancedTopics = [
  {
    name: 'Performance Optimization',
    notes: 'Optimize rendering with memoization, React.memo, useMemo, useCallback, and understand reconciliation.',
  },
];

// Concept demos for advanced section
const conceptDemos = [
  // {
  //   id: 'basic-examples',
  //   title: 'Basic Examples',
  //   description: 'React basic concepts examples',
  //   component: BasicExamples,
  //   icon: Shield,
  // },
  {
    id: 'class-component',
    title: 'Class Component',
    description: 'React Class based component',
    component: User,
    icon: Shield,
  },
  {
    id: 'event-delegation',
    title: 'Event Delegation',
    description: 'Single event listener handles multiple dynamic elements',
    component: EventDelegationDemo,
    icon: Users,
  },
  {
    id: 'closures',
    title: 'Closures & Lexical Scope',
    description: 'Understanding scope chains and closure behavior',
    component: ClosuresDemo,
    icon: Code,
  },
  {
    id: 'async',
    title: 'Promises & Async/Await',
    description: 'Handling asynchronous operations in JavaScript',
    component: AsyncDemo,
    icon: Clock,
  },
  {
    id: 'virtual-dom',
    title: 'Virtual DOM & Reconciliation',
    description: 'How React efficiently updates the DOM',
    component: VirtualDOMDemo,
    icon: Layers,
  },
  {
    id: 'css-specificity',
    title: 'CSS Specificity & Inheritance',
    description: 'Understanding cascade and specificity rules',
    component: CSSSpecificityDemo,
    icon: Eye,
  },
  {
    id: 'debounce-throttle',
    title: 'Debouncing vs Throttling',
    description: 'Performance optimization techniques for events',
    component: DebounceThrottleDemo,
    icon: Zap,
  },
  {
    id: 'browser-compatibility',
    title: 'Browser Compatibility',
    description: 'Feature detection and cross-browser support',
    component: BrowserCompatibilityDemo,
    icon: Shield,
  },
  {
    id: 'performance',
    title: 'Performance & Core Web Vitals',
    description: 'Optimization techniques and performance monitoring',
    component: PerformanceDemo,
    icon: Zap,
  },
  {
    id: 'accessibility',
    title: 'Accessibility (a11y)',
    description: 'Making web applications accessible to all users',
    component: AccessibilityDemo,
    icon: Users,
  },
  {
    id: 'security',
    title: 'Web Security Essentials',
    description: 'XSS, CSRF, and security best practices',
    component: SecurityDemo,
    icon: Lock,
  },
];

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
          <Icon className="w-5 h-5 text-blue-600" />
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
        <div className="border-t border-black-200 p-4 bg-black-50">
          <concept.component />
        </div>
      )}
    </div>
  );
};

const ReactFundamentals = () => {
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
        href={`/articles/react/${slugify(topic.name)}`}
        className="text-blue-600 underline hover:text-blue-800"
      >
        ..more
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center w-full">React Fundamentals</h1>

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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
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

export default ReactFundamentals;