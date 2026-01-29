'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: true })

  useEffect(() => {
    if (bgRef.current) {
      // Ken Burns slow zoom effect
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])

  const headline = "O clube de benefícios que transforma seu negócio."
  const headlineWords = headline.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(10px)',
      y: 20,
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="absolute inset-0 scale-100">
          <Image
            src="/images/LOUNGECENTER.jpg"
            alt="VipLounge Center"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center section-padding">
        {/* Animated Headline */}
        <motion.h1
          className="headline-elite mb-8 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-3 md:mr-4"
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="subheadline-elite mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Ofereça exclusividade premium aos seus clientes
        </motion.p>

        {/* CTA Button with Liquid Fill Effect */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <button className="luxury-button group">
            <span>Viva a experiência VipLounge</span>
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-champagne-gold to-transparent" />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-champagne-gold/60"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ruby-vibrant/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
