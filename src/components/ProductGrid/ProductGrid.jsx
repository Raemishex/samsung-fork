import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import QuickViewModal from '../Modals/QuickViewModal'
import ImageWithSkeleton from '../common/ImageWithSkeleton'

/* Orijinal Samsung.com-dakı category tab-lar */
const categories = [
  {
    id: 1,
    label: 'Galaxy S26 | S26+',
    img: '/images/HOME_Feature-Card_Galaxy-S26-S26-plus_560x560.jpg',
    href: 'https://www.samsung.com/us/smartphones/galaxy-s/',
    cta: 'Pre-order',
  },
  {
    id: 2,
    label: 'Galaxy Z Fold7',
    img: '/images/HOME_Feature-Card_Galaxy-Z-Fold7_560x560.jpg',
    href: 'https://www.samsung.com/us/smartphones/galaxy-z-fold7/',
    cta: 'Buy',
  },
  {
    id: 3,
    label: 'Galaxy Tab S11 Ultra',
    img: '/images/HOME_Feature-Card_Galaxy-Tab-S11U_560x560.jpg',
    href: 'https://www.samsung.com/us/tablets/',
    cta: 'Buy',
  },
  {
    id: 4,
    label: 'Galaxy Watch8',
    img: '/images/HOME_Feature-Card_Galaxy-Watch8_560x560.jpg',
    href: 'https://www.samsung.com/us/mobile/galaxy-watch/',
    cta: 'Buy',
  },
]

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-white py-12 md:py-20">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 lg:px-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center pt-8 md:pt-10 pb-8 px-4 bg-[#f4f4f4] rounded-[24px] hover:shadow-md transition-shadow duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
               {/* Yuxarıdakı Yazı */}
              <h3 className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-[#1d1d1d] text-center mb-6">
                {cat.label}
              </h3>

              {/* Məhsul şəkili */}
              <div className="w-full aspect-[4/3] max-w-[200px] md:max-w-[260px] overflow-hidden flex items-center justify-center mb-6">
                <ImageWithSkeleton
                  src={cat.img}
                  alt={cat.label}
                  imgClassName="w-full h-full object-contain mix-blend-multiply group-hover:scale-105"
                />
              </div>

              {/* Hover olduqda görünən düymə */}
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button 
                  onClick={(e) => { e.preventDefault(); setQuickViewProduct(cat) }}
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

export default ProductGrid
