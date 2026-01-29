'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Lenis from '@studio-freight/lenis'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import BusinessModel from '@/components/BusinessModel'
import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    }
  }, [loading])

  const handlePreloaderComplete = () => {
    setLoading(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <main className={`min-h-screen transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <BusinessModel />
        <Benefits />
        <Footer />
      </main>
    </>
  )
}
