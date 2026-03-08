import React from 'react'

const SkeletonLoader = ({ type = 'product' }) => {
  const shimmerClass = "relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

  if (type === 'hero') {
    return (
      <div className={`w-full ${shimmerClass}`} style={{ height: 'calc(100vh - 92px)', minHeight: '560px' }}>
        <div className="w-full h-full flex items-end pb-24 md:pb-32 px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
          <div className="space-y-6 max-w-[500px] w-full z-10">
            <div className={`h-[44px] w-full rounded-md ${shimmerClass}`} />
            <div className={`h-[44px] w-4/5 rounded-md ${shimmerClass}`} />
            <div className={`h-[48px] w-[300px] rounded-md mt-6 ${shimmerClass}`} />
            <div className="flex gap-6 mt-8">
              <div className={`h-[24px] w-24 rounded-md ${shimmerClass}`} />
              <div className={`h-[48px] w-36 rounded-full ${shimmerClass}`} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'product') {
    return (
      <div className="space-y-3">
        <div className={`aspect-square w-full rounded-2xl ${shimmerClass}`} />
        <div className={`h-4 w-3/4 rounded ${shimmerClass}`} />
        <div className={`h-3 w-1/2 rounded ${shimmerClass}`} />
      </div>
    )
  }

  if (type === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className={`aspect-square w-full rounded-2xl ${shimmerClass}`} />
            <div className={`h-4 w-3/4 rounded ${shimmerClass}`} />
            <div className={`h-3 w-1/2 rounded ${shimmerClass}`} />
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default SkeletonLoader
