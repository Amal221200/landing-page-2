import PrimaryButton from '@/components/buttons/PrimaryButton'
import React from 'react'

const CTA = () => {
  return (
    <section className='flex h-[40dvh] items-center justify-center px-4'>
      <div className='space-y-6 text-center'>
        <h2 className="heading">Detect your next <span>big move</span></h2>
        <p className='subtitle'>
          Experience the synergy of your favorite tools working seamlessly <br />
          together, all powered by {"Horizon's"} cutting-edge AI analytics.
        </p>

        <form className='flex flex-wrap justify-center gap-3'>
          <input type="text" className='w-full max-w-80 flex-grow basis-[220px] rounded bg-gray-200 p-2 outline-none' placeholder='yourmail@gmail.com' />
          <PrimaryButton className='basis-[50px]' gradient>
            Subscribe Now
          </PrimaryButton>
        </form>
      </div>
    </section>
  )
}

export default CTA