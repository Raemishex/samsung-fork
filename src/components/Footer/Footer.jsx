import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const footerColumns = [
  {
    title: 'SHOP',
    links: [
      { label: 'Shop Home', href: 'https://www.samsung.com/us/shop/' },
      { label: 'Buy Direct Get More', href: 'https://www.samsung.com/us/why-buy-direct/' },
      { label: 'Discover AI', href: 'https://www.samsung.com/us/ai-products/' },
      { label: 'SmartThings', href: 'https://www.samsung.com/us/smartthings/' },
      { label: 'Samsung Rewards', href: 'https://www.samsung.com/us/rewards/' },
      { label: 'Samsung Offer Programs', href: 'https://www.samsung.com/us/shop/offer-program/' },
      { label: 'Samsung Care+', href: 'https://www.samsung.com/us/support/samsung-care-plus/' },
      { label: 'Samsung Experience Stores', href: 'https://www.samsung.com/us/samsung-experience-store/' },
      { label: 'Samsung Trade-in', href: 'https://www.samsung.com/us/trade-in/' },
      { label: 'Apps & Services', href: 'https://www.samsung.com/us/apps/' },
      { label: 'Certified Re-Newed', href: 'https://www.samsung.com/us/smartphones/certified-re-newed-phones/' },
      { label: 'For Business', href: 'https://www.samsung.com/us/business/' },
      { label: 'Samsung Authorized Reseller Program', href: 'https://www.samsung.com/us/peaceofmind/' },
      { label: 'Explore', href: 'https://www.samsung.com/us/explore/' },
    ],
  },
  {
    title: 'PRODUCT',
    links: [
      { label: 'Galaxy Smartphone', href: 'https://www.samsung.com/us/smartphones/' },
      { label: 'Galaxy Tab', href: 'https://www.samsung.com/us/tablets/' },
      { label: 'Galaxy Book', href: 'https://www.samsung.com/us/computing/galaxy-books/' },
      { label: 'Galaxy Watch', href: 'https://www.samsung.com/us/mobile/galaxy-watch/' },
      { label: 'Galaxy Buds', href: 'https://www.samsung.com/us/mobile/audio/all-audio/' },
      { label: 'TVs', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/all-tvs/' },
      { label: 'Projectors', href: 'https://www.samsung.com/us/televisions-home-theater/projectors/' },
      { label: 'Sound Devices', href: 'https://www.samsung.com/us/televisions-home-theater/soundbars/' },
      { label: 'Refrigerators', href: 'https://www.samsung.com/us/home-appliances/refrigerators/' },
      { label: 'Dishwashers', href: 'https://www.samsung.com/us/home-appliances/dishwashers/' },
      { label: 'Laundry', href: 'https://www.samsung.com/us/home-appliances/washers/' },
      { label: 'Vacuum Cleaners', href: 'https://www.samsung.com/us/home-appliances/vacuums/' },
      { label: 'Monitors', href: 'https://www.samsung.com/us/computing/monitors/' },
      { label: 'Memory & Storage', href: 'https://www.samsung.com/us/computing/memory-storage/' },
      { label: 'Accessories', href: 'https://www.samsung.com/us/mobile/mobile-accessories/' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Support Home', href: 'https://www.samsung.com/us/support/' },
      { label: 'Manual & Software', href: 'https://www.samsung.com/us/support/downloads/' },
      { label: 'Warranty Information', href: 'https://www.samsung.com/us/support/warranty/' },
      { label: 'Service Center', href: 'https://www.samsung.com/us/support/service-center/' },
      { label: 'Request a Repair', href: 'https://www.samsung.com/us/support/repair/' },
      { label: 'Track Repair', href: 'https://www.samsung.com/us/support/repair/track/' },
      { label: 'Order Help', href: 'https://www.samsung.com/us/support/order/', external: true },
      { label: 'Returns', href: 'https://www.samsung.com/us/support/returns/', external: true },
      { label: 'Contact Us', href: 'https://www.samsung.com/us/support/contact/' },
      { label: 'Chat', href: 'https://www.samsung.com/us/support/contact/' },
      { label: 'Samsung Community', href: 'https://us.community.samsung.com/', external: true },
      { label: 'Slide-in Electric Range Recall', href: 'https://www.samsung.com/us/support/troubleshooting/recall/' },
      { label: 'How to Recycle', href: 'https://www.samsung.com/us/support/recycle/', external: true },
    ],
  },
  {
    title: 'ACCOUNT',
    links: [
      { label: 'Why Samsung Account', href: 'https://account.samsung.com/' },
      { label: 'Samsung Rewards', href: 'https://www.samsung.com/us/samsung-rewards/' },
      { label: 'Orders', href: 'https://www.samsung.com/us/web/account/orders/' },
      { label: 'My Page', href: 'https://www.samsung.com/us/web/account/' },
      { label: 'Product Registration', href: 'https://www.samsung.com/us/support/register/' },
      { label: 'Samsung Account FAQ', href: 'https://account.samsung.com/membership/faq' },
    ],
  },
]

const sustainabilityLinks = {
  title: 'SUSTAINABILITY',
  links: [
    { label: 'Overview', href: 'https://www.samsung.com/us/sustainability/' },
    { label: 'Environment', href: 'https://www.samsung.com/us/about-us/sustainability/environment/' },
    { label: 'Digital Responsibility', href: 'https://www.samsung.com/us/about-us/sustainability/digital-responsibility/' },
    { label: 'Security and Privacy', href: 'https://www.samsung.com/us/about-us/sustainability/security-and-privacy/' },
    { label: 'Accessibility', href: 'https://www.samsung.com/us/accessibility/' },
    { label: 'Labor & Human Rights', href: 'https://www.samsung.com/us/about-us/sustainability/labor-and-human-rights/' },
    { label: 'Belonging & Culture', href: 'https://www.samsung.com/us/about-us/sustainability/diversity-equity-inclusion/' },
    { label: 'Sustainable Supply Chain', href: 'https://www.samsung.com/us/about-us/sustainability/supply-chain/' },
    { label: 'Corporate Citizenship', href: 'https://www.samsung.com/us/about-us/sustainability/corporate-citizenship/', external: true },
    { label: 'Corporate Sustainability', href: 'https://www.samsung.com/global/sustainability/', external: true },
    { label: 'U.S. Sustainability', href: 'https://www.samsung.com/us/about-us/sustainability/' },
  ],
}

const aboutUsLinks = {
  title: 'ABOUT US',
  links: [
    { label: 'Leadership & Mission', href: 'https://www.samsung.com/us/about-us/' },
    { label: 'Our Business', href: 'https://www.samsung.com/us/about-us/our-business/' },
    { label: 'Brand Identity', href: 'https://www.samsung.com/us/about-us/brand-identity/' },
    { label: 'Careers', href: 'https://www.samsung.com/us/about-us/careers/' },
    { label: 'Investor Relations', href: 'https://www.samsung.com/us/about-us/investor-relations/', external: true },
    { label: 'Newsroom', href: 'https://news.samsung.com/us/', external: true },
    { label: 'Ethics', href: 'https://www.samsung.com/us/about-us/ethics/' },
    { label: 'Samsung Design', href: 'https://design.samsung.com/', external: true },
  ],
}

const legalLinks = [
  { label: 'Privacy', href: 'https://www.samsung.com/us/account/register/privacy-policy/' },
  { label: 'Do Not Sell Or Share My Personal Information', href: 'https://www.samsung.com/us/account/register/privacy-policy/' },
  { label: 'Consumer Health Data Privacy Statement', href: 'https://www.samsung.com/us/account/register/privacy-policy/' },
  { label: 'Legal', href: 'https://www.samsung.com/us/support/legal/' },
  { label: 'Accessibility Help', href: 'https://www.samsung.com/us/accessibility/' },
  { label: 'Sitemap', href: 'https://www.samsung.com/us/support/sitemap/' },
]

/* Outlink arrow ikonu — ↗ */
const OutlinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 96 96" fill="currentColor" className="inline-block ml-[3px] opacity-50" style={{ verticalAlign: 'middle', marginTop: '-2px' }}>
    <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z" />
  </svg>
)

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (title) => {
    setOpenSection(prev => prev === title ? null : title)
  }

  return (
    <footer className="samsung-footer bg-white text-[#1d1d1d]">

      {/* ==================== ƏSAS LİNKLƏR ==================== */}
      <div
        ref={ref}
        className="samsung-footer__links"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-0 lg:py-12">
          
          {/* ==================== MOBIL ACCORDION GÖRÜNÜŞ (lg-ya qədər) ==================== */}
          <div className="block lg:hidden w-full">
            {footerColumns.map((col) => (
              <div key={col.title} className="border-b border-[#e0e0e0] last:border-b-0">
                <button
                  onClick={() => toggleSection(col.title)}
                  className="w-full py-[18px] flex items-center justify-between text-left focus:outline-none"
                >
                  <h4 className="text-[14px] font-bold text-[#1d1d1d] tracking-[0.04em]">{col.title}</h4>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                    className={`transition-transform duration-300 ${openSection === col.title ? 'rotate-180' : ''}`}
                  >
                    <path d="M19 9l-7 7-7-7" stroke="#1d1d1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSection === col.title ? 'max-h-[800px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-[12px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank" rel="noopener noreferrer"
                          className="text-[13px] text-[#535353] hover:text-[#1d1d1d] transition-colors duration-200 leading-snug"
                        >
                          {link.label}
                          {link.external && <OutlinkIcon />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* SUSTAINABILITY bölməsi mobil üçün */}
            <div className="border-b border-[#e0e0e0] last:border-b-0">
              <button
                onClick={() => toggleSection(sustainabilityLinks.title)}
                className="w-full py-[18px] flex items-center justify-between text-left focus:outline-none"
              >
                <h4 className="text-[14px] font-bold text-[#1d1d1d] tracking-[0.04em]">{sustainabilityLinks.title}</h4>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  className={`transition-transform duration-300 ${openSection === sustainabilityLinks.title ? 'rotate-180' : ''}`}
                >
                  <path d="M19 9l-7 7-7-7" stroke="#1d1d1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === sustainabilityLinks.title ? 'max-h-[800px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-[12px]">
                  {sustainabilityLinks.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank" rel="noopener noreferrer"
                        className="text-[13px] text-[#535353] hover:text-[#1d1d1d] transition-colors duration-200 leading-snug"
                      >
                        {link.label}
                        {link.external && <OutlinkIcon />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ABOUT US bölməsi mobil üçün */}
            <div className="border-b border-[#e0e0e0] last:border-b-0">
              <button
                onClick={() => toggleSection(aboutUsLinks.title)}
                className="w-full py-[18px] flex items-center justify-between text-left focus:outline-none"
              >
                <h4 className="text-[14px] font-bold text-[#1d1d1d] tracking-[0.04em]">{aboutUsLinks.title}</h4>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  className={`transition-transform duration-300 ${openSection === aboutUsLinks.title ? 'rotate-180' : ''}`}
                >
                  <path d="M19 9l-7 7-7-7" stroke="#1d1d1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === aboutUsLinks.title ? 'max-h-[800px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-[12px]">
                  {aboutUsLinks.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank" rel="noopener noreferrer"
                        className="text-[13px] text-[#535353] hover:text-[#1d1d1d] transition-colors duration-200 leading-snug"
                      >
                        {link.label}
                        {link.external && <OutlinkIcon />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ==================== DESKTOP GRID GÖRÜNÜŞ (lg-dən yuxarı) ==================== */}
          <div className="hidden lg:grid grid-cols-5 border-t border-[#e0e0e0]">
            
            {/* SHOP, PRODUCT, SUPPORT, ACCOUNT sütunları */}
            {footerColumns.map((col, index) => (
              <div 
                key={col.title} 
                className={`py-8 px-6 ${index < footerColumns.length ? 'border-r border-[#e0e0e0]' : ''}`}
              >
                <h4 className="text-[13px] font-extrabold text-[#1d1d1d] mb-6 tracking-[0.06em] uppercase">{col.title}</h4>
                <ul className="space-y-[12px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank" rel="noopener noreferrer"
                        className="text-[13px] text-[#1d1d1d] hover:underline transition-colors duration-200 leading-snug flex items-center justify-between"
                      >
                        {link.label}
                        {link.external && <OutlinkIcon />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* SUSTAINABILITY + ABOUT US (Son 5ci sütunda) */}
            <div className="py-8 px-6">
              <h4 className="text-[13px] font-extrabold text-[#1d1d1d] mb-6 tracking-[0.06em] uppercase">{sustainabilityLinks.title}</h4>
              <ul className="space-y-[12px]">
                {sustainabilityLinks.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank" rel="noopener noreferrer"
                      className="text-[13px] text-[#1d1d1d] hover:underline transition-colors duration-200 leading-snug flex items-center justify-between"
                    >
                      {link.label}
                      {link.external && <OutlinkIcon />}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ABOUT US */}
              <h4 className="text-[13px] font-extrabold text-[#1d1d1d] mt-10 mb-6 tracking-[0.06em] uppercase">{aboutUsLinks.title}</h4>
              <ul className="space-y-[12px]">
                {aboutUsLinks.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank" rel="noopener noreferrer"
                      className="text-[13px] text-[#1d1d1d] hover:underline transition-colors duration-200 leading-snug flex items-center justify-between"
                    >
                      {link.label}
                      {link.external && <OutlinkIcon />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== COPYRİGHT + APP BÖLMƏSI ==================== */}
      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[13px] text-[#767676] leading-relaxed">
            Copyright© 1995-2024 SAMSUNG. All Rights Reserved.
          </p>

          {/* Never miss a thing + Get Shop Samsung App */}
          <div className="flex items-center gap-3">
            {/* Never miss a thing */}
            <a
              href="https://www.samsung.com/us/shop/samsung-app/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1d1d1d] rounded-2xl px-5 py-3 hover:bg-[#333] transition-colors duration-200 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#1428A0] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">Never miss a thing</p>
                <p className="text-[10px] text-white/60 leading-tight">Sign up for texts to be notified<br />about our best offers.</p>
              </div>
            </a>

            {/* Get Shop Samsung App */}
            <a
              href="https://www.samsung.com/us/shop/samsung-app/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1d1d1d] rounded-2xl px-5 py-3 hover:bg-[#333] transition-colors duration-200 group"
            >
              <img
                src="/images/Footer_GetShopApp_082025.png"
                alt="Samsung Shop App"
                className="w-9 h-9 object-contain flex-shrink-0 rounded"
                loading="lazy"
              />
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">Get Shop</p>
                <p className="text-[13px] font-bold text-white leading-tight">Samsung App</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ==================== ALT LEGAL + SOSİAL BÖLMƏ ==================== */}
      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-0">
            <span className="text-[13px] font-bold text-[#1d1d1d] mr-4">USA/ENGLISH</span>
            <span className="text-[#d4d4d4] mx-0 hidden md:inline">|</span>
            {legalLinks.map((link, i) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[13px] text-[#1d1d1d] hover:underline transition-colors duration-200 px-3 py-1"
                >
                  {link.label}
                </a>
                {i < legalLinks.length - 1 && (
                  <span className="text-[#d4d4d4] hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* STAY IN THE LOOP + Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#767676] tracking-[0.1em] uppercase whitespace-nowrap font-bold">Stay in the loop?</span>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/SamsungUS" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1d1d1d] hover:text-[#1428A0] transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 96 96" fill="currentColor">
                  <path d="M92 48.267c0-24.3-19.699-44-44-44s-44 19.7-44 44C4 70.23 20.09 88.433 41.125 91.733V60.987H29.953v-12.72h11.172v-9.694c0-11.026 6.569-17.117 16.619-17.117 4.815 0 9.85.858 9.85.858v10.828h-5.549c-5.465 0-7.17 3.392-7.17 6.871v8.255h12.203l-1.951 12.718H54.875v30.747C75.91 88.433 92 70.228 92 48.267" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://twitter.com/SamsungUS" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-[#1d1d1d] hover:text-[#1428A0] transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M27.7 21L42.3 4h-3.5L26.2 18.7 16.1 4H4.4l15.3 22.2L4.4 44h3.4l13.4-15.5L31.9 44h11.6L27.7 21zM23 26.5l-1.5-2.2L9.1 6.6h5.3l9.9 14.2 1.5 2.2 12.9 18.5h-5.3L23 26.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/samsungus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#1d1d1d] hover:text-[#1428A0] transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 96 96" fill="currentColor">
                  <path d="M41.56 5.004h12.88c6.046.022 7.725.088 11.289.25 4.577.21 7.703.936 10.438 1.999 2.827 1.099 5.225 2.57 7.616 4.96 2.39 2.39 3.86 4.789 4.96 7.616 1.019 2.625 1.73 5.611 1.97 9.896l.15 3.428c.101 2.775.133 5.555.136 13.312l-.009 8.204c-.022 5.858-.088 7.54-.25 11.056-.208 4.577-.935 7.703-1.997 10.438-1.1 2.827-2.57 5.225-4.96 7.616-2.391 2.39-4.79 3.86-7.616 4.96-2.626 1.02-5.612 1.73-9.896 1.97l-3.429.15c-2.775.102-5.555.133-13.312.137l-8.204-.01c-5.857-.022-7.538-.088-11.055-.25-4.577-.208-7.703-.934-10.438-1.997-2.827-1.1-5.225-2.57-7.616-4.96-2.39-2.391-3.861-4.79-4.96-7.616-1.02-2.626-1.73-5.612-1.97-9.896l-.12-2.62c-.119-2.915-.159-5.323-.166-12.71l.007-9.381c.021-6.047.087-7.726.25-11.29.21-4.576.937-7.702 1.999-10.437 1.099-2.827 2.57-5.225 4.96-7.616 2.39-2.39 4.789-3.861 7.616-4.96 2.625-1.02 5.611-1.73 9.895-1.97l2.621-.12c2.397-.097 4.45-.142 9.21-.159zm13.468 7.75H40.971c-5.353.023-6.969.087-10.347.24-4.192.192-6.47.892-7.984 1.48-2.007.78-3.44 1.713-4.944 3.218-1.505 1.504-2.437 2.937-3.217 4.944l-.186.496c-.522 1.452-1.079 3.56-1.274 7.062l-.138 3.177c-.09 2.447-.123 4.828-.131 10.757l.008 10.896c.022 5.353.086 6.969.24 10.347.192 4.193.892 6.47 1.48 7.985.78 2.007 1.713 3.44 3.218 4.944 1.504 1.505 2.937 2.437 4.944 3.217l.495.186c1.395.5 3.393 1.034 6.648 1.247l.84.047c4.328.197 5.764.247 15.872.25l8.475-.01c5.4-.022 7.015-.085 10.406-.24l.84-.047c3.662-.24 5.733-.885 7.144-1.433 2.007-.78 3.44-1.712 4.944-3.217 1.505-1.504 2.437-2.937 3.217-4.944l.185-.496c.522-1.453 1.079-3.56 1.274-7.062l.136-3.131c.091-2.466.125-4.84.133-10.814l-.008-10.827c-.022-5.4-.085-7.015-.24-10.405-.191-4.193-.891-6.47-1.48-7.985-.78-2.007-1.712-3.44-3.217-4.944-1.504-1.505-2.937-2.437-4.944-3.217l-.496-.186c-1.453-.522-3.56-1.078-7.062-1.273l-3.36-.145c-1.896-.068-3.806-.101-7.414-.117zM48 25.914c12.195 0 22.08 9.886 22.08 22.082 0 12.194-9.885 22.081-22.08 22.081-12.195 0-22.081-9.887-22.081-22.08 0-12.197 9.886-22.083 22.08-22.083zm0 7.748c-7.916 0-14.333 6.417-14.333 14.334 0 7.916 6.417 14.333 14.333 14.333s14.333-6.417 14.333-14.333c0-7.917-6.417-14.334-14.333-14.334zm22.953-13.78a5.16 5.16 0 110 10.32 5.16 5.16 0 010-10.32z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/user/SamsungMobileUS" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#1d1d1d] hover:text-[#1428A0] transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 96 96" fill="currentColor">
                  <path d="M46.415 15.003h3.174c6.211.033 28.834.27 35.138 1.965a11.79 11.79 0 018.31 8.336c1.662 6.217 1.918 18.146 1.958 21.682l.003 1.712c-.028 3.084-.247 15.579-1.96 21.994a11.793 11.793 0 01-8.311 8.336c-6.89 1.851-33.277 1.962-36.419 1.97l-3.137-.014c-7.542-.058-27.956-.36-33.894-1.956a11.794 11.794 0 01-8.311-8.336c-1.849-6.921-1.957-20.917-1.964-22.54l.01-1.364c.046-3.763.323-15.378 1.954-21.484a11.793 11.793 0 018.31-8.336c6.305-1.695 28.928-1.932 35.139-1.965zm-8.262 18.66V62.33l25.28-14.332-25.28-14.334z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
