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

      <div className='flex flex-wrap justify-center gap-8 px-4'>
        {
          priceData.map((price, i) => (
            <PriceCard key={i} price={price} large={price.large} highlight={price.higlight} />
          ))
        }
      </div>

      <div className='mx-auto flex max-w-lg flex-wrap items-center justify-center gap-2 px-4 py-2 text-center'>
        <p className='flex flex-1 basis-[150px] items-center justify-center gap-x-1 text-sm text-orange'><CircleCheck fill='rgb(255, 79, 0)' size={18} className='text-white' /> Free Trial</p>
        <p className='flex flex-1 basis-[150px] items-center justify-center gap-x-1 text-sm text-orange'><CircleCheck fill='rgb(255, 79, 0)' size={18} className='text-white' /> Cancel Anytime</p>
        <p className='flex flex-1 basis-[150px] items-center justify-center gap-x-1 text-sm text-orange'><CircleCheck fill='rgb(255, 79, 0)' size={18} className='text-white' /> Support included</p>
      </div>
    </section>
  )
}

export default PriceSection