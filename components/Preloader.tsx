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
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Fase 1 (0-4s): Ruby Video Solo */}
        <AnimatePresence mode="wait">
          {stage === 'ruby-spin' && (
            <motion.div
              key="phase1-ruby"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative flex items-center justify-center z-20"
            >
              {/* Ruby Video Container - Clean */}
              <div className="relative">
                <video
                  src="/images/RUBYSPINNING.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop={false}
                  className="w-96 h-96 object-contain"
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
          )}

          {/* Fase 2 (4-9s): Logo com Slow Zoom */}
          {stage === 'logo-bloom' && (
            <motion.div
              key="phase2-logo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: [0.95, 1.05],
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: {
                  duration: 5,
                  ease: "easeInOut",
                  repeat: 1,
                  repeatType: "reverse",
                },
              }}
              className="relative flex items-center justify-center z-20"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Logo Image - Clean & Smooth */}
                <Image
                  src="/images/VIPLOUNGE LOGO (3).png"
                  alt="VipLounge Logo"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fase 3 (9s+): Saída com Cortinas */}
        {stage === 'exit' && (
          <>
            {/* Cortina Esquerda */}
            <motion.div
              className="fixed inset-0 bg-black origin-left z-30"
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
              className="fixed inset-0 bg-black origin-right z-30"
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
