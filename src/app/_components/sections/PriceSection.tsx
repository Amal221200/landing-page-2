import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import { priceData } from '@/lib/data'
import { ArrowRight, CircleCheck, Dot } from 'lucide-react'
import React from 'react'
import PriceCard from '../PriceCard'

const PriceSection = () => {
  return (
    <section className='space-y-10 px-4'>
      <h2 className="heading">
        Start making <span>smarter</span> decisions, <br />
        Choose a plan
      </h2>

      <div className='flex justify-center flex-wrap gap-8 px-4'>
        {
          priceData.map((price, i) => (
            <PriceCard key={i} price={price} large={price.large} highlight={price.higlight} />
          ))
        }
      </div>

      <div className='flex justify-between mx-auto items-center max-w-lg px-4 py-2'>
        <p className='text-orange flex gap-x-1 text-sm items-center'><CircleCheck fill='rgb(255, 79, 0)' size={18} className='text-white' /> Free Trial</p>
        <p className='text-orange flex gap-x-1 text-sm items-center'><CircleCheck fill='rgb(255, 79, 0)' size={18} className='text-white' /> Cancel Anytime</p>
        <p className='text-orange flex gap-x-1 text-sm items-center'><CircleCheck fill='rgb(255, 79, 0)' size={18} className='text-white' /> Support included</p>
      </div>
    </section>
  )
}

export default PriceSection