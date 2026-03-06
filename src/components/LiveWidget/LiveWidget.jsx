import React, { useState } from 'react'

const LiveWidget = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-[100] w-[200px] h-[112px] md:w-[240px] md:h-[135px] bg-black rounded-[20px] shadow-2xl overflow-hidden group transition-transform hover:-translate-y-1">
      {/* Youtube Video İframe - pointer-events-none ki, üzərində hover animasiyası edə bilək */}
      <iframe
        className="absolute inset-0 w-full h-[140%] -top-[20%] object-cover pointer-events-none"
        src="https://www.youtube.com/embed/Ce0Ki5eCZ7g?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=Ce0Ki5eCZ7g"
        title="Live Stream"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      {/* Qara overlay mətnin daha yaxşı görünməsi üçün, hover-də tündləşir */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-300 pointer-events-none z-10"></div>

      {/* Üst hissə: Red Dot (Live Indicator) və Bağlama düyməsi */}
      <div className="absolute top-2 left-3 flex justify-between items-center w-[calc(100%-20px)] z-30">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_rgba(220,38,38,0.8)]"></div>
          <span className="text-white text-[10px] font-bold tracking-wider uppercase drop-shadow-md">Live</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setIsVisible(false)
          }}
          className="text-white hover:text-gray-300 transition-colors bg-black/40 rounded-full w-5 h-5 flex items-center justify-center backdrop-blur-md cursor-pointer pointer-events-auto"
          aria-label="Close live widget"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* Hover olduqda çıxan mətn: "watch news live" */}
      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-white text-[14px] md:text-[16px] font-bold text-center tracking-wide underline underline-offset-4 decoration-2">
          Watch News Live
        </span>
      </div>

      {/* Divin üstünə basıldıqda youtube-a getməsi üçün bütöv link qatı */}
      <a 
        href="https://www.youtube.com/watch?v=Ce0Ki5eCZ7g" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute inset-0 z-20"
        aria-label="Watch News Live on YouTube"
      ></a>
    </div>
  )
}

export default LiveWidget
