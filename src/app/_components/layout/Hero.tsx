import React from 'react'
import Header from './Header'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const Hero = () => {
    return (
        <section className='h-screen w-full bg-hero bg-no-repeat bg-center bg-cover'>
            <Header />
            <main className='h-[calc(100%-80px)] flex items-center relative px-10'>
                <div className='max-w-2xl space-y-6'>
                    <h1 className='text-7xl font-medium'>
                        <span className='text-orange'>Transform Ideas</span> <br />
                        into apps using AI
                    </h1>
                    <p className='text-lg text-gray-600'>
                        Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled
                    </p>
                    <PrimaryButton>
                        Get Started
                    </PrimaryButton>
                </div>

                {/* Image */}
            </main>
        </section>
    )
}

export default Hero