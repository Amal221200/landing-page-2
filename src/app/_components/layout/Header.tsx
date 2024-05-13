import PrimaryButton from '@/components/buttons/PrimaryButton'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='mx-auto flex items-center justify-between px-4 py-2'>
                {/* Logo */}
                <div className='flex items-center gap-x-1'>
                    <Image src="/logo.svg" alt="logo" width={20} height={20} />
                    <h6 className='font-bold'>GenAI</h6>
                </div>
                {/* nav */}
                <nav className='hidden gap-x-2 text-sm text-gray-600 sm:flex'>
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

            <nav className='flex justify-center gap-x-2 text-sm text-gray-600 sm:hidden'>
                <Link href="#">Features</Link>
                <Link href="#">Product</Link>
                <Link href="#">Testimonial</Link>
                <Link href="#">FAQ</Link>
            </nav>
        </header>
    )
}

export default Header