import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1440px] mx-auto px-6 lg:px-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              variants={itemVariants}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 }
              }}
              key={cat.id}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center pt-8 md:pt-10 pb-8 px-4 bg-[#f4f4f4] rounded-[24px] transition-colors duration-300 transform-gpu"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
               {/* Yuxarıdakı Yazı */}
              <h3 className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-[#1d1d1d] text-center mb-6 transform translate-z-10 group-hover:-translate-y-2 transition-transform duration-300">
                {cat.label}
              </h3>

              {/* Məhsul şəkili */}
              <div className="w-full aspect-[4/3] max-w-[200px] md:max-w-[260px] flex items-center justify-center mb-6 relative">
                <ImageWithSkeleton
                  src={cat.img}
                  alt={cat.label}
                  imgClassName="w-full h-full object-contain mix-blend-multiply drop-shadow-md group-hover:scale-110 group-hover:-translate-y-4 group-hover:drop-shadow-2xl transition-all duration-500 ease-out"
                />
              </div>

              {/* Hover olduqda görünən düymə */}
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button 
                  onClick={(e) => { e.preventDefault(); setQuickViewProduct(cat) }}
                  className="inline-flex items-center px-6 py-2.5 bg-[#1d1d1d] text-white rounded-full text-[13px] md:text-[14px] font-bold hover:bg-[#1428A0] transition-colors shadow-lg hover:scale-105 active:scale-95"
                >
                  Quick View
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      <QuickViewModal 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
        product={quickViewProduct} 
      />
    </section>
  )
}

export default ProductGrid
