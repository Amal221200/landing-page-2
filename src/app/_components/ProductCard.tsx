import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <article className='h-full w-full space-y-4 rounded-lg p-4 shadow-lg'>
      <div className='mb-2'>
        <Image src="/product.svg" alt='product' width={50} height={50} />
      </div>
      <div className='space-y-1'>
        <h4 className='text-base font-medium sm:text-lg'>Quality Apps</h4>
        <p className='text-[10px] sm:text-[14px]'>
          Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.
        </p>
      </div>
    </article>
  )
}

export default ProductCard