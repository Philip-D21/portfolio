import React from 'react';
import { useTheme } from './ThemeContext';
import SEO from './SEO';

function Work() {
  const { colors } = useTheme();
  
  return (
    <div className="flex flex-col h-full">
      <SEO 
        title="Work & Projects - Philip Daudu | Backend Engineering Portfolio"
        description="Discover Philip Daudu's portfolio of backend engineering projects, API developments, and system architecture work. View my technical projects and development showcase."
        keywords="Philip Daudu Projects, Backend Engineering Portfolio, API Projects, System Architecture, Software Development Work, GitHub Projects"
        url="https://philipd.vercel.app/work"
      />
      <main className="flex-1 w-full px-4 sm:px-6 pt-4">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl font-light mb-4 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="font-extrabold">Work</span>
          </h1>
          <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-3xl`} style={{ fontFamily: 'Inter, sans-serif' }}>
            Coming soon - showcase of my projects and contributions.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Work; 