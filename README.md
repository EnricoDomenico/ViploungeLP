# VipLounge Landing Page

Landing Page de elite do VipLounge - "The Engine of Luxury"

## Stack Tecnológica

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (Design System customizado)
- **Framer Motion** (Animações complexas)
- **GSAP** (Ken Burns effect)
- **Lenis** (Smooth scroll)

## Design System "Dark Elite"

### Paleta de Cores
- Background: `#1A1A1A`
- Ruby Vibrant: `#A3161A` (Accent principal)
- Wine Prestige: `#5E0B0E` (Sombras)
- Champagne Gold: `#C5A059` (Detalhes de luxo)

### Tipografia
- Headlines: Cormorant Garamond
- UI/Body: Montserrat

## Estrutura do Projeto

```
ViploungeLP/
├── app/
│   ├── layout.tsx       # Layout raiz com metadata
│   ├── page.tsx         # Página principal com Lenis
│   └── globals.css      # Estilos globais e design system
├── components/
│   ├── Preloader.tsx    # Animação de entrada com diamante
│   ├── Hero.tsx         # Hero com Ken Burns effect
│   ├── Stats.tsx        # Contadores animados
│   ├── Connector.tsx    # Visualização do motor
│   └── Footer.tsx       # Footer imersivo
├── images/              # Assets locais
│   ├── VIPLOUNGE LOGO (3).png
│   ├── LOUNGECENTER.jpg
│   └── FOOTER.jpg
└── public/              # Assets públicos
```

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## Experiência de Animação

1. **Preloader**: Diamante 3D wireframe → Pulso Rubi → Logo → Cortinas
2. **Hero**: Ken Burns zoom + Headline staggered + CTA líquido
3. **Stats**: Contadores com spring physics + Glassmorphism
4. **Connector**: Linhas SVG pulsantes conectando serviços
5. **Footer**: Background imersivo com overlay 90%

## Features Implementadas

✅ Preloader cinematográfico completo
✅ Hero section com animações sofisticadas
✅ Engine Stats com contadores orgânicos
✅ Connector visual com SVG animado
✅ Footer imersivo com background
✅ Smooth scroll com Lenis
✅ Glassmorphism em painéis
✅ Gradient text effects
✅ Responsive design elegante
✅ Animações staggered
✅ Custom scrollbar
✅ Noise textures no background

## Navegação

Acesse `http://localhost:3000` após rodar `npm run dev`

## Próximos Passos (Opcional)

- [ ] Integração com CMS para conteúdo dinâmico
- [ ] Formulário de contato funcional
- [ ] Newsletter API integration
- [ ] Analytics tracking
- [ ] SEO optimization
- [ ] Performance optimization (lazy loading)

---

**VipLounge** - Onde o comum termina. A exclusividade começa.
