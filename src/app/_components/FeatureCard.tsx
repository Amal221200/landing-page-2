import { cn } from "@/lib/utils"
import Image from "next/image"


const FeatureCard = ({ i }: { i: number }) => {
    return (
        <article className='p-10 md:h-[50dvh] lg:h-[70dvh]'>
            <div className={cn('flex flex-col justify-center sm:flex-row h-full gap-6', i % 2 !== 0 && "sm:flex-row-reverse")}>
                <div className='relative w-full text-center sm:w-max'>
                    <Image src={`/features-${i + 1}.png`} alt='features' width={600} height={400} className='mx-auto aspect-auto w-[280px] sm:w-[400px]' />
                </div>
                <div className="space-y-3 text-center sm:w-[550px] sm:text-left">
                    <h3 className='text-xl font-medium sm:text-2xl md:text-4xl lg:text-6xl'>
                        <span className='text-orange'>Unleash</span> the power of AI with GenAI</h3>
                    <p className='sm:text-md leading-6 text-gray-600'>
                        {"Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and"}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default FeatureCard