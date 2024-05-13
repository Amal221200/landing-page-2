import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import React from 'react'


interface PriceCardProps {
    price: {
        headline: string;
        higlight: boolean;
        large: boolean;
        bulletPoints: string[];
        amount: string;
    };
    large?: boolean;
    highlight: boolean
}
const PriceCard = ({ large, highlight, price }: PriceCardProps) => {
    return (
        <article className={cn('lg:px-8 md:px-6 p-4 border w-full flex flex-col justify-between gap-y-4 basis-[310px] rounded-3xl shadow', large && "transform scale-110")}>
            <div className='text-center'>
                <p className={cn('font-medium', highlight && 'text-orange flex gap-x-1 items-center justify-center sm:text-base text-sm')}>
                    {price.headline}
                    {
                        highlight && (<span className='inline-flex items-center justify-center rounded bg-orange-faded p-[2px] px-1 text-xs text-orange sm:p-1'>
                            <i className="mr-1 h-1 w-1 rounded-full bg-orange"></i> Best Value
                        </span>
                        )
                    }
                </p>
                <h6 className='text-xl font-bold sm:text-2xl'>${price.amount}<span className='text-zinc-500'>/mo</span></h6>
            </div>
            
            <ul className='space-y-3'>
                {price.bulletPoints.map((point, i) => (
                    <li className='flex gap-x-2 text-xs sm:text-base' key={i}>
                        <ArrowRight className='text-orange' size={18} /> {point}
                    </li>
                ))}
            </ul>

            {
                highlight ?
                    <PrimaryButton className="w-full" gradient>
                        Get Now
                    </PrimaryButton> :
                    <SecondaryButton className="w-full" gradient>
                        Get Now
                    </SecondaryButton>
            }
        </article>

    )
}

export default PriceCard