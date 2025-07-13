import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="pt-6 px-2 sm:pt-8 sm:px-4 md:px-0 max-w-4xl mx-auto w-full relative z-20">
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div>
          <div className="font-bold text-lg sm:text-xl">philipdaudu.dev</div>
          <div className="text-xs text-gray-400">Code with clarity. Grow with purpose.</div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 text-off-white focus:outline-none"
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="text-2xl">{navOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      {/* Overlay and Nav links for mobile */}
      {navOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-30" onClick={() => setNavOpen(false)}></div>
          <nav className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-black shadow-lg z-40 flex flex-col gap-6 p-8 text-lg animate-slide-in">
            <button className="self-end mb-4" onClick={() => setNavOpen(false)} aria-label="Close navigation">
              <span className="text-2xl">✕</span>
            </button>
            <Link to="/" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>me</Link>
            <Link to="/experience" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>experience</Link>
            {/* <Link to="/work" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>work</Link>
            <Link to="/archive" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>archive</Link> */}
            {/* <Link to="/playground" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>playground</Link> */}
          </nav>
        </>
      )}
      {/* Nav links for desktop */}
      <nav className="hidden sm:flex flex-row justify-end gap-6 text-lg mb-8">
        <Link to="/" className="hover:text-tech-green border-b-2 border-tech-green">me</Link>
        <Link to="/experience" className="hover:text-tech-green">experience</Link>
        {/* <Link to="/work" className="hover:text-tech-green">work</Link>
        <Link to="/archive" className="hover:text-tech-green">archive</Link> */}
        {/* <Link to="/playground" className="hover:text-tech-green">playground</Link> */}
      </nav>
    </header>
  );
}

export default Header; 