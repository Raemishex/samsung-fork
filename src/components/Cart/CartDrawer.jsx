import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { useCart } from '../../context/CartContext'
import CheckoutModal from '../Modals/CheckoutModal'

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    applyPromoCode,
    removePromoCode,
    promoCode,
    discountPercent,
    getDiscountedTotal
  } = useCart()

  const [lottieData, setLottieData] = useState(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [promoInput, setPromoInput] = useState('')

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
    updateQuantity(id, 1)
  }

  const decreaseQty = (id) => {
    updateQuantity(id, -1)
  }

  const removeItem = (id) => {
    removeFromCart(id)
  }

  const handleApplyPromo = () => {
    if (promoInput.trim() !== '') {
      applyPromoCode(promoInput.trim());
      setPromoInput('');
    }
  }

  const subtotal = getCartTotal()
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = getDiscountedTotal();

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
          <h2 className="text-xl font-bold text-[#1d1d1d]">Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</h2>
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
          {cartItems.length === 0 ? (
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
              {cartItems.map(item => (
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
                        <span className="text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)} className="text-xl leading-none px-1 hover:text-gray-500">+</button>
                      </div>
                      <span className="font-bold whitespace-nowrap">${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">

            {/* Promo Code Section */}
            <div className="mb-4">
              {!promoCode ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-black text-sm uppercase"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center bg-green-50 px-4 py-3 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-green-800 font-bold text-sm tracking-wide">{promoCode} APPLIED</span>
                  </div>
                  <button onClick={removePromoCode} className="text-sm text-gray-400 hover:text-black underline">Remove</button>
                </div>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="text-lg font-bold">${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex items-center justify-between text-green-600">
                  <span className="font-medium">Discount ({discountPercent}%)</span>
                  <span className="text-lg font-bold">-${discountAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-gray-900 font-bold">Total</span>
                <span className="text-2xl font-black">${total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98] transform"
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  )
}

export default CartDrawer
