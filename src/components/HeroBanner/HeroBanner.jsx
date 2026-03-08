import React, { useState, useEffect, useRef } from 'react'

const HeroBanner = () => {
  const [scrollY, setScrollY] = useState(0)
  const activeSlide = 0
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 18,
    minutes: 7,
    seconds: 40
  })

  const slides = [
    {
      id: 0,
      title: 'Get up to $900 trade-in credit.θ\nLimited time only.',
      video: '/images/samsung-s26.mp4',
      textColor: 'text-white',
      linkBtn: { label: 'Learn more', href: 'https://www.samsung.com/us/smartphones/galaxy-s26-ultra/' },
      pillBtn: { label: 'Pre-order now', href: 'https://www.samsung.com/us/smartphones/galaxy-s/' },
      darkOverlay: true,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const current = slides[activeSlide]

  const formatTime = (time) => String(time).padStart(2, '0')

  return (
    <section className="relative w-full overflow-hidden bg-[#1c1d21] h-screen min-h-[560px]">
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
              poster="/images/us-galaxy-s26-ultra-s948-sm-s948uzvaxaa-550993934.webp"
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d21]/80 via-[#1c1d21]/40 to-transparent md:from-[#1c1d21]/60 md:via-[#1c1d21]/20" />
          )}
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end pb-24 md:pb-32">
        <div className="px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full">
          <div
            key={activeSlide}
            className={`hero-content max-w-[500px] ${current.textColor}`}
          >
            {/* Main Title */}
            <h1 className="text-[32px] md:text-[38px] lg:text-[44px] mb-8 leading-[1.2] tracking-tight whitespace-pre-line font-light">
              {current.title}
            </h1>

            {/* Countdown Timer */}
            <div className="flex flex-col mb-10">
              <div className="flex items-center text-[40px] md:text-[48px] font-bold leading-none tracking-wider mb-2">
                <span>{formatTime(timeLeft.days)}</span>
                <span className="mx-2">:</span>
                <span>{formatTime(timeLeft.hours)}</span>
                <span className="mx-2">:</span>
                <span>{formatTime(timeLeft.minutes)}</span>
                <span className="mx-2">:</span>
                <span>{formatTime(timeLeft.seconds)}</span>
              </div>
              <div className="flex text-[10px] md:text-[11px] uppercase tracking-widest font-bold opacity-80 pl-1">
                <span className="w-[52px] md:w-[62px]">Days</span>
                <span className="w-[56px] md:w-[68px]">Hours</span>
                <span className="w-[70px] md:w-[84px]">Minutes</span>
                <span>Seconds</span>
              </div>
            </div>

            {/* Samsung-style CTA: underline link + pill outline button */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={current.linkBtn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[15px] font-bold underline underline-offset-8 decoration-2 hover:opacity-80 transition-opacity duration-200"
              >
                {current.linkBtn.label}
              </a>
              <a
                href={current.pillBtn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-white text-[15px] font-bold hover:bg-white hover:text-black transition-all duration-200"
              >
                {current.pillBtn.label}
              </a>
            </div>

            {/* Play/Pause Button placeholder to match the original layout in bottom left */}
            <div className="mt-8 flex items-center">
               <button className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <rect x="6" y="4" width="4" height="16"></rect>
                   <rect x="14" y="4" width="4" height="16"></rect>
                 </svg>
               </button>
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
