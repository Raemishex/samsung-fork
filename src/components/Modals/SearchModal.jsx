import React, { useEffect, useRef } from 'react'

const SearchModal = ({ isOpen, onClose }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100)
    }
  }, [isOpen])

  if (!isOpen) return null

  const trendingSearches = [
    'Galaxy S24 Ultra',
    'Bespoke Refrigerator',
    'Neo QLED 8K',
    'Galaxy Watch6',
    'Galaxy Tab S9'
  ]

  const productSuggestions = [
    {
      id: 1,
      name: 'Galaxy S24 Ultra, 1TB, Titanium Gray',
      img: '/images/SDSAC-8580-S24Ultra-TitaniumGray-560x560.jpg',
      price: '$1,619.99'
    },
    {
      id: 2,
      name: 'OLED S90C 65" TV',
      img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg',
      price: '$1,599.99'
    }
  ]

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col pt-16 md:pt-24 bg-white/95 backdrop-blur-md animate-fade-in px-4 sm:px-8 md:px-16" onClick={onClose}>
      <div 
        className="w-full max-w-4xl mx-auto flex flex-col flex-1"
        onClick={(e) => e.stopPropagation()} // Bağlanmasının qarşısını alırıq inputda click olanda
      >
        {/* Bağlamaq düyməsi */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close search"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Axtarış Inputu */}
        <div className="relative mb-8 md:mb-12">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, orders, and more..."
            className="w-full text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1d1d1d] bg-transparent border-b-2 border-gray-300 py-4 focus:outline-none focus:border-black transition-colors"
          />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Trending Searches */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Trending Searches</h3>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map(term => (
                <button 
                  key={term}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold hover:border-black hover:bg-gray-50 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Product Suggestions */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Suggested Products</h3>
            <div className="space-y-4">
              {productSuggestions.map(prod => (
                <a key={prod.id} href="#" className="flex items-center gap-4 group p-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-[#f4f4f4] rounded-xl p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <img src={prod.img} alt={prod.name} className="max-w-full max-h-full mix-blend-multiply" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1d1d1d] group-hover:text-black line-clamp-2">{prod.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{prod.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SearchModal
