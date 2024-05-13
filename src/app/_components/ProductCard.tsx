import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <article className='h-full w-full shadow-lg space-y-4 rounded-lg p-4'>
      <div className='mb-2'>
        <Image src="/product.svg" alt='product' width={50} height={50} />
      </div>
      <div className='space-y-1'>
        <h4 className='font-medium sm:text-lg text-base'>Quality Apps</h4>
        <p className='sm:text-[14px] text-[10px]'>
          Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.
        </p>
      </div>
    </article>
  )
}

export default ProductCard