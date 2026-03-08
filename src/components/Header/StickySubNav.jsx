import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const StickySubNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past the hero section (~800px)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] bg-white shadow-md z-[45] flex items-center px-6 md:px-12 animate-fade-in border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">

        {/* Left Side: Product Name */}
        <h2 className="text-[18px] md:text-[20px] font-bold text-black tracking-tight font-['SamsungOne']">
          {t('hero', 'title')}
        </h2>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[14px] font-bold text-black hover:text-[#1428a0] transition-colors relative after:content-[''] after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-[2px] after:bg-black">
            {t('nav', 'features') || 'Features'}
          </a>
          <a href="#compare" className="text-[14px] font-bold text-gray-500 hover:text-black transition-colors">
            {t('nav', 'compare') || 'Compare'}
          </a>
          <a href="#offers" className="text-[14px] font-bold text-gray-500 hover:text-black transition-colors">
            {t('nav', 'offers') || 'Offers'}
          </a>
        </nav>

        {/* Right Side: CTA Button & Price */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[12px] text-gray-500">From $1,299.99</span>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full text-[14px] font-bold hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg active:scale-95">
            {t('hero', 'preorder')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickySubNav;
