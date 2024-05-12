import { cn } from "@/lib/utils"
import Image from "next/image"


const Feature = ({ i }: { i: number }) => {
    return (
        <article className='lg:h-[80dvh] md:h-[60dvh] p-10' key={i}>
            <div className={cn('flex flex-col justify-center sm:flex-row h-full gap-4', i % 2 !== 0 && "sm:flex-row-reverse")}>
                <div className='relative w-full sm:w-max text-center'>
                    <Image src={`/features-${i + 1}.png`} alt='features' width={600} height={400} className='mx-auto aspect-auto sm:w-[400px] w-[280px]' />
                </div>
                <div className="space-y-3 sm:w-[550px] text-center sm:text-left">
                    <h3 className='lg:text-6xl md:text-4xl sm:text-2xl text-xl font-medium'>
                        <span className='text-orange'>Unleash</span> the power of AI with GenAI</h3>
                    <p className='sm:text-md text-gray-600 leading-6'>
                        {"Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and"}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Feature