import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const recommendedProducts = [
  {
    id: 1,
    title: 'Galaxy S26 Ultra 256GB (Unlocked)',
    price: '$1299.99',
    img: '/images/us-galaxy-s26-ultra-s948-sm-s948uzvaxaa-550993934.webp',
    href: 'https://www.samsung.com/us/smartphones/galaxy-s26-ultra/',
  },
  {
    id: 2,
    title: 'Galaxy Book4 Edge 16" Qualcomm Snapdragon X Elite 1TB Sapphire Blue a Copilot+ PC',
    price: '$1749.99',
    img: '/images/Galaxy_Book4_Edge_16_US_001_Front_1600x1200.jpg',
    href: 'https://www.samsung.com/us/computing/galaxy-books/galaxy-book4-edge/',
  },
  {
    id: 3,
    title: 'Galaxy Book5 360, 15.6", Intel® Core™ Ultra 7, 512GB, Gray, a Copilot+ PC',
    price: '$1349.99',
    img: '/images/SDSAC-10137-Book5_360_15_6_US_Gray-1600x1200.jpg',
    href: 'https://www.samsung.com/us/computing/galaxy-books/galaxy-book5-360/',
  },
  {
    id: 4,
    title: 'Galaxy Book4 Ultra, 16", Intel® Core™ Ultra 7, 1TB, Moonstone Gray',
    price: '$2399.99',
    img: '/images/GB4Ultra_16_US_Copilot_Moonstone-Gray_001_Front-1600x1200.jpg',
    href: 'https://www.samsung.com/us/computing/galaxy-books/galaxy-book4-ultra/',
  },
  {
    id: 5,
    title: '65" Class The Frame Pro LS03FW Neo QLED 4K Art Mode Samsung Vision AI Smart TV (2025)',
    price: '$1499.99',
    savePrice: 'Save $700',
    oldPrice: '$2199.99',
    img: '/images/us-the-frame-ls03fw-qn65ls03fwfxza-546242603.png',
    href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/',
  },
  {
    id: 6,
    title: 'Bespoke AI All-in-One Vented Combo No Load Transfer Super Speed Wash and Dry in 68min 5.3 cu.ft.',
    price: '$1999',
    savePrice: 'Save $1100',
    oldPrice: '$3099',
    img: '/images/us--wd90f53avbus-550100110.webp',
    href: 'https://www.samsung.com/us/home-appliances/washers/bespoke/',
  },
  {
    id: 7,
    title: '7.2 cu. ft. Electric Dryer with Sensor Dry in White',
    price: '$549',
    savePrice: 'Save $300',
    oldPrice: '$849',
    img: '/images/us-dryer-dve45t3200wa3-567916-dve45t3200w-a3-549531295.webp',
    href: 'https://www.samsung.com/us/home-appliances/dryers/',
  },
  {
    id: 8,
    title: 'Bespoke AI 4-Door French Door',
    price: '$2149',
    savePrice: 'Save $1350',
    oldPrice: '$3499',
    img: '/images/us-counter-depth-4-door-french-door-beverage-center-rf23bb860012aa-551015703.webp',
    href: 'https://www.samsung.com/us/home-appliances/refrigerators/bespoke/',
  },
  {
    id: 9,
    title: 'AutoRelease Smart 46dBA Dishwasher with StormWash™ in Stainless Steel',
    price: '$599',
    savePrice: 'Save $300',
    oldPrice: '$899',
    img: '/images/DW80CG5450SR_01_Stainless_Steel_SCOM.jpg',
    href: 'https://www.samsung.com/us/home-appliances/dishwashers/',
  },
  {
    id: 10,
    title: '5.4 cu. ft. Smart Top Load Washer with Pet Care Solution and Super Speed Wash in Brushed Navy',
    price: '$799',
    savePrice: 'Save $350',
    oldPrice: '$1149',
    // Fallback şəkil istifadə edirəm (Sistemdə WD ilə başlayan uyğundur)
    img: '/images/WD90F53AVB_01_Brushed_Black_SCOM.jpg',
    href: 'https://www.samsung.com/us/home-appliances/washers/top-load/',
  }
]

const RecommendedSection = () => {
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
            Recommended for you
          </h2>
        </div>

        {/* Carousel / Slider */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recommendedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="snap-start flex-shrink-0 w-[240px] md:w-[280px] lg:w-[312px] flex flex-col"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(30px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
              }}
            >
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex flex-col"
              >
                {/* Şəkil */}
                <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-[#f4f4f4] mb-4 flex items-center justify-center p-6">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Altından Yazı */}
                <h3 className="text-[14px] md:text-[16px] font-bold text-[#1d1d1d] leading-snug mb-3">
                  {product.title}
                </h3>
                
                {/* Qiymət Hissəsi */}
                <div className="mt-auto flex flex-col items-start gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] md:text-[16px] font-bold text-[#1d1d1d]">
                      {product.price}
                    </span>
                    {product.savePrice && (
                      <span className="text-[12px] md:text-[14px] font-bold text-[#0082c5]">
                        {product.savePrice}
                      </span>
                    )}
                  </div>
                  {product.oldPrice && (
                    <span className="text-[12px] md:text-[14px] text-[#888] line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Navigation - Scroll Indicator & Arrows */}
        <div className="flex items-center justify-center gap-6 mt-4">
          
          {/* Progress Bar (Aktiv hissə qaralır) */}
          <div className="w-[120px] md:w-[200px] h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-[#1d1d1d] rounded-full"
              style={{ 
                // Ölçünü data sayına görə kiçilir
                width: `${100 / Math.max(1, recommendedProducts.length - 3)}%`, 
                // Limitlənməsi üçün xüsusi hesab
                transform: `translateX(${(scrollProgress / 100) * (recommendedProducts.length > 3 ? (recommendedProducts.length - 3) * 100 : 0)}%)`, 
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
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  )
}

export default RecommendedSection
