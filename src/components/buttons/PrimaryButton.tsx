import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button type="button" variant="primary-gradient" className='flex gap-x-1'>
            {children} <ArrowRight size={18} />
        </Button>
    )
}

export default PrimaryButton