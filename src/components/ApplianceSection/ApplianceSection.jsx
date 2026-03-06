import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import QuickViewModal from '../Modals/QuickViewModal'
import ImageWithSkeleton from '../common/ImageWithSkeleton'

/* Bespoke mühsulları — orijinal Samsung.com-dakı grid */
const bespokeProducts = [
  {
    id: 1,
    name: 'Bespoke Refrigerator',
    img: '/images/SDSAC-9955-Bespoke-Refrigerator-HP-Product-tile-560x560.jpg',
    href: 'https://www.samsung.com/us/refrigerators/',
    cta: 'Buy',
  },
  {
    id: 2,
    name: 'Bespoke AI Laundry',
    img: '/images/SDSAC-10185-WD90F53AVSUS-HP-FeaturedProductCard-560x560.jpg',
    href: 'https://www.samsung.com/us/washers-and-dryers/',
    cta: 'Buy',
  },
  {
    id: 3,
    name: 'Bespoke AI Jet',
    img: '/images/SDSAC-9810-Bespoke-AI-Jet-HP-FeaturedCard-560x560.jpg',
    href: 'https://www.samsung.com/us/vacuum-cleaners/',
    cta: 'Buy',
  },
  {
    id: 4,
    name: 'Bespoke AI Oven',
    img: '/images/SDSAC-10185-NV51CB700S12AA-HP-FeaturedProductCard-560x560.jpg',
    href: 'https://www.samsung.com/us/ranges/',
    cta: 'Buy',
  },
]

const ApplianceSection = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Bespoke AI Hero — qara fonlu bölmə */}
      <section
        ref={ref}
        className="relative w-full overflow-hidden bg-black"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div className="relative min-h-[500px] md:min-h-[640px] flex items-center py-16 lg:py-20 lg:pr-[50px] overflow-hidden bg-black">
          
          {/* Arxa plan şəkili */}
          <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
            <img
              src="/images/SDSAC_9424_DA-Feature_KV_DT_1440x810.jpg"
              alt="Bespoke AI Home Appliances Background"
              className="w-full h-full object-cover lg:w-[70%] lg:object-contain object-right"
              loading="lazy"
            />
            {/* Mobil üçün mətnin yaxşı oxunması üçün gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:hidden" />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 w-full">
            {/* Sol — Mətn (Şəklin Üzərində) */}
            <div className="relative z-10 w-full lg:w-2/5 mb-8 lg:mb-0 lg:pl-[60px] xl:pl-[100px]">
              <p className="text-[16px] md:text-[18px] text-white/90 mb-8 max-w-[320px] leading-relaxed">
                Home living made simple.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <a
                  href="https://www.samsung.com/us/home-appliances/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[14px] font-bold underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity duration-200 uppercase tracking-wide"
                >
                  LEARN MORE
                </a>
                <a
                  href="https://www.samsung.com/us/home-appliances/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 border border-white rounded-full text-white text-[14px] font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bespoke Product Grid — 4 sütunlu */}
      <section
        ref={gridRef}
        className="bg-white py-12 md:py-20"
        style={{
          opacity: gridInView ? 1 : 0,
          transform: gridInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bespokeProducts.map((product, i) => (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center pt-8 md:pt-10 pb-8 px-4 bg-[#f4f4f4] rounded-[24px] hover:shadow-md transition-shadow duration-300"
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Yuxarıdakı Yazı */}
                <h3 className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-[#1d1d1d] text-center mb-6 px-2">
                  {product.name}
                </h3>

                {/* Məhsul şəkili */}
                <div className="w-full aspect-[4/3] max-w-[200px] md:max-w-[260px] overflow-hidden flex items-center justify-center mb-6">
                  <ImageWithSkeleton
                    src={product.img}
                    alt={product.name}
                    imgClassName="w-full h-full object-contain mix-blend-multiply group-hover:scale-105"
                  />
                </div>

                {/* Hover olduqda görünən düymə */}
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => { e.preventDefault(); setQuickViewProduct(product) }}
                    className="inline-flex items-center px-6 py-2.5 bg-[#1d1d1d] text-white rounded-full text-[13px] md:text-[14px] font-bold hover:bg-black transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <QuickViewModal 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
        product={quickViewProduct} 
      />
    </>
  )
}

export default ApplianceSection
