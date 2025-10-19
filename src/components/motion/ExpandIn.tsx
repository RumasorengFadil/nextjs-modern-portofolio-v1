"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ExpandInProps {
  children: ReactNode
  duration?: number
  delay?: number
  repeat?: boolean
  className?: string
}

export function ExpandIn({
  children,
  duration = 0.6,
  delay = 1,
  repeat = false,
  className = "",
}: ExpandInProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        duration,
        delay,
        repeat: repeat ? Infinity : 0,
        repeatType: "reverse", // biar buka-tutup
      }}
    >
      {children}
    </motion.div>
  )
}
