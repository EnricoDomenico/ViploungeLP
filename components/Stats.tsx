'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface StatCardProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

function StatCard({ value, label, suffix = '', delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    damping: 50,
    stiffness: 50,
  })

  const displayValue = useTransform(springValue, (latest) => {
    return Math.floor(latest)
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setTimeout(() => {
        springValue.set(value)
        setHasAnimated(true)
      }, delay)
    }
  }, [isInView, value, springValue, delay, hasAnimated])

  return (
    <motion.div
      ref={ref}
      className="glass-panel p-6 sm:p-8 md:p-12 relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: delay / 1000 }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne-gold/20 via-ruby-vibrant/20 to-champagne-gold/20 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant font-light mb-3 md:mb-4 gradient-text">
          <motion.span>{displayValue}</motion.span>
          {suffix}
        </motion.div>
        <div className="text-xs sm:text-sm md:text-base font-montserrat tracking-wider uppercase text-champagne-gold/70">
          {label}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-ruby-vibrant/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-champagne-gold/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </motion.div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const stats = [
    { value: 50, label: 'Anos de Experiência', suffix: '+' },
    { value: 200, label: 'Empresas Parceiras', suffix: '+' },
    { value: 1500, label: 'Benefícios Ativados', suffix: '+' },
  ]

  return (
    <section ref={sectionRef} className="relative px-6 sm:px-8 md:px-12 lg:px-24 py-20 md:py-32 bg-gradient-to-b from-dark-elite via-wine-prestige/10 to-dark-elite">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12 md:mb-16 lg:mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant font-light italic tracking-wide mb-6">
          Impacto Real em Números
        </h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-champagne-gold to-transparent mx-auto" />
      </motion.div>

      {/* Stats Grid */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
            delay={index * 200}
          />
        ))}
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-champagne-gold/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-champagne-gold/30 to-transparent" />

      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ruby-vibrant/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
