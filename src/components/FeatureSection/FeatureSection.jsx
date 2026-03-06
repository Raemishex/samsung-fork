import React from 'react'
import { useInView } from 'react-intersection-observer'

const FeatureSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Feature 1: S26 Ultra + Buds4 Pro */}
      <section ref={ref} className="relative w-full overflow-hidden bg-black" style={{ minHeight: '500px' }}>
        <div className="absolute inset-0 parallax-wrapper">
          <img
            src="/images/home_feature-kv_eco_S26U-buds4-pro_pc_1440x810_ltr.jpg"
            alt="Galaxy S26 Ultra with Buds4 Pro"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full min-h-[500px] flex items-center">
          <div
            className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <div className="max-w-lg py-16">
              <p className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase mb-3">
                Galaxy S26 Ultra + Buds4 Pro
              </p>
              <h2 className="samsung-heading text-3xl md:text-5xl text-white mb-4">
                Hear More.<br />See More. AI More.
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                Galaxy S26 Ultra with Buds4 Pro — the ultimate AI-powered duo. Intelligent sound. Brilliant camera. One Galaxy.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.samsung.com/us/smartphones/galaxy-s/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-samsung-white group"
                >
                  <span>Shop Galaxy S26 Ultra</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://www.samsung.com/us/mobile-audio/all-galaxy-buds/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-samsung-white-outline"
                >
                  Shop Buds4 Pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Galaxy Ecosystem Video Banner */}
      <section ref={ref2} className="relative bg-[#1428A0] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/MDVD_Feature_KV_PC_1440x640_LTR.jpg"
            alt="Samsung Galaxy Ecosystem"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div
          className="relative z-10 px-8 md:px-16 lg:px-24 py-20 max-w-screen-xl mx-auto"
          style={{
            opacity: inView2 ? 1 : 0,
            transform: inView2 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase mb-3">
              Galaxy Ecosystem
            </p>
            <h2 className="samsung-heading text-3xl md:text-5xl text-white mb-4">
              One Samsung.<br /> Infinite Possibilities.
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8">
              Your Galaxy devices work better together — Phone, Watch, Tablet, Earbuds, TV, and more all connected seamlessly.
            </p>
            <a
              href="https://www.samsung.com/us/smartphones/galaxy-ai/"
              target="_blank" rel="noopener noreferrer"
              className="btn-samsung-white group inline-flex"
            >
              <span>Explore Galaxy AI</span>
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSection
