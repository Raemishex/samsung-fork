import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const { t } = useLanguage();

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => setIsDragging(false));
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', () => setIsDragging(false));
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <section className="py-24 bg-white overflow-hidden" id="compare">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-black mb-6 font-['SamsungOne'] tracking-tight"
          >
            {t('compare', 'title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('compare', 'description')}
          </motion.p>
        </div>

        {/* Slider Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Base Image (After) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-provisual-engine-after.jpg")'
            }}
          >
            <span className="absolute bottom-6 right-6 text-white font-bold text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              With ProVisual Engine
            </span>
          </div>

          {/* Overlay Image (Before) */}
          <div
            className="absolute inset-0 bg-cover bg-center border-r-[3px] border-white shadow-[2px_0_15px_rgba(0,0,0,0.5)]"
            style={{
              backgroundImage: 'url("https://images.samsung.com/is/image/samsung/assets/us/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-provisual-engine-before.jpg")',
              width: `${sliderPosition}%`
            }}
          >
             <span className="absolute bottom-6 left-6 text-white font-bold text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm whitespace-nowrap">
              Without ProVisual Engine
            </span>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center -ml-[20px] w-[40px]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-[40px] h-[40px] bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.4)] flex items-center justify-center pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <polyline points="15 18 9 12 15 6"></polyline>
                <polyline points="9 18 15 12 9 6" className="opacity-0"></polyline>
                <line x1="12" y1="4" x2="12" y2="20"></line>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
