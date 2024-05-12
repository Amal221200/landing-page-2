import PrimaryButton from '@/components/buttons/PrimaryButton'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='px-4 mx-auto flex justify-between items-center py-2'>
                {/* Logo */}
                <div className='flex gap-x-1 items-center'>
                    <Image src="/logo.svg" alt="logo" width={20} height={20} />
                    <h6 className='font-bold'>GenAI</h6>
                </div>
                {/* nav */}
                <nav className='flex gap-x-2 text-sm text-gray-600'>
                    <Link href="#">Features</Link>
                    <Link href="#">Product</Link>
                    <Link href="#">Testimonial</Link>
                    <Link href="#">FAQ</Link>
                </nav>

                <div>
                    <PrimaryButton>
                        Get Started
                    </PrimaryButton>
                </div>
            </div>
        </header>
    )
}

export default Header