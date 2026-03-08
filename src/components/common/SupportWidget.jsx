import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  // Update initial message when language changes
  React.useEffect(() => {
    setMessages([{ text: t('supportChat', 'welcome'), isUser: false }]);
  }, [language]);

  const [messages, setMessages] = useState([
    { text: t('supportChat', 'welcome'), isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    "I'm a bot, but honestly, I'm just here for the trade-in credits.",
    "Did you try turning it off and on again? Classic.",
    "Beep boop! My circuits are currently tangled in Galaxy wires.",
    "I would help you, but I'm busy staring at the new 8K TV specs.",
    "Hold on, let me ask my AI overloads. ...They said 'Maybe'.",
    "I'm 99% sure whatever you're asking is covered by Samsung Care+.",
    "You know, an S26 Ultra would make this conversation much smoother.",
    "I'm processing your request... Wait, error 404: Motivation not found.",
    "Have you considered just staring blankly at the screen? Works for me.",
    "My code tells me to say 'I'm busy', but my heart says 'Buy a new phone'."
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate funny bot reply
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [
        ...prev,
        { text: randomResponse, isUser: false }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 left-6 z-[105] flex flex-col items-start pointer-events-none">
      {/* Tooltip / Label */}
      <div
        className={`bg-white text-black text-sm font-bold px-4 py-2 rounded-xl shadow-lg mb-2 transition-all duration-300 origin-bottom-left ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <p>{t('nav', 'support')} / Chat</p>
      </div>

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open support chat"
        className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 relative pointer-events-auto"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}

        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border-2 border-white rounded-full"></span>
        )}
      </button>

      {/* Fake Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-[300px] h-[400px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-fade-in origin-bottom-left z-[-1] pointer-events-auto">
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">{t('nav', 'support')} Chat</h3>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1 p-4 bg-gray-50 flex flex-col gap-3 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 text-sm max-w-[80%] ${
                  msg.isUser
                    ? 'bg-blue-600 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl self-end'
                    : 'bg-gray-200 text-black rounded-tr-2xl rounded-bl-2xl rounded-br-2xl self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-gray-200 text-black p-3 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-sm w-16 self-start flex gap-1 justify-center items-center h-10">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            )}
          </div>
          <div className="p-3 border-t border-gray-200 bg-white flex gap-2">
            <input
              type="text"
              placeholder={t('supportChat', 'placeholder')}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-3 py-2 bg-gray-100 rounded-xl outline-none text-sm focus:ring-1 focus:ring-black"
            />
            <button onClick={handleSend} className="bg-black text-white p-2 rounded-xl hover:bg-gray-800 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportWidget;
