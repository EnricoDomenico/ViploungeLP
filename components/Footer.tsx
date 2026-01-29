'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: '-100px' })

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'WhatsApp', href: '#', icon: '💬' },
  ]

  const contactInfo = [
    { label: 'Email', value: 'contact@viplounge.exclusive', icon: '✉️' },
    { label: 'Telefone', value: '+55 (11) 9999-9999', icon: '📞' },
    { label: 'Endereço', value: 'São Paulo, Brasil', icon: '📍' },
  ]

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/FOOTER.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Heavy overlay - 90% opacity */}
        <div className="absolute inset-0 bg-dark-elite/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-elite/80 to-dark-elite/60" />
      </div>

      {/* Content */}
      <div className="relative section-padding">
        {/* Top Section - Logo and Tagline */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/images/VIPLOUNGE LOGO (3).png"
              alt="VipLounge Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-cormorant text-2xl md:text-3xl italic text-champagne-gold/70 max-w-2xl mx-auto">
            "O clube de benefícios que conecta empresas a clientes extraordinários"
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-champagne-gold font-montserrat tracking-widest-elite uppercase text-sm mb-6 border-b border-champagne-gold/20 pb-3">
              Contato
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-lg mt-0.5">{info.icon}</span>
                    <div>
                      <div className="text-white/50 text-xs mb-1 font-montserrat tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-white/80 group-hover:text-champagne-gold transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-champagne-gold font-montserrat tracking-widest-elite uppercase text-sm mb-6 border-b border-champagne-gold/20 pb-3">
              Navegação
            </h3>
            <nav className="space-y-3">
              {['Sobre', 'Serviços', 'Portfolio', 'Contato', 'Blog'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/70 hover:text-champagne-gold transition-colors duration-300 font-montserrat text-sm tracking-wide"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-champagne-gold font-montserrat tracking-widest-elite uppercase text-sm mb-6 border-b border-champagne-gold/20 pb-3">
              Social
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-3 text-white/70 hover:text-champagne-gold transition-colors duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="font-montserrat text-sm tracking-wide">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-white/50 text-xs font-montserrat tracking-wider mb-3">
                NEWSLETTER EXCLUSIVA
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 bg-white/5 border border-champagne-gold/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-champagne-gold/50 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-wine-prestige to-ruby-vibrant text-white text-xs font-montserrat tracking-wider hover:opacity-80 transition-opacity">
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-montserrat tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div>
            © {new Date().getFullYear()} VipLounge. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-champagne-gold transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-champagne-gold transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-gold/20 to-transparent" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-ruby-vibrant/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  )
}
