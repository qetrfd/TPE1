import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

interface MotionBlockProps {
  children: ReactNode
  className?: string
  delay?: number
  viewportAmount?: number
}

interface StaggerContainerProps extends MotionBlockProps {
  stagger?: number
}

interface SlideInProps extends MotionBlockProps {
  direction?: 'left' | 'right'
}

const viewport = (amount: number) => ({ once: true, amount })

export function FadeIn({
  children,
  className = '',
  delay = 0,
  viewportAmount = 0.18,
}: MotionBlockProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport(viewportAmount)}
      transition={{ duration: 0.75, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function SlideUp({
  children,
  className = '',
  delay = 0,
  viewportAmount = 0.18,
}: MotionBlockProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport(viewportAmount)}
      transition={{ duration: 0.72, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({
  children,
  className = '',
  delay = 0,
  viewportAmount = 0.18,
  direction = 'left',
}: SlideInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === 'left' ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport(viewportAmount)}
      transition={{ duration: 0.78, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({
  children,
  className = '',
  delay = 0,
  viewportAmount = 0.18,
}: MotionBlockProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport(viewportAmount)}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
  delay = 0,
  stagger = 0.1,
  viewportAmount = 0.12,
}: StaggerContainerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport(viewportAmount)}
    >
      {children}
    </motion.div>
  )
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
}

export function StaggerItem({ children, className = '' }: MotionBlockProps) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  )
}
