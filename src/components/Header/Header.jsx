import React, { useState, useEffect, useRef } from 'react'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import SearchModal from '../Modals/SearchModal'
import CartDrawer from '../Cart/CartDrawer'

const navItems = [
  {
    label: 'Shop',
    mega: {
      categories: [
        { label: 'Galaxy S26 Ultra', img: '/images/us-galaxy-s26-ultra-s948-sm-s948uzvaxaa-550993934.webp', href: 'https://www.samsung.com/us/smartphones/galaxy-s/', isNew: true },
        { label: 'Galaxy Buds4 Pro', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/mobile-audio/', isNew: true },
        { label: 'Galaxy Z Fold7', img: '/images/HOME_Feature-Card_Galaxy-Z-Fold7_560x560.jpg', href: 'https://www.samsung.com/us/smartphones/galaxy-z-fold/' },
        { label: 'Galaxy Tab S11 Series', img: '/images/HOME_Feature-Card_Galaxy-Tab-S11U_560x560.jpg', href: 'https://www.samsung.com/us/tablets/' },
        { label: 'Galaxy Watch8', img: '/images/HOME_Feature-Card_Galaxy-Watch8_560x560.jpg', href: 'https://www.samsung.com/us/mobile/galaxy-watch/' },
        { label: 'Galaxy Z Flip7', img: '/images/HOME_Feature-Card_Galaxy-S26-S26-plus_560x560.jpg', href: 'https://www.samsung.com/us/smartphones/galaxy-z-flip/' },
        { label: 'Neo QLED 8K TV', img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/neo-qled-8k/' },
        { label: 'The Frame Pro', img: '/images/SDSAC-9810-Frame-Pro-HP-FeaturedCard-560x560.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/' },
        { label: 'Q-series Soundbar', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/televisions-home-theater/soundbars/' },
        { label: 'Odyssey Neo G9 Curved Monitor', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/gaming/' },
        { label: 'Bespoke with AI Family Hub™+', img: '/images/SDSAC-9955-Bespoke-Refrigerator-HP-Product-tile-560x560.jpg', href: 'https://www.samsung.com/us/home-appliances/refrigerators/' },
        { label: 'Bespoke AI Vented Laundry Combo™', img: '/images/SDSAC-10185-WD90F53AVSUS-HP-FeaturedProductCard-560x560.jpg', href: 'https://www.samsung.com/us/home-appliances/washers-and-dryers/' },
        { label: 'Bespoke Slide-in Gas Range', img: '/images/SDSAC-10185-NV51CB700S12AA-HP-FeaturedProductCard-560x560.jpg', href: 'https://www.samsung.com/us/home-appliances/ranges/' },
        { label: 'Bespoke Smart 3rd Rack Dishwasher', img: '/images/DW80CG5450SR_01_Stainless_Steel_SCOM.jpg', href: 'https://www.samsung.com/us/home-appliances/dishwashers/' },
      ],
      discover: [
        { label: 'Buy Direct Get More', href: 'https://www.samsung.com/us/why-buy-direct/' },
        { label: 'Discover the next Galaxy Book', href: 'https://www.samsung.com/us/computing/galaxy-books/' },
        { label: 'SmartThings', href: 'https://www.samsung.com/us/smartthings/' },
        { label: 'Samsung Rewards', href: 'https://www.samsung.com/us/rewards/' },
        { label: 'Samsung Offer Programs', href: 'https://www.samsung.com/us/shop/offer-program/' },
        { label: 'Samsung Experience Stores', href: 'https://www.samsung.com/us/samsung-experience-store/' },
        { label: '2026 Innovation Signup', href: 'https://www.samsung.com/us/smartphones/the-next-galaxy/' },
      ]
    }
  },
  {
    label: 'Mobile',
    mega: {
      categories: [
        { label: 'Galaxy Smartphones', img: '/images/us-galaxy-s26-ultra-s948-sm-s948uzvaxaa-550993934.webp', href: 'https://www.samsung.com/us/smartphones/', isNew: true },
        { label: 'Galaxy Tab', img: '/images/HOME_Feature-Card_Galaxy-Tab-S11U_560x560.jpg', href: 'https://www.samsung.com/us/tablets/' },
        { label: 'Galaxy Book', img: '/images/GB4Ultra_16_US_Copilot_Moonstone-Gray_001_Front-1600x1200.jpg', href: 'https://www.samsung.com/us/computing/galaxy-books/' },
        { label: 'Galaxy Watch', img: '/images/HOME_Feature-Card_Galaxy-Watch8_560x560.jpg', href: 'https://www.samsung.com/us/mobile/galaxy-watch/' },
        { label: 'Galaxy Buds', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/mobile-audio/all-galaxy-buds/', isNew: true },
        { label: 'Galaxy Ring', img: '/images/SDSAC-9975-250_Venus5_16-216x216.png', href: 'https://www.samsung.com/us/mobile/galaxy-ring/' },
        { label: 'Galaxy XR', img: '/images/HOME_Explore-Card_Switch-to-Galaxy_PC_312x312.jpg', href: 'https://www.samsung.com/us/mobile/xr/' },
        { label: 'Galaxy Accessories', img: '/images/us-25w-power-adapter-ep-t2510-ep-t2510nbegus-000.jpg', href: 'https://www.samsung.com/us/mobile/mobile-accessories/', isNew: true },
        { label: 'Certified Re-Newed', img: '/images/HOME_Explore-Card_One-UI_PC_312x312.jpg', href: 'https://www.samsung.com/us/smartphones/certified-re-newed-phones/' },
      ],
      discover: [
        { label: 'All about Galaxy', href: 'https://www.samsung.com/us/explore/galaxy/' },
        { label: 'Galaxy AI', href: 'https://www.samsung.com/us/ai-products/' },
        { label: 'Find Your Galaxy', href: 'https://www.samsung.com/us/smartphones/compare/' },
        { label: 'Switch To Galaxy', href: 'https://www.samsung.com/us/smartphones/switch/' },
        { label: 'One UI', href: 'https://www.samsung.com/us/explore/one-ui/' },
        { label: 'Samsung Health', href: 'https://www.samsung.com/us/apps/samsung-health/' },
        { label: 'Apps & Service', href: 'https://www.samsung.com/us/apps/' },
        { label: 'Samsung Trade-In', href: 'https://www.samsung.com/us/trade-in/' },
        { label: 'Samsung Care+', href: 'https://www.samsung.com/us/support/samsung-care-plus/' },
      ]
    }
  },
  {
    label: 'TV & AV',
    mega: {
      categories: [
        { label: 'The Frame', img: '/images/us-the-frame-ls03fw-qn65ls03fwfxza-546242603.png', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/' },
        { label: 'Neo QLED', img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/neo-qled-8k/' },
        { label: 'OLED', img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/oled-tvs/' },
        { label: 'QLED', img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/qled-4k-tvs/' },
        { label: 'Crystal UHD', img: '/images/SDSAC-9810-OLEDS90-HP-FeaturedCard-560x560.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/crystal-uhd-tvs/' },
        { label: 'The Movingstyle', img: '/images/TheMovingstyle_GNB_V3.png', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-serif/' },
        { label: 'Micro RGB', img: '/images/GNB_Micro_RGB.png', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/micro-led/' },
        { label: 'The Terrace', img: '/images/us-the-frame-ls03fw-qn65ls03fwfxza-546242603.png', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-terrace/' },
        { label: 'Sound Devices', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/televisions-home-theater/soundbars/' },
        { label: 'JBL Audio', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/televisions-home-theater/soundbars/' },
        { label: 'Projectors', img: '/images/HOME_Explore-Card_Unpacked-Replay_PC_312x312.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/projectors/' },
        { label: 'TV Accessories', img: '/images/WMN-D90EB_001_Front-Set-1_Black_88x88.png', href: 'https://www.samsung.com/us/televisions-home-theater/tv-accessories/' },
        { label: 'Audio Accessories', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/mobile/mobile-accessories/audio/' },
      ],
      discover: [
        { label: 'Samsung Vision AI', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/' },
        { label: 'MICRO LED', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/micro-led/' },
        { label: 'Why OLED TVs', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/oled-tvs/' },
        { label: 'Why Neo QLED TVs', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/neo-qled-8k/' },
        { label: 'Why The Frame TVs', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/the-frame/' },
        { label: 'TV Buying Guide', href: 'https://www.samsung.com/us/televisions-home-theater/tvs/buying-guide/' },
        { label: 'Soundbar Buying Guide', href: 'https://www.samsung.com/us/televisions-home-theater/soundbars/buying-guide/' },
        { label: 'TV & Audio Offers', href: 'https://www.samsung.com/us/shop/all-deals/tv-and-home-theater-deals/' },
      ]
    }
  },
  {
    label: 'Appliances',
    mega: {
      categories: [
        { label: 'Refrigerators', img: '/images/Refrigerators.png', href: 'https://www.samsung.com/us/home-appliances/refrigerators/' },
        { label: 'Wall Ovens', img: '/images/Wall-Ovens.png', href: 'https://www.samsung.com/us/home-appliances/wall-ovens/' },
        { label: 'Ranges', img: '/images/Ranges.png', href: 'https://www.samsung.com/us/home-appliances/ranges/' },
        { label: 'Cooktops & Hoods', img: '/images/Cooktops-and_Hoods.png', href: 'https://www.samsung.com/us/home-appliances/cooktops-and-hoods/' },
        { label: 'Microwaves', img: '/images/Microwaves.png', href: 'https://www.samsung.com/us/home-appliances/microwaves/' },
        { label: 'Dishwashers', img: '/images/Dishwashers.png', href: 'https://www.samsung.com/us/home-appliances/dishwashers/' },
        { label: 'Washers', img: '/images/Washers.png', href: 'https://www.samsung.com/us/home-appliances/washers/' },
        { label: 'Dryers', img: '/images/Dryers.png', href: 'https://www.samsung.com/us/home-appliances/dryers/' },
        { label: 'Vacuums', img: '/images/Vacuums.png', href: 'https://www.samsung.com/us/home-appliances/vacuums/' },
        { label: 'Appliance Accessories', img: '/images/Appliance-Accessories.png', href: 'https://www.samsung.com/us/home-appliances/home-appliance-accessories/' },
      ],
      discover: [
        { label: '2026 Innovation Signup', href: 'https://www.samsung.com/us/home-appliances/' },
        { label: 'Bespoke AI', href: 'https://www.samsung.com/us/home-appliances/bespoke/' },
        { label: 'SmartThings for Appliances', href: 'https://www.samsung.com/us/smartthings/' },
        { label: 'Why Samsung Appliances', href: 'https://www.samsung.com/us/home-appliances/' },
        { label: 'Home Appliance Buying Guides', href: 'https://www.samsung.com/us/home-appliances/buying-guides/' },
        { label: 'Explore Refrigerators', href: 'https://www.samsung.com/us/home-appliances/refrigerators/' },
        { label: 'Explore Laundry', href: 'https://www.samsung.com/us/home-appliances/washers-and-dryers/' },
        { label: 'Appliance Offers', href: 'https://www.samsung.com/us/shop/all-deals/home-appliances-deals/' },
      ]
    }
  },
  {
    label: 'Computers & Monitors',
    mega: {
      categories: [
        { label: 'Galaxy Book & Laptop', img: '/images/GB4Ultra_16_US_Copilot_Moonstone-Gray_001_Front-1600x1200.jpg', href: 'https://www.samsung.com/us/computing/galaxy-books/' },
        { label: 'Gaming Monitors', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/gaming/' },
        { label: 'High Resolution Monitors', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/high-resolution/' },
        { label: 'Smart Monitors', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/smart-monitors/' },
        { label: 'Ultra-Wide Monitors', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/ultra-wide/' },
        { label: 'Curved Monitors', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/curved/' },
        { label: 'Monitors', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/computing/monitors/' },
        { label: 'Memory & Storage', img: '/images/HOME_Feature-Card_Galaxy-Tab-S11U_560x560.jpg', href: 'https://www.samsung.com/us/computing/memory-storage/' },
        { label: 'Displays for Business ↗', img: '/images/SDSAC-10328-RE9-LS49DG956SNXGO-HP-Featured-Product-Card-DT-MB-560x560.jpg', href: 'https://www.samsung.com/us/business/displays/' },
      ],
      discover: [
        { label: 'Copilot+ PCs', href: 'https://www.samsung.com/us/computing/galaxy-books/copilot-pcs/' },
        { label: 'Upgrade to Windows 11', href: 'https://www.samsung.com/us/computing/windows-11/' },
        { label: 'Monitor Offers', href: 'https://www.samsung.com/us/shop/all-deals/monitors-deals/' },
        { label: 'Memory Gaming', href: 'https://www.samsung.com/us/computing/memory-storage/' },
        { label: 'Why Samsung Monitors', href: 'https://www.samsung.com/us/computing/monitors/why-samsung/' },
        { label: 'Why Smart Monitor', href: 'https://www.samsung.com/us/computing/monitors/smart-monitors/why-smart-monitor/' },
        { label: 'Why Odyssey Gaming Monitor', href: 'https://www.samsung.com/us/computing/monitors/gaming/why-odyssey/' },
        { label: 'Monitor Buying Guide', href: 'https://www.samsung.com/us/computing/monitors/buying-guide/' },
      ]
    }
  },
  {
    label: 'Wearables',
    mega: {
      categories: [
        { label: 'Galaxy Watch', img: '/images/HOME_Feature-Card_Galaxy-Watch8_560x560.jpg', href: 'https://www.samsung.com/us/watches/' },
        { label: 'Galaxy Buds', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/audio/', isNew: true },
        { label: 'Galaxy Ring', img: '/images/SDSAC-9975-250_Venus5_16-216x216.png', href: 'https://www.samsung.com/us/ring/' },
        { label: 'Galaxy XR', img: '/images/HOME_Explore-Card_Switch-to-Galaxy_PC_312x312.jpg', href: 'https://www.samsung.com/us/xr/' },
      ],
      discover: [
        { label: 'Samsung Health', href: 'https://www.samsung.com/us/apps/samsung-health/' },
        { label: 'Galaxy AI', href: 'https://www.samsung.com/us/ai-products/' },
        { label: 'Apps & Service', href: 'https://www.samsung.com/us/apps/' },
        { label: 'Why Galaxy', href: 'https://www.samsung.com/us/explore/galaxy/' },
        { label: 'Switch To Galaxy', href: 'https://www.samsung.com/us/smartphones/switch/' },
        { label: 'Samsung Trade-In', href: 'https://www.samsung.com/us/trade-in/' },
      ]
    }
  },
  {
    label: 'Audio',
    mega: {
      categories: [
        { label: 'Galaxy Buds', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/audio/', isNew: true },
        { label: 'JBL Headphones', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/audio/jbl/' },
        { label: 'JBL Gaming Headsets', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/audio/jbl-gaming/' },
        { label: 'JBL Portable Speakers', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/audio/jbl-portable/' },
        { label: 'Sound Devices', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/televisions-home-theater/soundbars/' },
        { label: 'Party Speakers', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/audio/party-speakers/' },
      ],
      discover: []
    }
  },
  {
    label: 'Accessories',
    mega: {
      categories: [
        { label: 'Galaxy Smartphone Accessories', img: '/images/us-25w-power-adapter-ep-t2510-ep-t2510nbegus-000.jpg', href: 'https://www.samsung.com/us/mobile/mobile-accessories/phones/', isNew: true },
        { label: 'Galaxy Tab Accessories', img: '/images/us-25w-power-adapter-ep-t2510-ep-t2510nbegus-000.jpg', href: 'https://www.samsung.com/us/mobile/mobile-accessories/tablets/' },
        { label: 'Galaxy Watch Accessories', img: '/images/us-25w-power-adapter-ep-t2510-ep-t2510nbegus-000.jpg', href: 'https://www.samsung.com/us/mobile/mobile-accessories/smartwatches/' },
        { label: 'Galaxy Buds Accessories', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/mobile/mobile-accessories/buds/', isNew: true },
        { label: 'SmartTag', img: '/images/us-25w-power-adapter-ep-t2510-ep-t2510nbegus-000.jpg', href: 'https://www.samsung.com/us/mobile/mobile-accessories/smarttags/' },
        { label: 'TV Accessories', img: '/images/WMN-D90EB_001_Front-Set-1_Black_88x88.png', href: 'https://www.samsung.com/us/televisions-home-theater/tv-accessories/' },
        { label: 'Audio Accessories', img: '/images/SEA_GNB_L0_Audio_216x216.png', href: 'https://www.samsung.com/us/mobile/mobile-accessories/audio/' },
        { label: 'Projector Accessories', img: '/images/HOME_Explore-Card_Unpacked-Replay_PC_312x312.jpg', href: 'https://www.samsung.com/us/televisions-home-theater/projector-accessories/' },
        { label: 'Refrigerator Accessories', img: '/images/Refrigerators.png', href: 'https://www.samsung.com/us/home-appliances/home-appliance-accessories/refrigerators/' },
        { label: 'Vacuum Cleaner Accessories', img: '/images/Vacuums.png', href: 'https://www.samsung.com/us/home-appliances/home-appliance-accessories/vacuums/' },
        { label: 'Washer & Dryer Accessories', img: '/images/Washers.png', href: 'https://www.samsung.com/us/home-appliances/home-appliance-accessories/washers/' },
      ],
      discover: []
    }
  },
]

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const menuRef = useRef(null)
  const timeoutRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 10)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false) // Aşağı scroll edirik və 100px keçmişik
      } else {
        setIsVisible(true) // Yuxarı scroll edirik və ya başlanğıcdayıq
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') { setMobileOpen(false); setSearchOpen(false); setActiveMenu(null) } }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMenuEnter = (label) => {
    clearTimeout(timeoutRef.current)
    setActiveMenu(label)
  }

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? 'header-solid' : 'header-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Yuxarı utility bar — Support, For Business */}
        <div className="gnb-utility-bar hidden md:block">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-end h-[40px] gap-5">
            <a
              href="https://www.samsung.com/us/support/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white text-[13px] font-bold tracking-[0.01em] transition-colors duration-200"
            >
              Support
            </a>
            <a
              href="https://www.samsung.com/us/business/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white text-[13px] font-bold tracking-[0.01em] transition-colors duration-200 inline-flex items-center gap-[3px]"
            >
              For Business
              <svg width="11" height="11" viewBox="0 0 96 96" fill="currentColor" className="opacity-80">
                <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Əsas navbar */}
        <div className="gnb-main-bar">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center h-[52px]">
            {/* Samsung Loqo */}
            <a href="https://www.samsung.com/us/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mr-10 relative z-50">
              <span className="text-white text-[20px] md:text-[24px] font-bold tracking-[0.1em] font-['SamsungOne']">SAMSUNG</span>
            </a>

            {/* Desktop Nav Linkləri */}
            <nav className="hidden lg:flex items-center gap-0 flex-1" ref={menuRef}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="group"
                  onMouseEnter={() => handleMenuEnter(item.label)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className={`gnb-nav-link px-[14px] py-[14px] text-[14px] font-bold tracking-[0.01em] transition-colors duration-200 whitespace-nowrap ${
                      activeMenu === item.label ? 'text-white' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeMenu === item.label && item.mega && (
                    <MegaMenu
                      data={item.mega}
                      onMouseEnter={() => clearTimeout(timeoutRef.current)}
                      onMouseLeave={handleMenuLeave}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* Sağ tərəf — Search, Cart, Account */}
            <div className="flex items-center gap-[6px] ml-auto">
              {/* Search Input / Button */}
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-[6px] text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="p-[6px] text-white hover:text-white/80 transition-colors duration-200 relative"
                aria-label="Cart"
              >
                <svg width="18" height="18" viewBox="0 0 96 96" fill="currentColor">
                  <path d="M72.817 71.324c5.522 0 10 4.478 10 10 0 5.524-4.477 10-10 10s-10-4.476-10-10c0-5.522 4.477-10 10-10zm-34.946 0c5.523 0 10 4.478 10 10 0 5.524-4.477 10-10 10-5.522 0-10-4.476-10-10 0-5.521 4.479-10 10-10zm34.946 5a5.001 5.001 0 000 10 5 5 0 100-10zm-34.946 0a5 5 0 10.001 9.999 5 5 0 00-.001-9.999zM13.674 5c1.62 0 3.11 1.117 3.6 2.648l.054.186 3.208 12.292h70.035c2.126 0 3.61 1.88 3.194 3.914l-.041.18-9.398 36.292c-.405 1.566-1.849 2.747-3.459 2.835l-.194.006H29.57c-1.619 0-3.11-1.118-3.6-2.65l-.054-.185L12.725 10l-11.614.007-.002-5L13.674 5zm74.65 20.126H21.842l8.674 33.226H79.72l8.604-33.226z" />
                </svg>
              </button>

              {/* Account */}
              <a
                href="https://account.samsung.com/iam/oauth2/authorize?client_id=kv5di1wr19&redirect_uri=https%3A%2F%2Fwww.samsung.com%2Faemapi%2Fv6%2Fdata-login%2FafterLogin.us.json&response_type=code&scope=&state=GLBtv9r9by&locale=en-US"
                target="_blank" rel="noopener noreferrer"
                className="p-[6px] text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Account"
              >
                <svg width="18" height="18" viewBox="0 0 96 96" fill="currentColor">
                  <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)" />
                </svg>
              </a>

              {/* Hamburger (Mobil) */}
              <button
                className="lg:hidden p-[6px] text-white hover:text-white/80 transition-colors duration-200 ml-1"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <div className="flex flex-col gap-[4px] w-[18px]">
                  <span className="block h-[1.5px] w-full bg-current transition-all duration-300"></span>
                  <span className="block h-[1.5px] w-full bg-current transition-all duration-300"></span>
                  <span className="block h-[1.5px] w-[14px] bg-current transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega menu overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          style={{ top: '80px' }}
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
      )}
      {/* Modals & Drawers */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Header
