"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ExpandScaleProps {
  children: ReactNode
  duration?: number
  delay?: number
  repeat?: boolean
  className?: string
}

export function ExpandScale({
  children,
  duration = 0.6,
  delay = 0,
  repeat = false,
  className = "",
}: ExpandScaleProps) {
  return (
    <motion.div
      className={`origin-left ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{
        duration,
        delay,
        repeat: repeat ? Infinity : 0,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  )
}
