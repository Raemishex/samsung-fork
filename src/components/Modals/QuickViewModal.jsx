import React, { useEffect } from 'react'
import { useCart } from '../../context/CartContext'

const QuickViewModal = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart()
  // Modal açılanda scroll dayandırmaq
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/5 hover:bg-black/10 flex items-center justify-center rounded-full transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Sol tərəf - Şəkil */}
        <div className="w-full md:w-1/2 bg-[#f4f4f4] p-8 md:p-12 flex items-center justify-center min-h-[300px]">
          <img 
            src={product.img} 
            alt={product.name || product.title || product.label} 
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Sağ tərəf - Məlumat */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-[#1428A0]/10 text-[#1428A0] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Best Seller
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1d] leading-tight mb-4">
            {product.name || product.title || product.label}
          </h2>
          
          <div className="mb-6">
            <div className="flex items-end gap-3 mb-2">
              <span className="text-3xl font-extrabold text-[#1d1d1d]">
                {product.price || '$1,299.00'}
              </span>
              {(product.savePrice || product.oldPrice) && (
                <span className="text-lg text-gray-400 line-through mb-1">
                  {product.oldPrice || '$1,499.00'}
                </span>
              )}
            </div>
            {product.savePrice && (
              <p className="text-sm font-bold text-[#1428a0]">
                Save {product.savePrice}
              </p>
            )}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed text-sm">
            Experience the ultimate performance and sleek design. This product brings cutting-edge technology directly into your hands with stunning visuals and seamless integration.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name || product.title || product.label,
                  price: parseFloat((product.price || '$1299').replace(/[^0-9.-]+/g,"")),
                  img: product.img
                });
                onClose();
              }}
              className="flex-1 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </button>
            <a 
              href={product.href || '#'}
              className="flex-1 bg-white border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              View Details
            </a>
          </div>

          {/* Key Features (Dummy data) */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1428a0" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Free Shipping & Returns
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1428a0" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Secure Payment
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1428a0" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                1 Year Warranty
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal
