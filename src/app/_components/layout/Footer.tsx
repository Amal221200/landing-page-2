import PrimaryButton from '@/components/buttons/PrimaryButton'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import FooterLinks from '../FooterLinks'

const Footer = () => {
  return (
    <footer className='bg-[#1C1C1C] px-16 py-8 text-white'>
      {/* Top */}
      <div className='space-y-4'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h3 className='basis-[360px] text-2xl font-medium sm:text-4xl'>Get your AI apps built with blazing speed</h3>
          <PrimaryButton className='ml-auto sm:ml-0'>Get Startred</PrimaryButton>
        </div>
        <Separator className='bg-slate-600' />

        {/* Bottom */}
        <div className='flex flex-wrap-reverse items-center justify-center gap-x-3 gap-y-5'>
          <div className='flex flex-1 basis-[200px] flex-col items-center space-y-2 text-center text-gray-300 sm:items-start sm:text-left'>
            <h3 className='text-xl font-medium sm:text-3xl'>GenAI</h3>
            <p className='w-[150px] text-xs sm:text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium labore temporibus
            </p>
            <p className='text-sm text-gray-50 sm:text-base'>All rights reserved</p>
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