'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type PreloaderStage = 'ruby-spin' | 'logo-bloom' | 'exit'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState<PreloaderStage>('ruby-spin')
  const [mounted, setMounted] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  // Pré-carregamento da logo
  useEffect(() => {
    const img = new window.Image()
    img.src = '/images/VIPLOUNGE LOGO (3).png'
    img.onload = () => setLogoLoaded(true)
  }, [])

  useEffect(() => {
    setMounted(true)

    // Timeline Obrigatória (9-10 segundos total)
    const phase2Timer = setTimeout(() => setStage('logo-bloom'), 4000) // Fase 2: 4s
    const phase3Timer = setTimeout(() => setStage('exit'), 9000) // Fase 3: 9s
    const completeTimer = setTimeout(() => onComplete(), 10500) // Total: 10.5s

    return () => {
      clearTimeout(phase2Timer)
      clearTimeout(phase3Timer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      {/* Preloader Overlay */}
      <motion.div
        key="preloader"
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Fase 1 (0-4s): Ruby Video Solo - Crossfade com Logo */}
        <motion.div
          key="phase1-ruby"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: stage === 'ruby-spin' ? 1 : 0, 
            scale: 1 
          }}
          transition={{
            opacity: { duration: stage === 'ruby-spin' ? 0.8 : 0.5 },
            scale: { duration: 0.8, ease: "easeOut" },
          }}
          className="absolute inset-0 flex items-center justify-center z-[10000]"
          style={{ pointerEvents: stage === 'ruby-spin' ? 'auto' : 'none' }}
        >
          {/* Ruby Video Container - Clean */}
          <div className="relative">
            <video
              src="/images/RUBYSPINNING.mp4"
              autoPlay
              muted
              playsInline
              loop={false}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
              style={{
                mixBlendMode: 'screen',
              }}
              onEnded={() => {
                // Garante a transição para logo após o vídeo terminar
                if (stage === 'ruby-spin') {
                  setStage('logo-bloom')
                }
              }}
            />
          </div>
        </motion.div>

        {/* Fase 2 (4-9s): Logo com Slow Zoom - Crossfade com Video */}
        <motion.div
          key="phase2-logo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: stage === 'logo-bloom' || stage === 'exit' ? 1 : 0,
            scale: stage === 'logo-bloom' ? [0.95, 1.05] : 0.95,
          }}
          transition={{
            opacity: { duration: 0.5, ease: "easeOut" },
            scale: {
              duration: 5,
              ease: "easeInOut",
              repeat: stage === 'logo-bloom' ? 1 : 0,
              repeatType: "reverse",
            },
          }}
          className="absolute inset-0 flex items-center justify-center z-[10001] will-change-opacity"
          style={{ pointerEvents: stage === 'logo-bloom' || stage === 'exit' ? 'auto' : 'none' }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 will-change-opacity">
            {/* Logo Image - Clean & Smooth */}
            {logoLoaded && (
              <Image
                src="/images/VIPLOUNGE LOGO (3).png"
                alt="VipLounge Logo"
                fill
                className="object-contain will-change-opacity"
                priority
                quality={100}
              />
            )}
          </div>
        </motion.div>

        {/* Fase 3 (9s+): Saída com Cortinas */}
        {stage === 'exit' && (
          <>
            {/* Cortina Esquerda */}
            <motion.div
              className="fixed inset-0 bg-black origin-left z-[10002]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Cortina Direita */}
            <motion.div
              className="fixed inset-0 bg-black origin-right z-[10002]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: 'right' }}
            />
          </>
        )}

      </motion.div>
    </AnimatePresence>
  )
}
