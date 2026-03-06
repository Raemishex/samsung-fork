import React, { useState, useEffect, useRef } from 'react'

const HeroBanner = () => {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const videoRef = useRef(null)

  const slides = [
    {
      id: 0,
      title: 'Shop pre-order exclusive offers.',
      video: '/images/samsung-s26.mp4',
      textColor: 'text-white',
      linkBtn: { label: 'Learn more', href: 'https://www.samsung.com/us/smartphones/galaxy-s26-ultra/' },
      pillBtn: { label: 'Pre-order now', href: 'https://www.samsung.com/us/smartphones/galaxy-s/' },
      darkOverlay: true,
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  const current = slides[activeSlide]

  return (
    <section className="relative w-full overflow-hidden bg-black h-screen min-h-[560px]">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === activeSlide ? 1 : 0 }}
        >
          {/* Desktop BG */}
          {slide.video ? (
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${i === activeSlide ? scrollY * 0.25 : 0}px)`,
                transition: 'transform 0.1s linear',
              }}
            />
          ) : (
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobileBg} />
              <img
                src={slide.bg}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  transform: `translateY(${i === activeSlide ? scrollY * 0.25 : 0}px)`,
                  transition: 'transform 0.1s linear',
                  objectPosition: slide.bgPosition || 'center top',
                }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          )}
          {/* Dark overlay */}
          {slide.darkOverlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          )}
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end pb-24 md:pb-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1440px] mx-auto w-full">
          <div
            key={activeSlide}
            className={`hero-content max-w-lg ${current.textColor}`}
          >
            {/* Main Title */}
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-4 leading-[1.1] tracking-tight">
              {current.title}
            </h1>

            {/* Subtitle */}
            {current.subtitle && (
              <p className="text-base md:text-lg opacity-85 mb-6 max-w-md leading-relaxed">
                {current.subtitle}
              </p>
            )}

            {/* Samsung-style CTA: underline link + pill outline button */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={current.linkBtn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[14px] font-bold underline underline-offset-4 decoration-1 hover:opacity-80 transition-opacity duration-200"
              >
                {current.linkBtn.label}
              </a>
              <a
                href={current.pillBtn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-white/60 rounded-full text-white text-[14px] font-bold hover:bg-white/10 transition-all duration-200"
              >
                {current.pillBtn.label}
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase rotate-90 mb-4">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/60 to-transparent">
          <div className="w-full bg-white/80 animate-bounce" style={{ height: '40%' }} />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
