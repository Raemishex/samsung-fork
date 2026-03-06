import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

const CartDrawer = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Galaxy S26 Ultra, 256GB, Titanium Black',
      img: '/images/SDSAC-8580-S24Ultra-TitaniumGray-560x560.jpg',
      price: 1299.99,
      qty: 1
    }
  ])

  const [lottieData, setLottieData] = useState(null)

  // Prevent background scrolling when opened + Fetch Lottie
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    fetch('https://assets9.lottiefiles.com/packages/lf20_3vd51tg2.json')
      .then(r => r.json())
      .then(data => setLottieData(data))
      .catch(e => console.log("Lottie error", e))
  }, [])

  const increaseQty = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i))
  }

  const decreaseQty = (id) => {
    setItems(items.map(i => {
      if (i.id === id && i.qty > 1) return { ...i, qty: i.qty - 1 }
      return i
    }))
  }

  const removeItem = (id) => {
    setItems(items.filter(i => i.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0)

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[990] backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[1000] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1d1d1d]">Your Cart ({items.length})</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-85">
              <div className="w-48 h-48 mb-2">
                 {lottieData ? <Lottie animationData={lottieData} loop={true} /> : (
                   <div className="w-full h-full border-4 border-dashed border-gray-200 rounded-full animate-spin"></div>
                 )}
              </div>
              <h3 className="text-xl font-bold">Your cart is empty</h3>
              <p className="text-sm mt-3 text-gray-500 max-w-[250px]">Looks like you haven't added anything to your cart yet.</p>
              <button 
                onClick={onClose}
                className="mt-8 px-8 py-3 bg-black text-white rounded-full font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-24 bg-[#f4f4f4] rounded-xl p-2 flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-[#1d1d1d] leading-snug">{item.name}</h4>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-black">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                        <button onClick={() => decreaseQty(item.id)} className="text-xl leading-none px-1 hover:text-gray-500">−</button>
                        <span className="text-sm font-semibold">{item.qty}</span>
                        <button onClick={() => increaseQty(item.id)} className="text-xl leading-none px-1 hover:text-gray-500">+</button>
                      </div>
                      <span className="font-bold whitespace-nowrap">${(item.price * item.qty).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold">${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            </div>
            <button className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
