import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

function Blog() {
  const { colors } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  // Filter articles based on platform and search term
  const filteredArticles = articles.filter(article => {
    const matchesPlatform = selectedPlatform === 'all' || article.platform.toLowerCase() === selectedPlatform.toLowerCase();
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesPlatform && matchesSearch;
  });

  const platforms = ['all', ...new Set(articles.map(article => article.platform))];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <main className="flex-1 w-full px-4 sm:px-6 pt-4 overflow-y-auto">
        {/* Header Section */}
        <div className={`mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl font-light mb-4 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="font-extrabold">Blog</span>
          </h1>
          <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-3xl mb-8`} style={{ fontFamily: 'Roboto Slab, serif' }}>
            Thoughts, insights, and experiences from my journey in software development.
          </p>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search articles, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 ${colors.button} border-2 ${colors.border} rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200`}
                style={{ fontFamily: 'Roboto Slab, serif' }}
              />
            </div>

            {/* Platform Filter */}
            <div className="flex gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                    selectedPlatform === platform
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : `${colors.button} hover:shadow-md`
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className={`text-sm ${colors.textMuted} mb-6`}>
            Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedPlatform !== 'all' && ` on ${selectedPlatform}`}
          </div>
        </div>

        {/* Articles Grid */}
        <div className={`grid gap-8 md:gap-12 transform transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <article 
                key={article.id} 
                className={`group ${colors.border} border rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:${colors.bgSecondary} relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 text-6xl flex items-center justify-center">
                  <i className={article.platformIcon}></i>
                </div>

                <div className="relative z-10">
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <i className={`${article.platformIcon} text-xl ${article.platformColor}`}></i>
                      <span className={`text-sm ${colors.textSecondary} font-medium`}>{article.platform}</span>
                    </div>
                    <span className={`text-sm ${colors.textMuted}`}>•</span>
                    <span className={`text-sm ${colors.textSecondary}`}>{article.date}</span>
                    <span className={`text-sm ${colors.textMuted}`}>•</span>
                    <span className={`text-sm ${colors.textSecondary}`}>{article.readTime}</span>
                  </div>
                  
                  {/* Article Title */}
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-500 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {article.title}
                    </a>
                  </h2>
                  
                  {/* Article Description */}
                  <p className={`text-base sm:text-lg ${colors.textSecondary} mb-6 leading-relaxed`} style={{ fontFamily: 'Roboto Slab, serif' }}>
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                        onClick={() => setSearchTerm(tag)}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Article Stats & Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`${colors.textMuted} flex items-center gap-1`}>
                        <i className="fas fa-heart"></i>
                        {article.likes}
                      </span>
                      <span className={`${colors.textMuted} flex items-center gap-1`}>
                        <i className="fas fa-eye"></i>
                        {article.views}
                      </span>
                    </div>
                    
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Read Article
                      <i className="fas fa-external-link-alt text-sm"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                No articles found
              </h3>
              <p className={`${colors.textSecondary} mb-4`}>
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedPlatform('all');
                }}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Stay Updated with My Writing
            </h3>
            <p className={`${colors.textSecondary} text-lg mb-6`} style={{ fontFamily: 'Roboto Slab, serif' }}>
              Follow me on these platforms to get notified when I publish new articles about backend development, architecture, and software engineering.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://dev.to/philipd21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium transform hover:scale-105"
              >
                <i className="fab fa-dev text-lg"></i>
                Follow on Dev.to
              </a>
              <a 
                href="https://medium.com/@dauduphilip" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium transform hover:scale-105"
              >
                <i className="fab fa-medium text-lg"></i>
                Follow on Medium
              </a>
              <a 
                href="mailto:philiplekan88@gmail.com?subject=Blog Collaboration" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105"
              >
                <i className="fas fa-envelope text-lg"></i>
                Suggest a Topic
              </a>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 right-10 opacity-10 animate-bounce pointer-events-none">
          <i className="fas fa-pen text-6xl"></i>
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-pulse pointer-events-none">
          <i className="fas fa-book-open text-8xl"></i>
        </div>
      </main>
    </div>
  );
}

export default Blog;
