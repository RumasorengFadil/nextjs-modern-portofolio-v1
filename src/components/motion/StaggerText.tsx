import { motion } from "framer-motion"
import React from "react"

interface StaggerTextProps {
    text: string
    delay?: number
    duration?: number
    repeat?: boolean
    className?: string,
    style?: React.CSSProperties,
}

export function StaggerText({
    text,
    delay = 0.05,      // jarak antar huruf
    duration = 0.5,     // durasi animasi tiap huruf
    repeat = false,     // apakah animasi diulang
    className,
    style,
}: StaggerTextProps) {
    const letters = Array.from(text)

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: delay,
            },
        },
    }

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
           transition: {
                repeat: repeat ? Infinity : 0, // looping animasi
                repeatDelay: 1,
                duration:duration
            },
        },
    }

    return (
        <motion.div
            style={style}
            className={`flex flex-wrap ${className ?? ""}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: !repeat }}
        >
            {letters.map((char, i) => (
                <motion.span key={i} variants={child}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    )
}
