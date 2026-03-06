import React from 'react'
import { useInView } from 'react-intersection-observer'

const BundleBanner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#e8ecf0]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {/* Arxa plan şəkli */}
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src="/images/home_feature-kv_eco_S26U-buds4-pro_pc_1440x810_ltr.jpg"
            alt="Galaxy S26 Ultra and Buds4 Pro"
            className="w-full h-full object-cover object-center md:object-[center_right]"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Məzmun (Yazılar) - Şəklin üstündə */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 h-full">
        <div className="flex flex-col justify-end lg:justify-center h-full min-h-[500px] md:min-h-[600px] lg:w-1/2 pb-16 lg:pb-0 pt-[60vw] sm:pt-[50vw] md:pt-0">
          <p className="text-[18px] md:text-[20px] text-[#1d1d1d] mb-8 font-medium">
            Bundle together for exclusive offer.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.samsung.com/us/smartphones/galaxy-s26-ultra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d1d1d] text-[14px] font-bold underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity duration-200 "
            >
              Learn more
            </a>
            <a
              href="https://www.samsung.com/us/smartphones/galaxy-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-[#1d1d1d]/50 rounded-full text-[#1d1d1d] text-[14px] font-bold hover:bg-white/40 transition-all duration-200"
            >
              Pre-order now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BundleBanner
