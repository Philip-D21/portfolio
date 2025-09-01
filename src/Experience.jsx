import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

function Experience() {
  const { colors } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      period: "04/2024 - 07/2025",
      position: "Backend Developer",
      company: "Scalelab",
      location: "Lagos, Nigeria",
      highlights: [
        "Supported backend engineering efforts across 4 NestJS-based microservices",
        "Designed and developed entire backend system for e-commerce creative bank application",
        "Implemented payment gateway integration (Flutterwave, Paystack) and secure user operations",
        "Built RabbitMQ messaging queues for asynchronous event-driven workflows",
        "Contributed to 70+ pull requests across codebases with bug fixes and feature enhancements",
        "Used Redis for caching and rate-limiting strategies, improving API performance"
      ]
    },
    {
      id: 2,
      period: "01/2024 - 02/2025",
      position: "Backend Developer",
      company: "Blueroom Care",
      location: "",
      highlights: [
        "Engineered backend services for patients and therapists ratings",
        "Integrated push notification support for real-time     patient-therapist communication",
        "Resolved critical bugs across production environments",
        "Optimized database queries and backend workflows for improved performance"
      ]
    },
    // {
    //   id: 3,
    //   period: "05/2023 - 06/2024",
    //   position: "Backend Developer",
    //   company: "Fredacom Data Services",
    //   location: "",
    //   highlights: [
    //     "Determined backend development tech stack and relational database architecture",
    //     "Collaborated with front-end developers on landing-page and corporate blog development",
    //     "Built reusable code and libraries for data bank and publishing systems",
    //     "Integrated third-party authentication providers using OAuth",
    //     "Provided technical opinions on features, design systems and architectures"
    //   ]
    // },
    // {
    //   id: 4,
    //   period: "07/2022 - 03/2023",
    //   position: "Backend Developer",
    //   company: "Axios Technologies",
    //   location: "",
    //   highlights: [
    //     "Built server-side components for mobile and web applications",
    //     "Implemented referral systems to track and incentivize user growth",
    //     "Ensured optimal database performance and front-end responsiveness",
    //     "Structured documentation on NodeJS processes and database schemas",
    //     "Implemented email notifications using Node Mailer"
    //   ]
    // }
  ];

  return (
    <div className="flex flex-col h-full relative">
      <main className="flex-1 w-full px-4 sm:px-6 pt-4 overflow-y-auto">
        {/* Header Section */}
        <div className={`mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl font-light mb-4 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="font-extrabold">Experience</span>
          </h1>
          <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-3xl mb-8`} style={{ fontFamily: 'Roboto Slab, serif' }}>
            My professional journey in software development and building scalable solutions.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : `${colors.button} hover:shadow-md`
              }`}
            >
              All Experience
            </button>
            <button
              onClick={() => setActiveFilter('projects')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'projects'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : `${colors.button} hover:shadow-md`
              }`}
            >
              Featured Projects
            </button>
          </div>
        </div>

        {/* Work Experience Section */}
        {(activeFilter === 'all') && (
          <div className={`space-y-8 md:space-y-12 mb-16 transform transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Professional Experience
            </h2>
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`${colors.border} border-b pb-8 last:border-b-0 cursor-pointer group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg hover:${colors.bgSecondary} p-6`}
                onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight group-hover:text-blue-500 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {exp.position}
                    </h3>
                    <div className={`flex flex-col sm:flex-row sm:items-center gap-2 text-lg ${colors.textSecondary}`}>
                      <span className="font-semibold">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className={`hidden sm:inline ${colors.textMuted}`}>•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={`text-lg ${colors.textSecondary} font-medium sm:text-right flex items-center gap-2`}>
                    {exp.period}
                    <i className={`fas fa-chevron-${selectedExperience === exp.id ? 'up' : 'down'} transition-transform duration-300`}></i>
                  </div>
                </div>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${selectedExperience === exp.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid gap-3 text-base sm:text-lg leading-relaxed pt-4" style={{ fontFamily: 'Roboto Slab, serif' }}>
                    {exp.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                        <span className="text-blue-500 mt-2 text-sm">▶</span>
                        <span className={colors.textSecondary}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Projects Section */}
        {(activeFilter === 'projects' || activeFilter === 'all') && (
          <div className={`transform transition-all duration-500 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`group ${colors.border} border rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:${colors.bgSecondary} relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 text-6xl flex items-center justify-center">
                    {project.icon}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{project.icon}</span>
                      <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.title}
                      </h3>
                    </div>

                    <p className={`${colors.textSecondary} mb-4 leading-relaxed`} style={{ fontFamily: 'Roboto Slab, serif' }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Key Features:</h4>
                      <div className="grid gap-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                            <span className={colors.textSecondary}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                        <i className="fas fa-external-link-alt"></i>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Let's Build Something Amazing Together
            </h3>
            <p className={`${colors.textSecondary} text-lg mb-6`} style={{ fontFamily: 'Roboto Slab, serif' }}>
              Interested in collaborating? I'm always excited to work on innovative projects and solve complex challenges.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-6">
              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:philiplekan88@gmail.com?subject=Let's Collaborate on a Project&body=Hi Philip,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing potential collaboration opportunities.%0D%0A%0D%0ABest regards,"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Start a Conversation
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
                
                <a 
                  href="/Philip Daudu Backend.pdf"
                  download="Philip_Daudu_CV.pdf"
                  className="inline-flex items-center gap-3 bg-white text-gray-800 border-2 border-gray-300 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <i className="fas fa-download text-lg"></i>
                  Download CV
                </a>
              </div>

              {/* Additional Contact Options */}
              <div className="flex flex-wrap gap-3 justify-center items-center">
                <span className={`text-sm ${colors.textMuted} mr-2`}>Or connect with me on:</span>
                
                <a 
                  href="https://www.linkedin.com/in/philip-daudu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium"
                >
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                
                <a 
                  href="https://github.com/Philip-D21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm font-medium"
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                
                <a 
                  href="https://x.com/philip_d21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
                >
                  <i className="fab fa-twitter"></i>
                  Twitter
                </a>

                <a 
                  href="https://wa.me/message/2347013164779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 text-sm font-medium"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp
                </a>
              </div>

              {/* Quick Contact Options */}
              <div className="text-center">
                <p className={`text-sm ${colors.textMuted} mb-3`}>
                  <i className="fas fa-clock mr-2"></i>
                  I typically respond within 24 hours
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <span className={`${colors.textSecondary} flex items-center gap-2`}>
                    <i className="fas fa-envelope"></i>
                    philiplekan88@gmail.com
                  </span>
                  <span className={`${colors.textSecondary} flex items-center gap-2`}>
                    <i className="fas fa-map-marker-alt"></i>
                    Lagos, Nigeria
                  </span>
                  <span className={`${colors.textSecondary} flex items-center gap-2`}>
                    <i className="fas fa-globe"></i>
                    Available for remote work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Background Elements
        <div className="absolute top-20 right-10 opacity-10 animate-bounce pointer-events-none">
          <i className="fas fa-code text-6xl"></i>
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-pulse pointer-events-none">
          <i className="fas fa-laptop-code text-8xl"></i>
        </div> */}
      </main>
    </div>
  );
}

export default Experience; 