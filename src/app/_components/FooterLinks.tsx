import { footerLinks } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
    return (
        <div className='w-full flex justify-between'>
            {
                footerLinks.map((footerLink) => (
                    <nav key={crypto.randomUUID()} className='flex flex-col gap-y-3'>
                        {
                            footerLink.map(link => (
                                <Link href="#" key={crypto.randomUUID()} className='text-gray-300 hover:underline'>{link}</Link>
                            ))
                        }
                    </nav>
                ))
            }
        </div>
    )
}

export default FooterLinks