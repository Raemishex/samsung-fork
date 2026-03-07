import React from 'react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Toast = () => {
  const cart = useCart();
  const toastMessage = cart ? cart.toastMessage : null;
  const showToast = cart ? cart.showToast : () => {};

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100] bg-white text-black px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-100 min-w-[300px]"
        >
          <div className="bg-[#1428a0] rounded-full p-1 text-white flex-shrink-0">
            <CheckCircle size={20} />
          </div>
          <span className="text-sm font-semibold tracking-wide text-gray-800 flex-1">{toastMessage}</span>

          <button
            onClick={() => showToast(null)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
