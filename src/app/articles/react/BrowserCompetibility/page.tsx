"use client";

import { useEffect, useState } from "react";

// 7. BROWSER COMPATIBILITY DEMO
const BrowserCompatibilityDemo: React.FC = () => {
  const [featureSupport, setFeatureSupport] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkFeatureSupport = () => {
      const support = {
        localStorage: typeof Storage !== 'undefined',
        fetch: typeof fetch !== 'undefined',
        promises: typeof Promise !== 'undefined',
        arrow_functions: (() => { try { eval('() => {}'); return true; } catch { return false; } })(),
        css_grid: CSS?.supports?.('display', 'grid') || false,
        css_flexbox: CSS?.supports?.('display', 'flex') || false,
        webgl: (() => {
          try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
          } catch { return false; }
        })(),
        service_worker: 'serviceWorker' in navigator
      };
      setFeatureSupport(support);
    };

    checkFeatureSupport();
  }, []);

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">Browser Compatibility</h3>
      <p className="text-sm text-grey-600 mb-4">Feature detection for cross-browser support</p>
      
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(featureSupport).map(([feature, supported]) => (
          <div key={feature} className="flex items-center justify-between p-2 bg-black-50 rounded">
            <span className="text-sm capitalize">{feature.replace('_', ' ')}</span>
            <span className={`px-2 py-1 rounded text-xs ${
              supported ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            }`}>
              {supported ? 'Supported' : 'Not Supported'}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded">
        <h4 className="font-medium text-sm">Polyfill Strategy</h4>
        <p className="text-xs text-gray-600 mt-1">
          Use feature detection + progressive enhancement + polyfills for unsupported features
        </p>
      </div>
    </div>
  );
};

export default BrowserCompatibilityDemo;