import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';

function Home() {
  const { colors } = useTheme();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
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

  // Data
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
      icon: '🛂'
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
      icon: '🎂'
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
        "Built RESTful APIs and systems architecture",
        "Implemented push notification using Firebase and NestJS",
        "Optimized database performance and query efficiency",
        "Deployment with Docker and cloud services (AWS, GCP, etc.)"
      ],
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS", 'Firebase', 'NestJS']
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
    <div className="h-full overflow-y-auto scroll-smooth">
      <SEO 
        title="Philip Daudu - Backend Engineer & Full-Stack Developer | Home"
        description="Welcome to Philip Daudu's portfolio. Passionate Backend Engineer specializing in scalable systems, robust APIs, and optimized data workflows. Explore my projects, experience, and technical blog."
        keywords="Philip Daudu, Backend Engineer, Full-Stack Developer, Portfolio, Python, Node.js, API Development, Cloud Computing, Software Engineer"
        url="https://philipd.dev/"
      />
      {/* HOME SECTION */}
      <section id="home-section" className="min-h-screen flex flex-col justify-center relative">
        <div className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8">
          
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center max-w-4xl mx-auto">
            <div className={`mb-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative">
                  <img src="/image/headshot.jpeg" alt="Philip Daudu" className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300" />
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <span className="font-bold text-xs">Available for work!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="mb-6">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Philip <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Daudu</span>
                </h1>
                <div className="h-8 xs:h-10 sm:h-12 md:h-14 overflow-hidden">
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold transition-transform duration-500 ease-in-out" style={{ fontFamily: 'Montserrat, sans-serif', transform: `translateY(-${currentTitle * 100}%)` }}>
                    {titles.map((title, index) => (
                      <div key={index} className="h-8 xs:h-10 sm:h-12 md:h-14 flex items-center justify-center">
                        {title}
                      </div>
                    ))}
                  </h2>
                </div>
              </div>

              <p className={`text-sm xs:text-base sm:text-lg md:text-xl mb-0 leading-relaxed text-center px-2 sm:px-4 md:px-8 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                I am a passionate <span className="font-semibold text-blue-500">Backend Engineer</span> with a strong focus on building scalable systems, designing robust APIs, and optimizing data workflows. 
                Creative and detail-oriented, I enjoy solving complex engineering problems and <span className="italic">writing</span> about technology, best practices, and ideas that I find impactful.
              </p>

              <div className={`flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 pt-3 sm:pt-4 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                <a href="https://www.linkedin.com/in/philip-daudu/" className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-500`} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-xl sm:text-2xl md:text-3xl"></i>
                </a>
                <a href="https://github.com/Philip-D21" className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-gray-600`} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-xl sm:text-2xl md:text-3xl"></i>
                </a>
                <a href="https://x.com/philip_d21" className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-400`} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-xl sm:text-2xl md:text-3xl"></i>
                </a>
              </div>

              <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <a href="mailto:philiplekan88@gmail.com" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Let's Build Together
                  <i className="fas fa-arrow-right ml-1 sm:ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:min-h-full lg:gap-8 xl:gap-12 2xl:gap-16 max-w-7xl mx-auto">
            <div className={`flex-shrink-0 flex flex-col items-center transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="mb-8">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative">
                    <img src="/image/headshot.jpeg" alt="Philip Daudu" className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300" />
                    <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                      <span className="font-bold text-xs lg:text-sm">Available for work!</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light mb-3 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Philip <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Daudu</span>
                </h1>
                <div className="h-10 lg:h-12 xl:h-14 2xl:h-16 overflow-hidden">
                  <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold transition-transform duration-500 ease-in-out" style={{ fontFamily: 'Montserrat, sans-serif', transform: `translateY(-${currentTitle * 100}%)` }}>
                    {titles.map((title, index) => (
                      <div key={index} className="h-10 lg:h-12 xl:h-14 2xl:h-16 flex items-center justify-center">
                        {title}
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            </div>

            <div className={`flex-1 max-w-xl lg:max-w-2xl xl:max-w-3xl transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <p className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-0 leading-relaxed transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                I am a passionate <span className="font-semibold text-blue-500">Backend Engineer</span> with a strong focus on building scalable systems, designing robust APIs, and optimizing data workflows. 
                Creative and detail-oriented, I enjoy solving complex engineering problems and <span className="italic">writing</span> about technology, best practices, and ideas that I find impactful.
              </p>

              <div className={`flex gap-10 justify-center lg:gap-8 xl:gap-10 mb-8 lg:mb-10 pt-3 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <a href="https://www.linkedin.com/in/philip-daudu/" className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-500`} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-2xl lg:text-3xl xl:text-4xl"></i>
                </a>
                <a href="https://github.com/Philip-D21" className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-gray-600`} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-2xl lg:text-3xl xl:text-4xl"></i>
                </a>
                <a href="https://x.com/philip_d21" className={`${colors.social} transform hover:scale-110 transition-all duration-300 hover:text-blue-400`} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-2xl lg:text-3xl xl:text-4xl"></i>
                </a>
              </div>

              <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <a href="mailto:philiplekan88@gmail.com" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base lg:text-lg xl:text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Let's Build Together
                  <i className="fas fa-arrow-right ml-2 lg:ml-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience-section" className="min-h-screen py-20">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Experience & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg ${colors.textMuted} text-center mb-12 max-w-3xl mx-auto`}>
            A showcase of my professional journey and the projects I've built
          </p>

          <div className="flex justify-center mb-12">
            <div className={`inline-flex rounded-lg p-1 ${colors.bgSecondary}`}>
              <button onClick={() => setActiveFilter('all')} className={`px-6 py-2 rounded-md transition-all duration-200 ${activeFilter === 'all' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : `${colors.text} hover:${colors.bgTertiary}`}`}>
                All Experience
              </button>
              <button onClick={() => setActiveFilter('projects')} className={`px-6 py-2 rounded-md transition-all duration-200 ${activeFilter === 'projects' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : `${colors.text} hover:${colors.bgTertiary}`}`}>
                Featured Projects
              </button>
            </div>
          </div>

          {(activeFilter === 'all' || activeFilter === 'experience') && (
            <div className="mb-16">
              {experiences.map((exp) => (
                <div key={exp.id} className={`${colors.cardBg} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 mb-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                      <p className="text-xl text-blue-500 mb-2">{exp.position}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>📅 {exp.duration}</span>
                        <span>📍 {exp.location}</span>
                        <span>💼 {exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`${colors.textMuted} mb-6 leading-relaxed`}>{exp.description}</p>
                  
                  <div className="grid gap-4 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={colors.text}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className={`px-3 py-1 ${colors.bgSecondary} ${colors.text} rounded-full text-sm font-medium`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {(activeFilter === 'all' || activeFilter === 'projects') && (
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <div key={project.id} className={`${colors.cardBg} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{project.icon}</span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className={`${colors.textMuted} mb-6 leading-relaxed`}>{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className={`text-sm ${colors.textMuted}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={`px-3 py-1 ${colors.bgSecondary} ${colors.text} rounded-full text-sm font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <i className="fab fa-github"></i>
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <a href="/Philip Daudu Backend.pdf" download="Philip_Daudu_CV.pdf" className={`${colors.cardBg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📄</div>
                <h3 className="text-xl font-bold mb-2">Download CV</h3>
                <p className={`${colors.textMuted} mb-4`}>Get my complete professional profile</p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                  <i className="fas fa-download"></i>
                  Download PDF
                </div>
              </a>

              <div className={`${colors.cardBg} rounded-2xl p-8 shadow-lg`}>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">Start a Conversation</h3>
                <p className={`${colors.textMuted} mb-6`}>Let's discuss your next project</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a href="https://www.linkedin.com/in/philip-daudu/" target="_blank" rel="noopener noreferrer" className={`${colors.bgSecondary} ${colors.text} px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 text-center`}>
                    <i className="fab fa-linkedin mr-2"></i>LinkedIn
                  </a>
                  <a href="https://github.com/Philip-D21" target="_blank" rel="noopener noreferrer" className={`${colors.bgSecondary} ${colors.text} px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 text-center`}>
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <a href="https://x.com/philip_d21" target="_blank" rel="noopener noreferrer" className={`${colors.bgSecondary} ${colors.text} px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-center`}>
                    <i className="fab fa-twitter mr-2"></i>Twitter
                  </a>
                  <a href="https://wa.me/message/IXQP3JN4JFTNL1" target="_blank" rel="noopener noreferrer" className={`${colors.bgSecondary} ${colors.text} px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 text-center`}>
                    <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                  </a>
                </div>

                <a href="mailto:philiplekan88@gmail.com?subject=Project Collaboration&body=Hi Philip, I'd like to discuss a potential project opportunity..." className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block">
                  <i className="fas fa-envelope mr-2"></i>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog-section" className="min-h-screen py-20">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Blog & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className={`text-lg ${colors.textMuted} text-center mb-12 max-w-3xl mx-auto`}>
            Insights, tutorials, and thoughts on backend development, system design, and technology trends
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <i className={`fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 ${colors.textMuted}`}></i>
              <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`w-full pl-12 pr-4 py-3 ${colors.inputBg} ${colors.text} border ${colors.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`} />
            </div>
            
            <div className="flex gap-2">
              {['all', 'dev.to', 'medium'].map((platform) => (
                <button key={platform} onClick={() => setSelectedPlatform(platform)} className={`px-4 py-3 rounded-lg transition-all duration-200 ${selectedPlatform === platform ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : `${colors.bgSecondary} ${colors.text} hover:${colors.bgTertiary}`}`}>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mb-8">
            <p className={`${colors.textMuted}`}>
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <article key={article.id} className={`${colors.cardBg} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <i className={`${article.platformIcon} text-xl ${article.platformColor}`}></i>
                      <span className={`text-sm font-medium ${colors.textMuted}`}>{article.platform}</span>
                    </div>
                    <span className={`text-sm ${colors.textMuted}`}>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className={`${colors.textMuted} mb-6 leading-relaxed`}>
                    {article.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, idx) => (
                      <button key={idx} onClick={() => setSearchTerm(tag)} className={`px-3 py-1 ${colors.bgSecondary} ${colors.text} rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300`}>
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm">
                      <span className={colors.textMuted}>
                        <i className="fas fa-clock mr-1"></i>
                        {article.readTime}
                      </span>
                      <span className={colors.textMuted}>
                        <i className="fas fa-heart mr-1"></i>
                        {article.likes}
                      </span>
                      <span className={colors.textMuted}>
                        <i className="fas fa-eye mr-1"></i>
                        {article.views}
                      </span>
                    </div>
                  </div>
                  
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Read Article
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className={`${colors.textMuted} mb-6`}>
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button onClick={() => { setSearchTerm(''); setSelectedPlatform('all'); }} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Clear Filters
              </button>
            </div>
          )}

          <div className={`${colors.cardBg} rounded-2xl p-8 mt-16 text-center shadow-xl`}>
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold mb-4">Stay Updated with My Writing</h3>
            <p className={`${colors.textMuted} mb-8 max-w-2xl mx-auto`}>
              Follow me on these platforms to get notified when I publish new articles about backend development, 
              system design, and emerging technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="https://dev.to/philipd21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300">
                <i className="fab fa-dev"></i>
                Follow on Dev.to
              </a>
              <a href="https://medium.com/@dauduphilip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-300">
                <i className="fab fa-medium"></i>
                Follow on Medium
              </a>
              <a href="mailto:philiplekan88@gmail.com?subject=Article Topic Suggestion&body=Hi Philip, I'd like to suggest a topic for your next article..." className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <i className="fas fa-lightbulb"></i>
                Suggest a Topic
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
