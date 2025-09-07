'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
export default function PageTransition({ children, className }: {
    children:
    React.ReactNode; className?: string
}) {
    return (
        <motion.main
            className={cn('min-h-[calc(100vh-4rem)]', className)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
        >
            {children}
        </motion.main>
    )
}