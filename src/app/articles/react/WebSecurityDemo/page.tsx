
"use client";
import { useEffect, useState } from "react";

// 10. WEB SECURITY DEMO
  const SecurityDemo: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [sanitizedOutput, setSanitizedOutput] = useState<string>('');
  const [csrfToken, setCsrfToken] = useState<string>('');

  // XSS Prevention - Input Sanitization
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  const handleInputChange = (value: string) => {
    setUserInput(value);
    setSanitizedOutput(sanitizeInput(value));
  };

  // CSRF Token Generation
  const generateCSRFToken = () => {
    const token = Math.random().toString(36).substring(2, 15) + 
                 Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);
  };

  useEffect(() => {
    generateCSRFToken();
  }, []);

  const securityPrinciples = [
    {
      title: 'XSS Prevention',
      description: 'Always sanitize user input and use Content Security Policy',
      example: 'Input: <script>alert("xss")</script>'
    },
    {
      title: 'CSRF Protection',
      description: 'Use CSRF tokens and SameSite cookies',
      example: 'Token-based form submission'
    },
    {
      title: 'Input Validation',
      description: 'Validate both client-side and server-side',
      example: 'Email format, length limits, type checking'
    },
    {
      title: 'Secure Headers',
      description: 'Set security headers: HSTS, X-Frame-Options, etc.',
      example: 'X-Content-Type-Options: nosniff'
    }
  ];

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Web Security Essentials</h3>
      <p className="text-sm text-gray-600 mb-4">XSS, CSRF, and security best practices</p>
      
      {/* XSS Demo */}
      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
        <h4 className="font-medium text-red-800 mb-2">XSS Prevention Demo</h4>
        <input
          type="text"
          value={userInput}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Try entering: <script>alert('xss')</script>"
          className="w-full p-2 border rounded mb-2"
        />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs font-medium">Raw Input:</p>
            <div className="p-2 bg-white border rounded text-xs font-mono">
              {userInput || 'Enter some text...'}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium">Sanitized Output:</p>
            <div className="p-2 bg-white border rounded text-xs font-mono">
              {sanitizedOutput || 'Sanitized text will appear here...'}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSRF Demo */}
      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <h4 className="font-medium text-yellow-800 mb-2">CSRF Protection Demo</h4>
        <form className="space-y-2">
          <input
            type="hidden"
            name="csrf_token"
            value={csrfToken}
          />
          <div className="flex items-center gap-2">
            <span className="text-xs">CSRF Token:</span>
            <code className="text-xs bg-white px-2 py-1 rounded border">
              {csrfToken}
            </code>
            <button
              type="button"
              onClick={generateCSRFToken}
              className="px-2 py-1 bg-yellow-500 text-white rounded text-xs"
            >
              Regenerate
            </button>
          </div>
          <p className="text-xs text-gray-600">
            Include this token in all state-changing requests
          </p>
        </form>
      </div>
      
      {/* Security Principles */}
      <div className="space-y-2">
        <h4 className="font-medium">Security Best Practices:</h4>
        {securityPrinciples.map((principle, index) => (
          <div key={index} className="p-2 bg-gray-50 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-sm font-medium">{principle.title}</h5>
                <p className="text-xs text-gray-600">{principle.description}</p>
              </div>
            </div>
            <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
              {principle.example}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityDemo;