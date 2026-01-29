'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const benefits = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L38 22H54L41 32L46 48L32 40L18 48L23 32L10 22H26L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'Rede Premium Exclusiva',
      description: 'Conecte-se aos estabelecimentos mais prestigiados do mercado de luxo.',
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="24" width="28" height="24" stroke="currentColor" strokeWidth="2" rx="2"/>
          <path d="M22 24V18C22 13 26 10 32 10C38 10 42 13 42 18V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="36" r="2" fill="currentColor"/>
        </svg>
      ),
      title: 'Benefícios Personalizados',
      description: 'Ofereça experiências únicas e sob medida para seus clientes VIP.',
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" stroke="currentColor" strokeWidth="2" rx="2"/>
          <path d="M20 38L28 30L36 36L44 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="20" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Dashboard Inteligente',
      description: 'Acompanhe métricas, engajamento e ROI em tempo real.',
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 12L38 28L54 28L42 38L46 54L32 44L18 54L22 38L10 28L26 28L32 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Curadoria de Alto Padrão',
      description: 'Apenas parceiros que compartilham nosso padrão de excelência.',
    },
    {
      id: 5,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 12V32L44 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'Visibilidade Estratégica',
      description: 'Destaque sua marca em uma rede de alto valor aquisitivo.',
    },
    {
      id: 6,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 28C24 22 28 18 32 18C36 18 40 22 40 28C40 32 38 34 36 36L32 40L28 36C26 34 24 32 24 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 42C20 38 24 36 28 36H36C40 36 44 38 44 42V46H20V42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Suporte Dedicado',
      description: 'Time especializado para garantir o sucesso da sua parceria.',
    },
  ]

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-dark-elite">
      {/* Section Title */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="headline-elite mb-6">
          Por Que VipLounge
        </h2>
        <p className="subheadline-elite max-w-2xl mx-auto">
          Eleve sua marca com o clube de benefícios mais exclusivo do mercado
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
            >
              <div className="group h-full">
                {/* Benefit Card */}
                <div className="h-full glass-panel p-8 border border-champagne-gold/20 hover:border-champagne-gold/50 transition-all duration-500 relative overflow-hidden">
                  {/* Icon */}
                  <motion.div
                    className="text-champagne-gold mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-cormorant text-2xl md:text-3xl italic text-white mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="font-montserrat text-sm md:text-base text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ruby-vibrant/5 via-transparent to-champagne-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-champagne-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="font-montserrat text-white/60 text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Junte-se aos estabelecimentos que estão redefinindo o conceito de exclusividade
        </p>
        <button className="luxury-button group">
          <span className="luxury-button-overlay" />
          <span className="luxury-button-text">
            Solicitar Apresentação
          </span>
        </button>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ruby-vibrant/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  )
}
