import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import QuickViewModal from '../Modals/QuickViewModal'
import ImageWithSkeleton from '../common/ImageWithSkeleton'

/* TV/Monitor grid — orijinal Samsung.com-dakı kimi */
const tvProducts = [
  {
    id: 1,
    name: 'OLED S90F',
    img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg',
    href: 'https://www.samsung.com/us/televisions-home-theater/tvs/oled-tvs/',
    cta: 'Buy',
  },
  {
    id: 2,
    name: 'The Frame Pro',
    img: '/images/SDSAC-9810-Frame-Pro-HP-FeaturedCard-560x560.jpg',
    href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/',
    cta: 'Buy',
  },
  {
    id: 3,
    name: 'Odyssey OLED G9',
    img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg',
    href: 'https://www.samsung.com/us/computing/monitors/gaming-monitors/',
    cta: 'Buy',
  },
  {
    id: 4,
    name: 'Odyssey OLED G5',
    img: '/images/SDSAC-10328-RE9-LS27FG500SNXZA-HP-Featured-Product-Card-DT-MB-560x560.jpg',
    href: 'https://www.samsung.com/us/computing/monitors/gaming-monitors/',
    cta: 'Buy',
  },
]

const TVSection = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-[#f4f4f4]">
      {/* Vision AI TVs — əsas hero bölmə */}
      <div
        ref={ref}
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #e8ecf0 0%, #f4f4f4 100%)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="relative min-h-[500px] md:min-h-[640px] flex items-center py-16 lg:py-20 lg:pr-[50px] overflow-hidden bg-[#f4f4f4]">
            
            {/* Arxa plan şəkili */}
            <div className="absolute inset-0 w-full h-full z-0 flex justify-end">
              <img
                src="/images/MDVD_Feature_KV_PC_1440x640_LTR.jpg"
                alt="Samsung Vision AI TVs Background"
                className="w-full h-full object-cover md:w-[75%] md:object-contain object-right"
                loading="lazy"
              />
              {/* Mobil üçün mətnin yaxşı oxunması üçün gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4f4f4] via-[#f4f4f4]/80 to-transparent lg:hidden" />
            </div>

            {/* Sol — Mətn (Şəklin Üzərində) */}
            <div className="relative z-10 w-full lg:w-2/5 mb-8 lg:mb-0 lg:pl-[60px] xl:pl-[100px]">
              <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-extrabold text-[#1d1d1d] leading-[1.05] tracking-tight mb-4">
                Vision AI TVs
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#1d1d1d] mb-8 max-w-[320px] leading-relaxed">
                Ask your TV anything through AI enhanced conversation.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <a
                  href="https://www.samsung.com/us/televisions-home-theater/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d1d1d] text-[14px] font-bold underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity duration-200 uppercase tracking-wide"
                >
                  Learn more
                </a>
                <a
                  href="https://www.samsung.com/us/televisions-home-theater/tvs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 border border-[#1d1d1d] rounded-full text-[#1d1d1d] text-[14px] font-bold hover:bg-[#1d1d1d] hover:text-white transition-all duration-300"
                >
                  Shop
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TV/Monitor Product Grid — 4 sütunlu */}
      <div
        ref={gridRef}
        className="max-w-[1440px] mx-auto px-6 lg:px-10 py-0"
        style={{
          opacity: gridInView ? 1 : 0,
          transform: gridInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-12 md:pt-16 pb-12">
          {tvProducts.map((product, i) => (
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
      
      <QuickViewModal 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
        product={quickViewProduct} 
      />
    </section>
  )
}

export default TVSection
