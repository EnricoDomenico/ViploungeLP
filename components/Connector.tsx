'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Connector() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Posições em octógono perfeito (8 nós periféricos)
  const services = [
    { id: 1, name: 'Restaurantes', icon: '🍽️', angle: 0 },
    { id: 2, name: 'Hotéis', icon: '🏨', angle: 45 },
    { id: 3, name: 'Eventos', icon: '🎪', angle: 90 },
    { id: 4, name: 'Clubes', icon: '🎭', angle: 135 },
    { id: 5, name: 'Empresas', icon: '🏢', angle: 180 },
    { id: 6, name: 'Lifestyle', icon: '✨', angle: 225 },
    { id: 7, name: 'Viagens', icon: '✈️', angle: 270 },
    { id: 8, name: 'Bem-estar', icon: '🧘', angle: 315 },
  ]

  return (
    <section ref={sectionRef} className="relative px-6 sm:px-8 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden bg-dark-elite">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12 md:mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant font-light italic tracking-wide mb-6">
          A Rede de Parceiros
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-montserrat tracking-wider uppercase text-champagne-gold/80 max-w-2xl mx-auto px-4">
          Conectamos você aos melhores estabelecimentos premium do mercado
        </p>
      </motion.div>

      {/* Mobile: Grid Vertical Simples */}
      <div className="md:hidden relative max-w-2xl mx-auto">
        {/* Central VIP Badge - Mobile */}
        <motion.div
          className="text-center mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-flex w-24 h-24 rounded-full border-2 border-dashed border-champagne-gold/40 items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-champagne-gold/20 to-ruby-vibrant/20 backdrop-blur-sm border border-champagne-gold/30 flex items-center justify-center">
              <span className="text-champagne-gold text-xl font-cormorant italic">VIP</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid - Mobile (2 Columns) */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 1 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group cursor-pointer">
                <div className="glass-panel p-6 rounded-lg flex flex-col items-center justify-center border border-champagne-gold/30 hover:border-ruby-vibrant hover:shadow-lg transition-all duration-500 hover:scale-105 relative overflow-hidden min-h-[120px]">
                  {/* Icon */}
                  <div className="text-3xl mb-2">{service.icon}</div>
                  
                  {/* Label */}
                  <div className="text-xs font-montserrat tracking-wider text-champagne-gold/70 text-center leading-tight">
                    {service.name}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ruby-vibrant/20 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Orbital Network Container */}
      <div className="hidden md:block relative max-w-6xl mx-auto h-[700px] md:h-[800px] flex items-center justify-center">
        {/* Central Circle - Ponto de Conexão */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-champagne-gold/40 flex items-center justify-center relative">
            {/* Inner Glow Circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-champagne-gold/20 to-ruby-vibrant/20 backdrop-blur-sm border border-champagne-gold/30">
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <span className="text-champagne-gold text-2xl md:text-3xl font-cormorant italic">VIP</span>
              </div>
            </div>
            
            {/* Orbital Ring Indicator */}
            <div className="absolute inset-0 rounded-full border border-champagne-gold/10 animate-pulse" />
          </div>
        </motion.div>

        {/* Orbital Ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div 
            className="relative rounded-full border border-dashed border-champagne-gold/20"
            style={{
              width: '500px',
              height: '500px',
            }}
          />
        </motion.div>

        {/* Service Nodes - Posicionamento CSS Orbital */}
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="absolute top-1/2 left-1/2 z-20 service-node"
            style={{
              '--angle': `${service.angle}deg`,
            } as React.CSSProperties}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: 1 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="group cursor-pointer">
              {/* Service Node */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full glass-panel flex flex-col items-center justify-center border border-champagne-gold/30 hover:border-ruby-vibrant hover:shadow-lg transition-all duration-500 hover:scale-110 relative overflow-hidden">
                {/* Icon */}
                <div className="text-3xl md:text-4xl mb-1">{service.icon}</div>

                {/* Label */}
                <div className="text-[10px] md:text-xs font-montserrat tracking-wider text-champagne-gold/70 text-center leading-tight px-1">
                  {service.name}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ruby-vibrant/20 to-transparent" />
                </div>
              </div>

              {/* Connection Line to Center */}
              <div className="absolute top-1/2 left-1/2 w-0.5 h-60 bg-gradient-to-b from-champagne-gold/40 to-transparent origin-bottom -translate-x-1/2 -translate-y-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" 
                   style={{ transform: 'translate(-50%, -100%) rotate(180deg)' }} 
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Description */}
      <motion.div
        className="text-center mt-12 relative z-10 max-w-3xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="font-montserrat text-white/70 text-sm md:text-base leading-relaxed">
          Cada conexão representa uma oportunidade. Cada nó, um parceiro premium. 
          <span className="text-champagne-gold"> Juntos formamos a rede mais exclusiva do mercado.</span>
        </p>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ruby-vibrant/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <style jsx>{`
        .service-node {
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-250px) rotate(calc(-1 * var(--angle)));
        }

        @media (max-width: 768px) {
          .service-node {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-200px) rotate(calc(-1 * var(--angle)));
          }
        }
      `}</style>
    </section>
  )
}
