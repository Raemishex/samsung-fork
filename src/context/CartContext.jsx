import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('samsung_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to parse cart from local storage", e);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Promo code state
  const [promoCode, setPromoCode] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);

  // Save to local storage when cart changes
  useEffect(() => {
    localStorage.setItem('samsung_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Show toast
    showToast(`"${product.name}" səbətə əlavə edildi!`);

    // Open cart drawer
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + amount);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const applyPromoCode = (code) => {
    if (code.toUpperCase() === 'SAMSUNG20') {
      setPromoCode('SAMSUNG20');
      setDiscountPercent(20);
      showToast("Təbriklər! 20% endirim tətbiq edildi.");
      return true;
    } else {
      showToast("Yanlış və ya istifadə olunmuş kod.");
      return false;
    }
  };

  const removePromoCode = () => {
    setPromoCode(null);
    setDiscountPercent(0);
  };

  const getDiscountedTotal = () => {
    const total = getCartTotal();
    const discountAmount = (total * discountPercent) / 100;
    return total - discountAmount;
  };

  const clearCart = () => {
    setCartItems([]);
    setPromoCode(null);
    setDiscountPercent(0);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      applyPromoCode,
      removePromoCode,
      getDiscountedTotal,
      promoCode,
      discountPercent,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      toastMessage,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
};
