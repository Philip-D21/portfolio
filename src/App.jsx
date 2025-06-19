import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-navy text-off-white relative" style={{ backgroundImage: "url('/noise.png')", backgroundRepeat: 'repeat' }}>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-2 sm:px-4">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-light mb-2 text-center leading-tight">
          Philip <span className="font-extrabold">Daudu</span>
        </h1>
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Backend Engineer</h2>
        <p className="max-w-md sm:max-w-2xl text-center mb-6 sm:mb-8 text-base sm:text-lg">
          Professional developer with 2 years of <span className="italic">experience</span> in the software development industry. Throughout my career, I have <span className="italic">worked</span> on numerous projects with diverse programming languages (Python, Node.js, Go, TS,MongoDb, SQL...), technologies, and requirements that go beyond the field of computer science; also, I have successfully led developer teams to deliver scalable software solutions that exceed client expectations and demands.<br /><br />
          I am a resilient, creative, and meticulous person who enjoys pondering and <span className="italic">writing</span> about anything I consider important. I put in a huge effort to <span className="italic">think</span> and make things differently —which is usually reflected in my results.<br /><br />
          I love music.
        </p>
        <div className="flex flex-col items-center gap-4 mb-6 sm:mb-8 w-full">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/philip-daudu/" className="hover:text-tech-green" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Philip-D21" className="hover:text-neon-blue" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://youtube.com/" className="hover:text-red-500" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
          <button className="bg-off-white text-dark-navy font-bold px-4 sm:px-6 py-2 rounded shadow hover:bg-tech-green hover:text-white transition mt-2 sm:mt-4 w-full max-w-xs">Get in touch</button>
        </div>
        <div className="text-center text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
          Feel free to reach me out if you want to build something together, have any questions, or just want to connect.
        </div>
      </main>
      <footer className="w-full text-center text-xs text-gray-400 py-3 sm:py-4 mt-auto px-2">
        <span className="font-bold">philipdaudu.dev</span> <span className="mx-1">·</span> Make it simple. Make it possible.<br />
        <span className="italic">Designed in Figma and coded in React. Built with Vite and Tailwind CSS.</span>
      </footer>
    </div>
  );
}

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="pt-6 px-2 sm:pt-8 sm:px-4 md:px-0 max-w-4xl mx-auto w-full relative z-20">
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div>
          <div className="font-bold text-lg sm:text-xl">philipdaudu.dev</div>
          <div className="text-xs text-gray-400">Make it simple. Make it possible.</div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 text-off-white focus:outline-none"
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setNavOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={navOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>
      {/* Overlay and Nav links for mobile */}
      {navOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-30" onClick={() => setNavOpen(false)}></div>
          <nav className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-dark-navy shadow-lg z-40 flex flex-col gap-6 p-8 text-lg animate-slide-in">
            <button className="self-end mb-4" onClick={() => setNavOpen(false)} aria-label="Close navigation">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <Link to="/" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>me</Link>
            <Link to="/experience" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>experience</Link>
            <Link to="/work" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>work</Link>
            <Link to="/archive" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>archive</Link>
            <Link to="/playground" className="hover:text-tech-green" onClick={() => setNavOpen(false)}>playground</Link>
          </nav>
        </>
      )}
      {/* Nav links for desktop */}
      <nav className="hidden sm:flex flex-row justify-end gap-6 text-lg mb-8">
        <Link to="/" className="hover:text-tech-green border-b-2 border-tech-green">me</Link>
        <Link to="/experience" className="hover:text-tech-green">experience</Link>
        <Link to="/work" className="hover:text-tech-green">work</Link>
        <Link to="/archive" className="hover:text-tech-green">archive</Link>
        <Link to="/playground" className="hover:text-tech-green">playground</Link>
      </nav>
    </header>
  );
}

function Experience() {
  return <div className="p-4 sm:p-8 text-off-white">Experience Page (Placeholder)</div>;
}
function Work() {
  return <div className="p-4 sm:p-8 text-off-white">Work Page (Placeholder)</div>;
}
function Archive() {
  return <div className="p-4 sm:p-8 text-off-white">Archive Page (Placeholder)</div>;
}
function Playground() {
  return <div className="p-4 sm:p-8 text-off-white">Playground Page (Placeholder)</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;
