import React from 'react'

const MegaMenu = ({ data, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-2xl z-[100] border-t border-gray-100/50 animate-fade-in origin-top max-h-[85vh] overflow-y-auto custom-scrollbar"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 flex cursor-default">
        {/* Sol Tərəf - Kateqoriyalar (Şəkilli Grid) */}
        <div className="flex-1 pr-8 lg:pr-16">
          {data.categories && (
            <div className="flex flex-wrap gap-x-6 gap-y-10 border-b border-transparent pb-4">
              {data.categories.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center text-center relative w-[90px] md:w-[100px]"
                >
                  {item.isNew && (
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] font-bold text-[#1428a0] uppercase tracking-wider mb-1">
                      New
                    </span>
                  )}
                  <div className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] flex items-center justify-center mb-4 mt-2">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[12px] md:text-[13px] font-bold text-[#1d1d1d] transition-colors leading-tight group-hover:underline decoration-2 underline-offset-4">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Sağ Tərəf - DISCOVER */}
        {data.discover && data.discover.length > 0 && (
          <div className="w-[260px] lg:w-[300px] flex-shrink-0 border-l border-[#e0e0e0] pl-8 lg:pl-10">
            <h3 className="text-[13px] text-[#535353] uppercase tracking-widest font-bold mb-5">
              Discover
            </h3>
            <ul className="space-y-[14px]">
              {data.discover.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-[14px] text-[#1d1d1d] hover:font-bold hover:underline transition-all block leading-snug"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MegaMenu
