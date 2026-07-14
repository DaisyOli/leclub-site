<p align="right"><a href="README.md">English</a> · <a href="README.fr.md">Français</a> · <strong>Português</strong></p>

# LeCLUB Fitness & Wellness

Site institucional da LeCLUB Fitness & Wellness, um studio boutique de fitness e wellness no Alto de Pinheiros, São Paulo. Construído para apresentar a marca e converter visitantes em leads para a pré-venda do plano anual do studio, via WhatsApp.

## Visão geral

A LeCLUB é um espaço de treino de capacidade limitada que combina treinamento de força com serviços clínicos e de recuperação (consultas médicas, avaliação de composição corporal, banheira de gelo, terapia de compressão). O site tem um objetivo específico: comunicar esse posicionamento com clareza e levar visitantes qualificados até uma conversa no WhatsApp.

## Processo de design

A interface foi totalmente desenhada e prototipada no Figma antes de qualquer linha de código — escala tipográfica, espaçamentos, valores de cor e enquadramento das imagens foram definidos na etapa de design. A implementação seguiu esse protótipo de perto, em vez de improvisar o layout no navegador, então o site final corresponde ao mockup original seção por seção.

## Sistema de design e posicionamento

O posicionamento da LeCLUB — um studio pequeno e curado, não uma academia de alto volume — orientou decisões concretas de produto, não só o estilo visual:

- **Linguagem visual**: combinação editorial entre títulos em serifa (Cormorant Garamond) e corpo de texto em sans-serif (Manrope), sobre uma paleta de tons naturais (`#0D2B25` verde-escuro, `#BA753D` cobre, neutros areia), fugindo da estética energética típica de academia.
- **Estrutura de conteúdo**: as seções giram em torno de cuidado, técnica e continuidade ("Sobre", "Local", "Planos"), não em torno de promoções ou grade de horários.
- **Estrutura da oferta**: um único plano anual detalhado, em vez de uma tabela de preços em camadas, coerente com um modelo de serviço de capacidade limitada.

| Variável | Valor | Uso |
|---|---|---|
| `--dark-green` | `#0D2B25` | Fundo principal, seções escuras |
| `--copper` | `#BA753D` | Destaque, CTAs |
| `--light-sand` / `--dark-sand` | `#E3DED4` / `#CDC7BC` | Fundos de seções claras |
| `--white-typo` / `--text-dark` | `#E4E2DB` / `#0D2B25` | Tipografia sobre fundo escuro / claro |

## Stack técnica

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- `next/font` (Cormorant Garamond, Manrope) e `next/image` para otimização de fontes e imagens
- [lucide-react](https://lucide.dev) para ícones

## Funcionalidades

- Layout mobile-first com variantes de componente dedicadas para mobile/desktop em cada seção (`HeroMobile`/`HeroDesktop`, etc.), permitindo controle preciso em cada breakpoint em vez de depender só de classes responsivas
- Navbar com variantes clara/escura conforme o fundo da seção
- Navegação por âncoras (`#sobre`, `#local`, `#planos`) com scroll suave
- Botão flutuante de WhatsApp sensível ao scroll, isolado como Client Component para manter o resto da página renderizada no servidor
- Separação entre dados e apresentação no card de planos (`plans.data.ts` alimenta `PlanCard`, `PlanBenefit`, `PlanPriceBox`, `PlanCTA`), permitindo atualizar a oferta sem mexer no layout
- SEO básico via Metadata API do Next.js

## Estrutura do projeto

```
app/
  layout.tsx        # Layout raiz, fontes, metadata
  page.tsx           # Composição das seções
  globals.css         # Design tokens (variáveis CSS)
components/
  Hero.tsx, Sobre.tsx, Local.tsx
  plans/               # Card de planos e seus dados
  Navbar.tsx, Footer.tsx, FloatingWhatsAppDesktop.tsx
  Container.tsx, MediaFrame.tsx, SectionIntro.tsx  # Primitivas de layout compartilhadas
```

## Como rodar o projeto

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run lint     # ESLint
```

## Próximos passos

- [ ] Blog (`/blog`, posts em MDX)
- [ ] SEO avançado (OpenGraph, metadata estruturada) e compressão de imagens
- [ ] Analytics

## Autoria

Desenvolvido de ponta a ponta por [Daisy Oliani](https://www.linkedin.com/in/daisy-oliani).

## Licença

MIT
