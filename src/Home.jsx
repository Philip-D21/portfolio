import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useLocation } from 'react-router-dom';

function Home() {
  const { colors } = useTheme();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const titles = [
    "Backend Engineer",
    "API Architect", 
    "System Designer",
    "Problem Solver"
  ];

  // Scroll to section based on route
  useEffect(() => {
    if (location.pathname === '/experience') {
      document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/blog') {
      document.getElementById('blog-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/') {
      document.getElementById('home-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Experience and Blog data
  const projects = [
    {
      id: 'visa-app',
      title: 'Visa Booking Application',
      description: 'A comprehensive visa application booking system with user and admin panels',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
      features: [
        'User registration and authentication',
        'Admin dashboard for managing applications',
        'Document upload and verification',
        'Real-time application tracking',
        'Payment integration'
      ],
      githubUrl: 'https://github.com/Philip-D21/visa-app',
      icon: '🛂',
      category: 'fullstack'
    },
    {
      id: 'whatsapp-bot',
      title: 'WhatsApp Birthday Bot',
      description: 'Automated WhatsApp bot that sends birthday wishes using cron jobs',
      technologies: ['Node.js', 'WhatsApp API', 'Cron Jobs', 'JSON'],
      features: [
        'Automated daily birthday checks',
        'Personalized birthday messages',
        'Group tagging functionality',
        'QR code authentication',
        'Persistent session management'
      ],
      githubUrl: 'https://github.com/Philip-D21/whatsapp_birthday_bot',
      icon: '🎂',
      category: 'automation'
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "Backend Engineering Consultant",
      position: "Freelance",
      duration: "2023 - Present",
      location: "Remote",
      type: "Contract",
      description: "Specialized in designing and implementing scalable backend solutions for various clients across different industries.",
      highlights: [
        "Built RESTful APIs and microservices architecture",
        "Implemented real-time features using WebSockets",
        "Optimized database performance and query efficiency",
        "Deployed applications using Docker and cloud platforms"
      ],
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
      color: "from-blue-500 to-purple-600"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Push Notification with Firebase & NestJS",
      platform: "Dev.to",
      url: "https://dev.to/philipd21/push-notification-with-firebase-nestjs-1n58",
      description: "This article describes the integration and implementation of Firebase Cloud Messaging (FCM) push notifications within the backend service, built using NestJS. Learn how to set up real-time notifications for web, Android, and iOS applications.",
      date: "2025",
      readTime: "8 min read",
      tags: ["Firebase", "NestJS", "Push Notifications", "Backend"],
      platformIcon: "fab fa-dev",
      platformColor: "text-green-600",
      likes: "45",
      views: "1.2k"
    },
    {
      id: 2,
      title: "The Developer's Journey: From Just Getting It to Work to Truly Understanding Why It Works",
      platform: "Medium",
      url: "https://medium.com/@dauduphilip/the-developers-journey-from-just-getting-it-to-work-to-truly-understanding-why-it-works-6f95a695e237",
      description: "A deep dive into the evolution of a developer's mindset - from simply making code work to understanding the underlying principles, best practices, and architectural decisions that make software truly great.",
      date: "2024",
      readTime: "6 min read",
      tags: ["Software Development", "Learning", "Best Practices", "Mindset"],
      platformIcon: "fab fa-medium",
      platformColor: "text-gray-800",
      likes: "87",
      views: "2.1k"
    }
  ];

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesPlatform = selectedPlatform === 'all' || article.platform.toLowerCase() === selectedPlatform.toLowerCase();
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesPlatform && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8">

        {/* Mobile/Tablet Layout - Image First */}
        <div className="lg:hidden flex flex-col items-center max-w-4xl mx-auto">
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
                  className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="font-bold text-xs">Available for work!</span>
                </div>
              </div>
            </div>
          </div>

      
          {/* Content below for mobile */}
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
              <div className="h-8 xs:h-10 sm:h-12 md:h-14 overflow-hidden">
                <h2 
                  className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold transition-transform duration-500 ease-in-out"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    transform: `translateY(-${currentTitle * 100}%)`
                  }}
                >
                  {titles.map((title, index) => (
                    <div key={index} className="h-8 xs:h-10 sm:h-12 md:h-14 flex items-center justify-center">
                      {title}
                    </div>
                  ))}
                </h2>
              </div>
                          </div>

            {/* Description Text */}
            <p 
              className={`text-sm xs:text-base sm:text-lg md:text-xl mb-0 leading-relaxed text-center px-2 sm:px-4 md:px-8 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              I am a passionate <span className="font-semibold text-blue-500">Backend Engineer</span> with a strong focus on building scalable systems, designing robust APIs, and optimizing data workflows. 
              Creative and detail-oriented, I enjoy solving complex engineering problems and <span className="italic">writing</span> about technology, best practices, and ideas that I find impactful.
            </p>

            {/* Social Links */}
            <div
              className={`flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 pt-3 sm:pt-4 transform transition-all duration-1000 delay-500 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/philip-daudu/"
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-500`}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl md:text-3xl"></i>
              </a>
              <a
                href="https://github.com/Philip-D21"
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-gray-600`}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-xl sm:text-2xl md:text-3xl"></i>
              </a>
              <a
                href="https://x.com/philip_d21"
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-400`}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl sm:text-2xl md:text-3xl"></i>
              </a>
            </div>


            {/* CTA Button */}
            <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="mailto:philiplekan88@gmail.com" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Let's Build Together
                <i className="fas fa-arrow-right ml-1 sm:ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Split Left/Right */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:min-h-full lg:gap-8 xl:gap-12 2xl:gap-16 max-w-7xl mx-auto">
          
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
                    className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <span className="font-bold text-xs lg:text-sm">Available for work!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light mb-3 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Philip <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Daudu</span>
              </h1>
              
              {/* Animated Title */}
              <div className="h-10 lg:h-12 xl:h-14 2xl:h-16 overflow-hidden">
                <h2 
                  className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold transition-transform duration-500 ease-in-out"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    transform: `translateY(-${currentTitle * 100}%)`
                  }}
                >
                  {titles.map((title, index) => (
                    <div key={index} className="h-10 lg:h-12 xl:h-14 2xl:h-16 flex items-center justify-center">
                      {title}
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`flex-1 max-w-xl lg:max-w-2xl xl:max-w-3xl transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Description */}
            <p 
              className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-0 leading-relaxed transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              style={{ fontFamily: 'Roboto Slab, serif' }}
            >
              I am a passionate <span className="font-semibold text-blue-500">Backend Engineer</span> with a strong focus on building scalable systems, designing robust APIs, and optimizing data workflows. 
              Creative and detail-oriented, I enjoy solving complex engineering problems and <span className="italic">writing</span> about technology, best practices, and ideas that I find impactful.
            </p>

            {/* Social Links - Directly under description */}
            <div className={`flex gap-10 justify-center lg:gap-8 xl:gap-10 mb-8 lg:mb-10 pt-3 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="https://www.linkedin.com/in/philip-daudu/" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-500`} 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-2xl lg:text-3xl xl:text-4xl"></i>
              </a>
              <a 
                href="https://github.com/Philip-D21" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-gray-600`} 
                aria-label="GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl lg:text-3xl xl:text-4xl"></i>
              </a>
              <a 
                href="https://x.com/philip_d21" 
                className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-400`} 
                aria-label="Twitter" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-2xl lg:text-3xl xl:text-4xl"></i>
              </a>
            </div>

            {/* CTA Button */}
            <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <a 
                href="mailto:philiplekan88@gmail.com" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base lg:text-lg xl:text-xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Let's Build Together
                <i className="fas fa-arrow-right ml-2 lg:ml-3"></i>
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