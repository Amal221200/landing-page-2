import React from 'react'
import ProductCard from '../ProductCard'

const ProductSection = () => {
  return (
    <section className='section space-y-4'>
      <h2 className='heading'>
        <span>Essentially</span>, everything you need to ship you first AI App
      </h2>

      <div className='mx-auto grid max-w-4xl grid-cols-2 gap-3 px-4 md:grid-cols-3'>
        {
          Array(6).fill(0).map((_, i) => (
            <ProductCard key={i} />
          ))
        }
      </div>
    </section>
  )
}

export default ProductSection