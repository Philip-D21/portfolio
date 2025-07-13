import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Experience from './Experience';
import Work from './Work';
import Archive from './Archive';
// import Playground from './Playground';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/archive" element={<Archive />} />
            {/* <Route path="/playground" element={<Playground />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
