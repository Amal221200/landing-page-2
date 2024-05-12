import React from 'react'
import Feature from '../Feature'

const FeatureSection = () => {
    return (
        <section className='space-y-4'>
            <div className='text-center space-y-3 max-w-md mx-auto'>
                <h2 className='heading'>Explore the power of AI apps generation</h2>
                <p className='text-gray-700 text-medium font-normal'>
                    Unlock the full potential of your tech stack with {"GenAI's"} intuitive and Unlock the full potential of your tech stack with {"GenAI's"} intuitive
                </p>
            </div>

            {
                Array(3).fill(0).map((_, i) => (
                    <Feature i={i} key={i} />
                ))
            }
        </section>
    )
}

export default FeatureSection