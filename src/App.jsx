import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Experience from './Experience';
import Work from './Work';
import Blog from './Blog';
import Birthday from './Birthday';
import Anonymous from './Anonymous';

import './App.css';

function AppContent() {
  const { colors } = useTheme();
  
  return (
    <Router>
      <div className={`flex flex-col h-screen ${colors.bg} ${colors.text}`}>
        <Header />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/birthday" element={<Birthday />} /> */}
            <Route path="/anonymous" element={<Anonymous />} />
            <Route path="/anonymous/:username" element={<Anonymous />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}




export default App;