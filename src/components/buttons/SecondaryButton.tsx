import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SecondaryButton = ({ children, className, gradient }: { children: React.ReactNode, className?: string, gradient?: boolean }) => {
    return (
        <Button type="button" variant={gradient ? "secondary-gradient" : "secondary"} className={cn('flex gap-x-1', className)}>
            {children} <ArrowRight size={18} />
        </Button>
    )
}

export default SecondaryButton