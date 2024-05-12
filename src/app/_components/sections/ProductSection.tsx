import React from 'react'
import Product from '../Product'

const ProductSection = () => {
  return (
    <section className='space-y-4'>
      <h2 className='heading'>
        <span>Essentially</span>, everything you need to ship you first AI App
      </h2>

      <div className='max-w-4xl mx-auto grid md:grid-cols-3 grid-cols-2 gap-3 px-4'>
        {
          Array(6).fill(0).map((_, i) => (
            <Product key={i} />
          ))
        }
      </div>
    </section>
  )
}

export default ProductSection