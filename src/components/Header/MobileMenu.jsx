import React, { useState } from 'react'

const MobileMenu = ({ navItems, onClose }) => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (label) => {
    setOpenSection(prev => prev === label ? null : label)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div className="mobile-menu fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white z-50 overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <img
            src="/images/Samsung_Orig_Wordmark_BLUE_RGB.jpg"
            alt="Samsung"
            className="h-5 w-auto"
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex-1 py-2">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-50">
              <button
                onClick={() => toggleSection(item.label)}
                className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-semibold text-[#1d1d1d] hover:bg-gray-50 transition-colors"
              >
                <span>{item.label}</span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  className={`transition-transform duration-300 ${openSection === item.label ? 'rotate-180' : ''}`}
                >
                  <path d="M19 9l-7 7-7-7" stroke="#535353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {openSection === item.label && item.mega && (
                <div className="bg-[#f4f4f4] px-5 py-5 border-b border-gray-200">
                  {/* Categories mini images */}
                  {item.mega.categories && (
                    <div className="grid grid-cols-3 gap-y-6 gap-x-3 mb-8">
                      {item.mega.categories.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center text-center relative"
                          onClick={onClose}
                        >
                          {c.isNew && (
                            <span className="absolute -top-3 text-[9px] font-bold text-[#1428a0] tracking-wider uppercase bg-[#f4f4f4] px-1 z-10">
                              New
                            </span>
                          )}
                          <div className="w-[60px] h-[60px] bg-white rounded-lg flex items-center justify-center p-1 mb-2 shadow-sm">
                            <img src={c.img} alt={c.label} className="max-w-full max-h-full object-contain" loading="lazy" />
                          </div>
                          <p className="text-[11px] font-semibold text-[#1d1d1d] leading-tight">{c.label}</p>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Discover Links */}
                  {item.mega.discover && (
                    <div className="border-t border-gray-200/60 pt-5">
                      <h4 className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-4">Discover</h4>
                      <ul className="space-y-[14px]">
                        {item.mega.discover.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-[14px] font-medium text-[#1d1d1d] hover:text-[#1428A0] transition-colors"
                              onClick={onClose}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-100 px-5 py-4 space-y-3">
          <a href="https://account.samsung.com/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-[#1d1d1d] hover:text-[#1428A0] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/></svg>
            Sign In / Register
          </a>
          <a href="https://www.samsung.com/us/order/searchorder/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-[#1d1d1d] hover:text-[#1428A0] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8"/></svg>
            Track an Order
          </a>
          <a href="https://www.samsung.com/us/support/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-[#1d1d1d] hover:text-[#1428A0] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="17" r="0.5" fill="currentColor" strokeWidth="1"/></svg>
            Support
          </a>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
