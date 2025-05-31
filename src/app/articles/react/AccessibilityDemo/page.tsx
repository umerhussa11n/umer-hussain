"use client";

import { useEffect, useState } from "react";

const AccessibilityDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Focus management for modal
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isModalOpen]);

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Accessibility (a11y) Basics</h3>
      <p className="text-sm text-gray-600 mb-4">ARIA labels, focus management, semantic HTML</p>
      
      {/* Accessible Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`mt-1 block w-full px-3 py-2 border rounded ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-600 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`mt-1 block w-full px-3 py-2 border rounded ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-600 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      
      {/* Modal Demo */}
      <button
        onClick={() => setIsModalOpen(true)}
        aria-describedby="modal-description"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Open Modal
      </button>
      <p id="modal-description" className="text-xs text-gray-600 mt-1">
        Opens an accessible modal dialog
      </p>
      
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="bg-white p-6 rounded max-w-md">
            <h2 id="modal-title" className="text-lg font-semibold mb-4">
              Accessible Modal
            </h2>
            <p className="mb-4">This modal demonstrates proper a11y practices:</p>
            <ul className="text-sm list-disc list-inside mb-4 space-y-1">
              <li>Focus management</li>
              <li>ARIA attributes</li>
              <li>Keyboard navigation</li>
              <li>Screen reader support</li>
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              autoFocus
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityDemo;