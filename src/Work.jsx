import React from 'react';
import { useTheme } from './ThemeContext';

function Work() {
  const { colors } = useTheme();
  
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 w-full px-4 sm:px-6 pt-4">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-light mb-4 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="font-extrabold">Work</span>
          </h1>
          <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-3xl`} style={{ fontFamily: 'Roboto Slab, serif' }}>
            Coming soon - showcase of my projects and contributions.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Work; 