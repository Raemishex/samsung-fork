import React, { useState } from 'react';

const ImageWithSkeleton = ({ src, alt, className = "", imgClassName = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full flex justify-center items-center ${className}`}>
      {/* Skeleton / Placeholder (animate-pulse) */}
      <div 
        className={`absolute inset-0 w-full h-full bg-gray-200/60 rounded-xl animate-pulse transition-opacity duration-500 ${loaded ? 'opacity-0 z-0' : 'opacity-100 z-10'}`} 
      />
      
      {/* Şəkil */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-contain mix-blend-multiply drop-shadow-sm transition-all duration-700 relative z-20 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${imgClassName}`}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
