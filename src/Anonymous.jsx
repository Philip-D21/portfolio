import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from './SEO';

function Anonymous() {
  const { colors } = useTheme();
  const { username } = useParams();
  const navigate = useNavigate();
  const [isCreatingProfile, setIsCreatingProfile] = useState(!username);
  const [profileName, setProfileName] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userMessages, setUserMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    if (username) {
      // Load messages for this user
      const savedMessages = localStorage.getItem(`anonymousMessages_${username}`);
      if (savedMessages) {
        try {
          setUserMessages(JSON.parse(savedMessages));
        } catch (error) {
          console.error('Error loading messages:', error);
          setUserMessages([]);
        }
      }
    }
  }, [username]);

  const handleCreateProfile = (e) => {
    e.preventDefault();
    if (!profileName.trim()) return;

    const cleanUsername = profileName.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const profileLink = `${window.location.origin}/anonymous/${cleanUsername}`;
    setGeneratedLink(profileLink);
    
    // Save profile to localStorage
    const profiles = JSON.parse(localStorage.getItem('anonymousProfiles') || '{}');
    profiles[cleanUsername] = {
      displayName: profileName.trim(),
      created: new Date().toISOString(),
      messageCount: 0
    };
    localStorage.setItem('anonymousProfiles', JSON.stringify(profiles));
    
    setIsCreatingProfile(false);
    navigate(`/anonymous/${cleanUsername}`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !username) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        text: message.trim(),
        sender: senderName.trim() || 'Anonymous',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        reported: false
      };

      // Save message to user's messages
      const existingMessages = JSON.parse(localStorage.getItem(`anonymousMessages_${username}`) || '[]');
      const updatedMessages = [newMessage, ...existingMessages];
      localStorage.setItem(`anonymousMessages_${username}`, JSON.stringify(updatedMessages));
      
      // Update message count in profile
      const profiles = JSON.parse(localStorage.getItem('anonymousProfiles') || '{}');
      if (profiles[username]) {
        profiles[username].messageCount = updatedMessages.length;
        localStorage.setItem('anonymousProfiles', JSON.stringify(profiles));
      }

      setUserMessages(updatedMessages);
      setMessage('');
      setSenderName('');
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleReportMessage = (messageId) => {
    const updatedMessages = userMessages.map(msg => 
      msg.id === messageId ? { ...msg, reported: true } : msg
    );
    setUserMessages(updatedMessages);
    localStorage.setItem(`anonymousMessages_${username}`, JSON.stringify(updatedMessages));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  // Get profile info
  const profiles = JSON.parse(localStorage.getItem('anonymousProfiles') || '{}');
  const currentProfile = profiles[username];

  if (isCreatingProfile) {
    return (
      <div className="flex flex-col h-full relative">
        <SEO 
          title="Create Anonymous Profile - Send Secret Messages"
          description="Create your anonymous messaging profile and receive secret messages from friends. Safe, secure, and completely anonymous."
          keywords="Anonymous Messages, Secret Messages, Anonymous Profile, Private Messages"
          url="https://philipd.vercel.app/anonymous"
        />
        
        <main className="flex-1 w-full px-4 sm:px-6 pt-4 overflow-y-auto">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Hero Section */}
            <div className={`mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6">
                <span className="text-6xl">🕵️</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Anonymous Messages
                </span>
              </h1>
              
              <p className={`text-lg sm:text-xl ${colors.textSecondary} max-w-3xl mx-auto mb-8`} style={{ fontFamily: 'Inter, sans-serif' }}>
                Create your profile and receive anonymous messages from friends, colleagues, and admirers. 
                Stay completely anonymous until you choose to reveal yourself.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className={`${colors.bgCard} p-6 rounded-xl border`}>
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-lg mb-2">100% Anonymous</h3>
                <p className={`text-sm ${colors.textSecondary}`}>Your identity stays hidden until you decide to reveal it</p>
              </div>
              <div className={`${colors.bgCard} p-6 rounded-xl border`}>
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
                <p className={`text-sm ${colors.textSecondary}`}>Report inappropriate messages and stay safe</p>
              </div>
              <div className={`${colors.bgCard} p-6 rounded-xl border`}>
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2">Easy to Use</h3>
                <p className={`text-sm ${colors.textSecondary}`}>Create your profile in seconds and start receiving messages</p>
              </div>
            </div>

            {/* Create Profile Form */}
            <div className={`${colors.bgCard} rounded-2xl p-8 shadow-xl border max-w-lg mx-auto`}>
              <h2 className="text-2xl font-bold mb-6">
                🚀 Create Your Anonymous Profile
              </h2>
              
              <form onSubmit={handleCreateProfile} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium ${colors.textSecondary} mb-2`}>
                    Choose Your Display Name
                  </label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    placeholder="Enter your name or nickname"
                    className={`w-full px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} ${colors.text} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                  />
                  <p className={`text-xs ${colors.textSecondary} mt-1`}>
                    This will be visible to people sending you messages
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={!profileName.trim()}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    !profileName.trim()
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  🎯 Create My Profile
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full relative">
      <SEO 
        title={`Send Anonymous Message to ${currentProfile?.displayName || username}`}
        description={`Send a secret anonymous message to ${currentProfile?.displayName || username}. Your identity will remain completely hidden.`}
        keywords="Anonymous Messages, Secret Messages, Send Anonymous Message"
        url={`https://philipd.vercel.app/anonymous/${username}`}
      />
      
      <main className="flex-1 w-full px-4 sm:px-6 pt-4 overflow-y-auto">
        
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-6xl">💬</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Send Anonymous Message to
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {currentProfile?.displayName || username}
          </h2>
          <p className={`${colors.textSecondary} mt-2`}>
            Your identity will remain completely anonymous
          </p>
        </div>

        {/* Send Message Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className={`${colors.bgCard} rounded-2xl p-8 shadow-xl border`}>
            <h3 className="text-xl font-bold mb-6 text-center">
              📝 Send Your Anonymous Message
            </h3>
            
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${colors.textSecondary} mb-2`}>
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your anonymous message here..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} ${colors.text} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${colors.textSecondary} mb-2`}>
                  Sign as (Optional)
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Anonymous"
                  className={`w-full px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} ${colors.text} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <p className={`text-xs ${colors.textSecondary} mt-1`}>
                  Leave blank to stay completely anonymous
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting || !message.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
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
                    🚀 Send Anonymous Message
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
              ✅
              <span className="font-semibold">Message sent anonymously! 🎉</span>
            </div>
          </div>
        )}

        {/* Share Profile Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className={`${colors.bgCard} rounded-xl p-6 border`}>
            <h3 className="font-bold text-lg mb-4">📢 Share Your Profile</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={`${window.location.origin}/anonymous/${username}`}
                readOnly
                className={`flex-1 px-3 py-2 rounded border ${colors.border} ${colors.bg} text-sm`}
              />
              <button
                onClick={() => copyToClipboard(`${window.location.origin}/anonymous/${username}`)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
              >
                📋 Copy
              </button>
            </div>
          </div>
        </div>

        {/* Messages Display */}
        {userMessages.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              💌 Anonymous Messages ({userMessages.length})
            </h3>
            
            <div className="grid gap-4">
              {userMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${colors.bgCard} rounded-lg p-4 border ${msg.reported ? 'opacity-50' : ''} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{msg.sender}</span>
                      <span className={`text-xs ${colors.textSecondary}`}>{msg.date}</span>
                    </div>
                    {!msg.reported && (
                      <button
                        onClick={() => handleReportMessage(msg.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                        title="Report message"
                      >
                        🚨 Report
                      </button>
                    )}
                  </div>
                  <p className={`${colors.text} ${msg.reported ? 'line-through' : ''}`}>
                    {msg.reported ? '[Message reported and hidden]' : msg.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Your Own Profile CTA */}
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className={`${colors.bgCard} rounded-xl p-8 border`}>
            <h3 className="text-2xl font-bold mb-4">🎯 Want Your Own Anonymous Profile?</h3>
            <p className={`${colors.textSecondary} mb-6`}>
              Create your own anonymous messaging profile and receive secret messages from your friends!
            </p>
            <button
              onClick={() => navigate('/anonymous')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🚀 Create My Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Anonymous;
