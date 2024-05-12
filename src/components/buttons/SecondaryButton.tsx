import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const SecondaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button type="button" variant="secondary" className='flex gap-x-1'>
            {children} <ArrowRight size={18} />
        </Button>
    )
}

export default SecondaryButton