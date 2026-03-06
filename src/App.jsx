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

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Şəkilləri yüklənsin deyə qısa gecikmə
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  // Scroll animasiya dəstəyi
  useEffect(() => {
    const handleScroll = () => {
      // CSS parallax dəyişəni
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`)

      // Intersection Observer əvəzinə manual scroll-animate
      const elements = document.querySelectorAll('.section-animate')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // ilk render
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
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

      {/* Yuxarı Qayıt Düyməsi */}
      <BackToTop />
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

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-50 bg-[#1428A0] hover:bg-[#0d1f7a] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Yuxarı qayıt"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default App