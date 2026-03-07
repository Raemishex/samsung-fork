import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const storyCards = [
  {
    id: 1,
    title: 'Unpacked Replay',
    img: '/images/HOME_Explore-Card_Unpacked-Replay_PC_312x312.jpg',
    href: 'https://www.samsung.com/us/unpacked/',
  },
  {
    id: 2,
    title: 'Galaxy AI',
    img: '/images/HOME_Explore-Card_Galaxy-AI_PC_312x312.jpg',
    href: 'https://www.samsung.com/us/smartphones/galaxy-ai/',
  },
  {
    id: 3,
    title: 'One UI',
    img: '/images/HOME_Explore-Card_One-UI_PC_312x312.jpg',
    href: 'https://www.samsung.com/us/mobile/one-ui/',
  },
  {
    id: 4,
    title: 'Switch to Galaxy',
    img: '/images/HOME_Explore-Card_Switch-to-Galaxy_PC_312x312.jpg',
    href: 'https://www.samsung.com/us/smartphones/switch-to-galaxy/',
  },
  {
    id: 5,
    title: 'Buy Direct Get More',
    img: '/images/Home_Explore_Buydirect_PC_312x312.jpg',
    href: 'https://www.samsung.com/us/shop/best-deals/',
  },
]

const ExploreSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const scrollRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Sürüşmə baş verdikcə progress-i hesabla
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const maxScroll = scrollWidth - clientWidth
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      setScrollProgress(progress)
    }
  }

  // Pəncərə ölçüsü dəyişəndə də progress-i yoxla
  useEffect(() => {
    let timeoutId;
    const initialHandleScroll = () => {
      timeoutId = setTimeout(handleScroll, 0);
    };
    initialHandleScroll();
    window.addEventListener('resize', handleScroll)
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={ref} 
      className="bg-white py-16 md:py-24 overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Başlıq */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#1d1d1d] tracking-tight">
            Explore the Stories
          </h2>
        </div>

        {/* Carousel / Slider */}
        <motion.div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {storyCards.map((card, index) => (
            <motion.div
              key={card.id} 
              className="snap-start flex-shrink-0 w-[240px] md:w-[280px] lg:w-[312px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.a
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Şəkil */}
                <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-[#f4f4f4] mb-4 relative shadow-md group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={card.img} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay for depth on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Altından Yazı */}
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#1d1d1d] group-hover:text-[#1428a0] transition-colors duration-300 pl-2">
                  {card.title}
                </h3>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation - Scroll Indicator & Arrows */}
        <div className="flex items-center justify-center gap-6 mt-4">
          
          {/* Progress Bar (Aktiv hissə qaralır) */}
          <div className="w-[120px] md:w-[200px] h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-[#1d1d1d] rounded-full"
              style={{ 
                width: '30%', /* Sliderin uzunluğu */
                transform: `translateX(${(scrollProgress / 100) * 233}%)`, /* % nəzərə alınaraq hərəkət */
                transition: 'transform 0.1s ease-out'
              }}
            ></div>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
              aria-label="Previous slide"
              disabled={scrollProgress <= 1}
              style={{ opacity: scrollProgress <= 1 ? 0.3 : 1 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
              aria-label="Next slide"
              disabled={scrollProgress >= 99}
              style={{ opacity: scrollProgress >= 99 ? 0.3 : 1 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>

      </div>
      
      {/* Scrollbar-ı gizlətmək üçün kiçik CSS inyeksiya */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  )
}

export default ExploreSection
