import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import { ArrowRight, Dot } from 'lucide-react'
import React from 'react'

const PriceSection = () => {
  return (
    <section className='space-y-10'>
      <h2 className="heading">
        Start making <span>smarter</span> decisions, <br />
        Choose a plan
      </h2>

      <div className='grid grid-cols-[repeat(3,minmax(200px,310px))] justify-center gap-8 px-4'>
        <article className='lg:px-8 md:px-6 sm:p-4 p-2 border w-full space-y-4 rounded-3xl shadow'>
          <div className='text-center'>
            <p className='font-medium'>Explore</p>
            <h6 className='text-2xl font-bold'>$4,99<span className='text-zinc-500'>/mo</span></h6>
          </div>
          <ul className='space-y-3'>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Market Trend Analysis</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Limited Query Mapping</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Standard Dashboard</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Email Notifications</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Entry Level Support</li>
          </ul>

          <SecondaryButton className="w-full ">
            Get Now
          </SecondaryButton>
        </article>

        <article className='lg:px-8 md:px-6 sm:p-4 p-2 border w-full space-y-4 transform scale-110 rounded-3xl shadow'>
          <div className='text-center'>
            <p className='font-medium text-orange flex gap-x-1 items-center justify-center'>
              Innovator
              <span className='text-orange bg-orange-faded items-center justify-center p-1 text-xs rounded inline-flex'>
                <i className="h-1 w-1 rounded-full bg-orange mr-1"></i> Best Value
              </span>
            </p>
            <h6 className='text-2xl font-bold'>$19,99<span className='text-zinc-500'>/mo</span></h6>
          </div>
          <ul className='space-y-3'>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Market Trend Analysis</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Limited Query Mapping</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Standard Dashboard</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Email Notifications</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Entry Level Support</li>
          </ul>

          <PrimaryButton className="w-full">
            Get Now
          </PrimaryButton>
        </article>

        <article className='lg:px-8 md:px-6 sm:p-4 p-2 border w-full space-y-4 rounded-3xl shadow'>
          <div className='text-center'>
            <p className='font-medium'>Visionary</p>
            <h6 className='text-2xl font-bold'>$49,99<span className='text-zinc-500'>/mo</span></h6>
          </div>
          <ul className='space-y-3'>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Everything in Innovator, Plus</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Competitor Benchmarking</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Holistic Market Visualization</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Adaptive Strategy Planner</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> 24/7 Priority Support</li>
            <li className='flex gap-x-2'><ArrowRight className='text-orange' size={18} /> Custom Integeration</li>
          </ul>

          <SecondaryButton className="w-full">
            Get Now
          </SecondaryButton>
        </article>
      </div>
    </section>
  )
}

export default PriceSection