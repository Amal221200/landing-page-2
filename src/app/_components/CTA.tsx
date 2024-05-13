import PrimaryButton from '@/components/buttons/PrimaryButton'
import React from 'react'

const CTA = () => {
  return (
    <section className='h-[40dvh] flex justify-center items-center px-4'>
      <div className='space-y-6 text-center'>
        <h2 className="heading">Detect your next <span>big move</span></h2>
        <p className='text-gray-500 text-lg'>
          Experience the synergy of your favorite tools working seamlessly <br />
          together, all powered by {"Horizon's"} cutting-edge AI analytics.
        </p>

        <form className='flex gap-x-3 justify-center flex-wrap'>
          <input type="text" className='bg-gray-200 rounded w-full basis-[220px] flex-grow outline-none px-2 py-1' placeholder='yourmail@gmail.com' />
          <PrimaryButton className='basis-[50px]'>
            Subscribe Now
          </PrimaryButton>
        </form>
      </div>
    </section>
  )
}

export default CTA