import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import SEO from './SEO';

function Birthday() {
  const { colors } = useTheme();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('philipBirthdayMessages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error loading messages:', error);
        setMessages([]);
      }
    }
  }, []);
 
  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem('philipBirthdayMessages', JSON.stringify(messages));
      } catch (error) {
        console.error('Error saving messages:', error);
      }
    }
  }, [messages]);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const message = {
        id: Date.now(),
        text: newMessage.trim(),
        sender: senderName.trim() || 'Anonymous Friend',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        })
      };

      setMessages(prev => [message, ...prev]);
      setNewMessage('');
      setSenderName('');
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full relative">
      <SEO 
        title="Birthday Messages for Philip Daudu - September 11th 🎂"
        description="Share a sweet anonymous birthday message for Philip Daudu! Join friends and colleagues in celebrating his special day on September 11th."
        keywords="Philip Daudu Birthday, September 11, Birthday Messages, Anonymous Messages, Birthday Wishes"
        url="https://philipd.vercel.app/birthday"
      />
      
      <main className="flex-1 w-full px-4 sm:px-6 pt-4 overflow-y-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-6">
            <span className="text-6xl">🎂</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Birthday Messages
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-3xl mx-auto mb-4`} style={{ fontFamily: 'Inter, sans-serif' }}>
            Celebrating Philip's Special Day - September 11th 🎉
          </p>
          
          <div className="flex items-center justify-center gap-2 text-2xl mb-8">
            <span>✨</span>
            <span>❤️</span>
            <span>🎁</span>
            <span>⭐</span>
          </div>
        </div>
        
        {/* Message Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className={`${colors.bgCard} rounded-2xl p-8 shadow-xl border`}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              ❤️ Share a Birthday Message
            </h2>
            
            <form onSubmit={handleSubmitMessage} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${colors.textSecondary} mb-2`}>
                  Your Name (Optional - Leave blank to stay anonymous)
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Anonymous Friend"
                  className={`w-full px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} ${colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${colors.textSecondary} mb-2`}>
                  Your Birthday Message for Philip ✨
                </label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Happy Birthday Philip! Hope your special day is filled with joy and happiness... 🎂"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} ${colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !newMessage.trim()}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting || !newMessage.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    🎁 Send Birthday Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-4 right-4 z-50">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              ❤️
              <span className="font-semibold">Message sent! 🎉</span>
            </div>
          </div>
        )}

        {/* Messages Display */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            ✨ Birthday Messages ({messages.length})
          </h2>
          
          {messages.length === 0 ? (
            <div className={`text-center py-12 ${colors.textSecondary}`}>
              <div className="text-6xl mb-4">🎂</div>
              <p className="text-xl">Be the first to share a birthday message! 🎂</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${colors.bgCard} rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {message.sender.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{message.sender}</h3>
                      <p className={`text-sm ${colors.textSecondary}`}>{message.date}</p>
                    </div>
                    <span>❤️</span>
                  </div>
                  
                  <p className={`${colors.text} leading-relaxed mb-4`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {message.text}
                  </p>
                  
                  <div className="flex justify-end">
                    <span className="text-2xl">🎉</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center py-12">
          <div className="flex justify-center gap-4 text-4xl mb-4">
            <span>🎂</span>
            <span>🎉</span>
            <span>🎁</span>
            <span>🎈</span>
            <span>🌟</span>
            <span>💝</span>
            <span>🎊</span>
            <span>🥳</span>
          </div>
          <p className={`text-lg ${colors.textSecondary}`} style={{ fontFamily: 'Inter, sans-serif' }}>
            Thank you for making Philip's birthday special! 💝
          </p>
        </div>
      </main>
    </div>
  );
}

export default Birthday;