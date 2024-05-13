import React from 'react'
import Header from './Header'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <section className='w-full space-y-3 bg-hero bg-cover bg-center bg-no-repeat'>
            <Header />
            <main className='relative flex min-h-[calc(100dvh-80px)] flex-wrap items-center justify-between gap-4 px-10 pr-0'>
                <div className='max-w-2xl space-y-6'>
                    <h1 className='text-5xl font-medium sm:text-7xl'>
                        <span className='text-orange'>Transform Ideas</span> <br />
                        into apps using AI
                    </h1>
                    <p className='text-base text-gray-600 sm:text-lg'>
                        Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled
                    </p>
                    <PrimaryButton>
                        Get Started
                    </PrimaryButton>
                </div>

                {/* Image */}
                <div className='relative ml-auto basis-[350px] sm:basis-[500px]'>
                    <Image src="/hero-side.png" alt='hero-side' height={500} width={500} className='ml-auto w-[350px] object-right sm:w-[500px]' />
                    <Button type='button' variant="ghost" size="icon" className='absolute left-0 top-0 flex h-full w-full items-center justify-center hover:bg-transparent'>
                        <PlayCircle size={30} />
                    </Button>
                </div>
            </main>
        </section>
    )
}

export default Hero