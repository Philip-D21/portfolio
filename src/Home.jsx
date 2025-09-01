import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

function Home() {
  const { colors } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    "Backend Engineer",
    "API Architect", 
    "System Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <main className="flex-1 w-full px-4 sm:px-6 pt-4">

        {/* Mobile Layout - Image First */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Photo at top for mobile */}
          <div className={`mb-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Photo Container */}
              <div className="relative">
                <img 
                  src="/image/headshot.jpeg" 
                  alt="Philip Daudu" 
                  className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1.5 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="font-bold text-xs">Available for work!</span>
                </div>
              </div>
            </div>
          </div>

      
          {/* Content below for mobile */}
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-6">
              <h1 className="text-4xl sm:text-6xl font-light mb-2 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Philip <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Daudu</span>
        </h1>

              {/* flaoting element */}
              <div className="absolute top-80 right-10 opacity-10    animate-bounce">
                <i className="fas fa-code text-6xl"></i>
                </div>
                <div className="absolute bottom-110 left-2 opacity-10 animate-pulse">
                <i className="fas fa-laptop-code text-8xl"></i>
              </div>

              
              {/* Animated Title */}
              <div className="h-10 sm:h-12 overflow-hidden">
                <h2 
                  className="text-xl sm:text-2xl font-bold transition-transform duration-500 ease-in-out"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    transform: `translateY(-${currentTitle * 100}%)`
                  }}
                >
                  {titles.map((title, index) => (
                    <div key={index} className="h-10 sm:h-12 flex items-center justify-center">
                      {title}
                    </div>
                  ))}
                </h2>
              </div>
            </div>

            <p 
              className={`text-base sm:text-lg mb-6 leading-relaxed text-center transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              I am a passionate <span className="font-semibold text-blue-500">Backend Engineer</span> with a strong focus on building scalable systems, designing robust APIs, and optimizing data workflows. 
              Creative and detail-oriented, I enjoy solving complex engineering problems and <span className="italic">writing</span> about technology, best practices, and ideas that I find impactful.
            </p>

            {/* Social Links */}
            <div className={`flex gap-6 mb-6 justify-center transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="https://www.linkedin.com/in/philip-daudu/" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-500`} 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
              <a 
                href="https://github.com/Philip-D21" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-gray-600`} 
                aria-label="GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <i className="fab fa-github fa-2x"></i>
            </a>
              <a 
                href="https://x.com/philip_d21" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-400`} 
                aria-label="Twitter" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>

            {/* CTA Button */}
            <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="mailto:philiplekan88@gmail.com" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Let's Build Together
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Split Left/Right */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:min-h-full lg:gap-16 xl:gap-24">
          
          {/* Left Side - Photo and Name */}
          <div className={`flex-shrink-0 flex flex-col items-center transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Photo */}
            <div className="mb-8">
              <div className="relative group">
                {/* Decorative Background */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Photo Container */}
                <div className="relative">
                  <img 
                    src="/image/headshot.jpeg" 
                    alt="Philip Daudu" 
                    className="w-80 h-80 xl:w-96 xl:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <span className="font-bold text-sm">Available for work!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-4xl xl:text-5xl font-light mb-3 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Philip <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Daudu</span>
              </h1>
              
              {/* Animated Title */}
              <div className="h-12 xl:h-14 overflow-hidden">
                <h2 
                  className="text-xl xl:text-2xl font-bold transition-transform duration-500 ease-in-out"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    transform: `translateY(-${currentTitle * 100}%)`
                  }}
                >
                  {titles.map((title, index) => (
                    <div key={index} className="h-12 xl:h-14 flex items-center justify-center">
                      {title}
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`flex-1 max-w-2xl transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Description */}
            <p 
              className={`text-xl xl:text-2xl mb-6 leading-relaxed transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              I am a passionate <span className="font-semibold text-blue-500">Backend Engineer</span> with a strong focus on building scalable systems, designing robust APIs, and optimizing data workflows. 
              Creative and detail-oriented, I enjoy solving complex engineering problems and <span className="italic">writing</span> about technology, best practices, and ideas that I find impactful.
            </p>

            {/* Social Links */}
            <div className={`flex gap-10 mb-10 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="https://www.linkedin.com/in/philip-daudu/" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-500`} 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a 
                href="https://github.com/Philip-D21" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-gray-600`} 
                aria-label="GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a 
                href="https://x.com/philip_d21" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-400`} 
                aria-label="Twitter" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-3x"></i>
              </a>
            </div>

            {/* CTA Button */}
            <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="mailto:philiplekan88@gmail.com" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Let's Build Together
                <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
        </div>

        {/* Floating Elements */}
     
      </main>
    </div>
  );
}

export default Home; 