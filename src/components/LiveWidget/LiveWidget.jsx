import React, { useState, useRef, useEffect } from 'react'

const LiveWidget = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)
  const [isLongPressing, setIsLongPressing] = useState(false)

  const widgetRef = useRef(null)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const initialPosRef = useRef({ x: 0, y: 0 })
  const longPressTimerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !isLongPressing) return

      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        setHasMoved(true)
      }

      setPosition({
        x: initialPosRef.current.x + dx,
        y: initialPosRef.current.y + dy
      })
    }

    const handleMouseUp = (e) => {
      clearTimeout(longPressTimerRef.current)
      if (isDragging) {
        setIsDragging(false)
        setIsLongPressing(false)
        // Allow time for click events to evaluate hasMoved before resetting it
        setTimeout(() => setHasMoved(false), 50)
      }
    }

    const handleTouchMove = (e) => {
      if (!isDragging || !isLongPressing || !e.touches[0]) return

      const dx = e.touches[0].clientX - dragStartRef.current.x
      const dy = e.touches[0].clientY - dragStartRef.current.y

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        setHasMoved(true)
      }

      // Prevent scrolling while dragging
      e.preventDefault()

      setPosition({
        x: initialPosRef.current.x + dx,
        y: initialPosRef.current.y + dy
      })
    }

    if (isDragging && isLongPressing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  const handlePointerDown = (e) => {
    // Determine pointer coordinates
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    dragStartRef.current = { x: clientX, y: clientY }
    initialPosRef.current = { x: position.x, y: position.y }
    setIsDragging(true)
    setHasMoved(false)

    // Wait for 300ms to consider it a long press / drag start
    longPressTimerRef.current = setTimeout(() => {
      setIsLongPressing(true)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      ref={widgetRef}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isLongPressing ? 'grabbing' : 'grab'
      }}
      className={`fixed bottom-4 right-4 z-[100] w-[200px] h-[112px] md:w-[240px] md:h-[135px] bg-black rounded-[20px] shadow-2xl overflow-hidden group select-none ${!isLongPressing ? 'transition-transform hover:-translate-y-1' : ''}`}
    >
      {/* Youtube Video İframe - pointer-events-none ki, üzərində hover animasiyası edə bilək */}
      <iframe
        className="absolute inset-0 w-full h-[140%] -top-[20%] object-cover pointer-events-none"
        src="https://www.youtube.com/embed/DopZM8uRD0c?si=PZ_LUiR1Wa8yoht5&autoplay=1&mute=1&loop=1&playlist=DopZM8uRD0c"
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
        href="https://www.youtube.com/watch?v=DopZM8uRD0c" 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={(e) => {
          if (hasMoved || isLongPressing) {
            e.preventDefault()
            e.stopPropagation()
          }
        }}
        className="absolute inset-0 z-20"
        aria-label="Watch News Live on YouTube"
      ></a>
    </div>
  )
}

export default LiveWidget
