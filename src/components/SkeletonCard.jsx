import React from 'react'

const SkeletonCard=()=> {
  return (
<div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm animate-pulse">

  {/* Image */}
  <div className="w-full h-52 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4"></div>

  {/* Title */}
  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>

  {/* Price */}
  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

  {/* Button */}
  <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-xl w-full"></div>

      </div>
  )
}

export default SkeletonCard;