import React from 'react'
import FeatureCard from '../FeatureCard'

const FeatureSection = () => {
    return (
        <section className='section space-y-4'>
            <div className='mx-auto max-w-md space-y-3 text-center'>
                <h2 className='heading'>Explore the power of AI apps generation</h2>
                <p className='subtitle'>
                    Unlock the full potential of your tech stack with {"GenAI's"} intuitive and Unlock the full potential of your tech stack with {"GenAI's"} intuitive
                </p>
            </div>

            {
                Array(3).fill(0).map((_, i) => (
                    <FeatureCard i={i} key={i} />
                ))
            }
        </section>
    )
}

export default FeatureSection