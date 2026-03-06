import React from 'react'

const SkeletonLoader = ({ type = 'product' }) => {
  if (type === 'hero') {
    return (
      <div className="w-full bg-gray-200 animate-pulse" style={{ height: 'calc(100vh - 92px)', minHeight: '560px' }}>
        <div className="w-full h-full flex items-center justify-start px-8 md:px-24">
          <div className="space-y-4 max-w-md">
            <div className="skeleton h-4 w-32 rounded" />
            <div className="skeleton h-12 w-80 rounded" />
            <div className="skeleton h-12 w-64 rounded" />
            <div className="skeleton h-5 w-72 rounded" />
            <div className="flex gap-3 mt-4">
              <div className="skeleton h-12 w-32 rounded-full" />
              <div className="skeleton h-12 w-32 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'product') {
    return (
      <div className="space-y-3">
        <div className="skeleton aspect-square w-full rounded-2xl" />
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
      </div>
    )
  }

  if (type === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="skeleton aspect-square w-full rounded-2xl" />
            <div className="skeleton h-4 w-3/4 rounded" />
            <div className="skeleton h-3 w-1/2 rounded" />
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default SkeletonLoader
