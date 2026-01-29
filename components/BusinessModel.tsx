'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BusinessModel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const benefits = [
    {
      title: 'Para Seu Negócio',
      icon: '🏢',
      items: [
        'Diferencie-se da concorrência',
        'Aumente a retenção de clientes',
        'Agregue valor premium',
        'Posicione-se como exclusivo',
      ],
    },
    {
      title: 'Para Seus Clientes',
      icon: '💎',
      items: [
        'Acesso a benefícios exclusivos',
        'Rede de estabelecimentos premium',
        'Experiências diferenciadas',
        'Status e reconhecimento',
      ],
    },
    {
      title: 'Para o Ecossistema',
      icon: '🔗',
      items: [
        'Network entre parceiros',
        'Visibilidade qualificada',
        'Crescimento conjunto',
        'Comunidade de excelência',
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="relative section-padding bg-gradient-to-b from-dark-elite via-black to-dark-elite overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ruby-vibrant/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-champagne-gold/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <h2 className="headline-elite mb-6">
            Como Funciona o VipLounge
          </h2>
          <p className="font-montserrat text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Um clube de benefícios premium que sua empresa oferece aos seus clientes,
            <span className="text-champagne-gold"> conectando-os a uma rede exclusiva</span> de estabelecimentos
            e experiências de alto padrão.
          </p>
        </motion.div>

        {/* How it Works - Steps */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />
            
            {[
              {
                step: '01',
                title: 'Sua Empresa Adere',
                description: 'Integre o VipLounge como benefício exclusivo para seus clientes',
              },
              {
                step: '02',
                title: 'Clientes Acessam',
                description: 'Seus clientes ganham acesso à rede premium de parceiros e benefícios',
              },
              {
                step: '03',
                title: 'Todos Ganham',
                description: 'Você retém clientes, eles vivem experiências únicas, parceiros crescem',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                <div className="glass-panel p-8 h-full border-t-2 border-champagne-gold/50 relative group hover:border-ruby-vibrant transition-all duration-500">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-ruby-vibrant to-wine-prestige flex items-center justify-center font-montserrat font-bold text-sm glow-ruby">
                    {item.step}
                  </div>

                  <h3 className="font-cormorant text-2xl md:text-3xl font-light mb-4 text-champagne-gold mt-8">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-ruby-vibrant/5 blur-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            >
              <div className="glass-panel p-8 h-full group hover:border-champagne-gold/30 transition-all duration-500">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="font-cormorant text-2xl font-light mb-6 text-champagne-gold">
                  {benefit.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-montserrat text-sm text-white/70">
                      <span className="text-ruby-vibrant mt-1 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="glass-panel p-12 max-w-3xl mx-auto border-2 border-champagne-gold/20">
            <h3 className="font-cormorant text-3xl md:text-4xl font-light italic mb-6 text-white">
              Pronto para elevar seu negócio?
            </h3>
            <p className="font-montserrat text-white/70 mb-8 text-sm md:text-base tracking-wide">
              Junte-se ao ecossistema de empresas que oferecem experiências premium aos seus clientes
            </p>
            <button className="luxury-button mx-auto">
              <span>Solicitar Apresentação</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-champagne-gold/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-champagne-gold/10" />
    </section>
  )
}
