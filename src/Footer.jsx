import React from 'react';
import { useTheme } from './ThemeContext';


function Footer() {
  const { colors } = useTheme();
  
  return (
    <footer className={`w-full text-right text-base ${colors.textMuted} py-4 mt-auto px-4 sm:px-6`} style={{ fontFamily: 'Roboto Slab, serif' }}>
      {/* <div className={`font-bold text-xl mb-1 ${colors.text}`}>Philip</div> */}
      {/* <div>Code with clarity. Grow with purpose.</div>
      <div className="text-xs mt-2">Developed with Cursor and <span className="underline">coded</span> in React by<span className="underline"> me</span>. Built with Vite, Tailwind. Please report any problem <span className="underline">here</span>.</div> */}
    </footer>
  );
}


export default Footer; 