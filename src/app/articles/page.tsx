import React from 'react';
import Link from 'next/link';

const cards = [
  { label: 'React Js', version: '19.0.1', href: '/articles/react' },
  { label: 'Node', version: '22.0.0', href: '/articles/node' },
  { label: 'AWS', version: '2', href: '/articles/aws' },
  { label: 'JavaScript', version: '2', href: '/articles/javascript' },
];

const ArticlesIndex = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Articles & Blogs</h1>
      <p className="text-lg mb-8">
        Welcome to the articles section. Here you will find various articles on web development topics.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group [perspective:1000px] h-64 block focus:outline-none"
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden">
                <h2 className="text-2xl font-bold text-gray-900">{card.label}</h2>
                <p className="text-l font-italic text-gray-900">{card.version}</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-gray-900 rounded-lg shadow-md flex items-center justify-center [transform:rotateY(180deg)] backface-hidden">
                <span className="text-2xl font-bold text-white">Dive Deeper..</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};
export default ArticlesIndex;