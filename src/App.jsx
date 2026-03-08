import React, { Suspense, useEffect, useState } from 'react'
import './index.css'

import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import BundleBanner from './components/BundleBanner/BundleBanner'
import ProductGrid from './components/ProductGrid/ProductGrid'
import TVSection from './components/TVSection/TVSection'
import ApplianceSection from './components/ApplianceSection/ApplianceSection'
import RecommendedSection from './components/RecommendedSection/RecommendedSection'
import ExploreSection from './components/ExploreSection/ExploreSection'
import Footer from './components/Footer/Footer'
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader'
import LiveWidget from './components/LiveWidget/LiveWidget'
import Toast from './components/common/Toast'
import Preloader from './components/common/Preloader'
import SupportWidget from './components/common/SupportWidget'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Şəkilləri yüklənsin deyə qısa gecikmə
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  // Parallax üçün scroll dəstəyi
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Preloader />
      {/* Header - həmişə göstər */}
      <Header />

      {/* Ana məzmun */}
      {loading ? (
        <div style={{ marginTop: '92px' }}>
          <SkeletonLoader type="hero" />
          <div className="py-16 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
            <SkeletonLoader type="grid" />
          </div>
        </div>
      ) : (
        <main>
          {/* 1. Hero KV */}
          <HeroBanner />

          {/* 2. Bundle Banner — S26 Ultra | Buds4 Pro */}
          <BundleBanner />

          {/* 3. Category Tabs — məhsul grid */}
          <ProductGrid />

          {/* 4. Vision AI TVs + display grid */}
          <TVSection />

          {/* 5. Bespoke AI + Bespoke grid */}
          <ApplianceSection />

          {/* 6. Recommended for you */}
          <RecommendedSection />

          {/* 7. Explore the Stories */}
          <ExploreSection />

          {/* 8. Footer */}
          <Footer />
        </main>
      )}

      {/* Live Video Widget */}
      <LiveWidget />

      {/* Support Chat Widget */}
      <SupportWidget />

      {/* Yuxarı Qayıt Düyməsi */}
      <BackToTop />

      {/* Toast Notification */}
      <Toast />
    </div>
  )
}

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTopSlowly = () => {
    const startY = window.scrollY;
    const duration = 1500; // 1.5 seconds for a slow scroll
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function: easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY * (1 - easeProgress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  if (!visible) return null

  return (
    <button
      onClick={scrollToTopSlowly}
      className="fixed bottom-8 right-6 z-50 bg-[#1428A0] hover:bg-[#0d1f7a] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl focus:ring-4 focus:ring-black focus:outline-none"
      aria-label="Yuxarı qayıt"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default App