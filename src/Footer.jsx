import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-right text-base text-gray-500 py-6 mt-auto px-2" style={{ fontFamily: 'Roboto Slab, serif' }}>
      <div className="font-bold text-xl mb-1">philipd.dev</div>
      <div>Code with clarity. Grow with purpose.</div>
      <div className="text-xs mt-2">Developed with Cursor and <span className="underline">coded</span> in React by<span className="underline"> me</span>. Built with Vite, Tailwind. Please report any problem <span className="underline">here</span>.</div>
    </footer>
  );
}

export default Footer; 