import PrimaryButton from '@/components/buttons/PrimaryButton'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import FooterLinks from '../FooterLinks'

const Footer = () => {
  return (
    <footer className='py-8 px-16 bg-[#1C1C1C] text-white'>
      {/* Top */}
      <div className='space-y-4'>
        <div className='flex flex-wrap justify-between items-center gap-3'>
          <h3 className='font-medium text-4xl basis-[360px]'>Get your AI apps built with blazing speed</h3>
          <PrimaryButton className='ml-auto sm:ml-0'>Get Startred</PrimaryButton>
        </div>
        <Separator className=' bg-slate-600' />

        {/* Bottom */}
        <div className='flex flex-wrap-reverse justify-center items-center gap-x-3 gap-y-5'>
          <div className='flex-1 flex sm:items-start items-center sm:text-left text-center flex-col basis-[200px] text-gray-300 space-y-2'>
            <h3 className='font-medium text-3xl'>GenAI</h3>
            <p className='w-[150px] text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium labore temporibus
            </p>
            <p className='text-sm'>All rights reserved</p>
          </div>
          <div className='flex-1 basis-[286px]'>
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer