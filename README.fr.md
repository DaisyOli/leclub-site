<p align="right"><a href="README.md">English</a> · <strong>Français</strong> · <a href="README.pt-BR.md">Português</a></p>

# LeCLUB Fitness & Wellness

Site vitrine pour LeCLUB Fitness & Wellness, un studio de fitness et de bien-être haut de gamme situé à Alto de Pinheiros, São Paulo. Conçu pour présenter la marque et transformer les visiteurs en prospects pour la prévente de l'abonnement annuel du studio, via WhatsApp.

## Aperçu

LeCLUB est un espace d'entraînement à capacité limitée, associant coaching de force et services cliniques et de récupération (consultations médicales, analyse de composition corporelle, bain glacé, thérapie par compression). Le site a un rôle précis : communiquer ce positionnement clairement et amener les visiteurs qualifiés jusqu'à une conversation WhatsApp.

## Démarche de conception

L'interface a été entièrement conçue et prototypée sur Figma avant l'écriture du moindre code — échelle typographique, espacements, valeurs de couleur et cadrage des images ont tous été définis en amont. L'implémentation a suivi ce prototype de près plutôt que d'improviser la mise en page dans le navigateur : le site livré correspond donc section par section aux maquettes d'origine.

## Système de design et positionnement

Le positionnement de LeCLUB — un studio restreint et sélectionné plutôt qu'une salle de sport à fort volume — a orienté des décisions produit concrètes, pas seulement le style visuel :

- **Langage visuel** : un mariage éditorial entre titres en serif (Cormorant Garamond) et un corps de texte en sans-serif (Manrope), sur une palette de tons naturels (`#0D2B25` vert foncé, `#BA753D` cuivre, neutres sable) plutôt que l'esthétique énergique habituelle des salles de sport.
- **Structure du contenu** : les sections s'organisent autour du soin, de la technique et de la continuité (« Sobre », « Local », « Planos ») plutôt qu'autour de promotions ou d'un planning de cours.
- **Structure de l'offre** : un abonnement annuel unique et détaillé, plutôt qu'une grille tarifaire à plusieurs niveaux, cohérent avec un modèle de service à capacité limitée.

| Variable | Valeur | Usage |
|---|---|---|
| `--dark-green` | `#0D2B25` | Fond principal, sections sombres |
| `--copper` | `#BA753D` | Accent, mise en avant des CTA |
| `--light-sand` / `--dark-sand` | `#E3DED4` / `#CDC7BC` | Fonds des sections claires |
| `--white-typo` / `--text-dark` | `#E4E2DB` / `#0D2B25` | Typographie sur fond sombre / clair |

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- `next/font` (Cormorant Garamond, Manrope) et `next/image` pour l'optimisation des polices et des images
- [lucide-react](https://lucide.dev) pour l'iconographie

## Fonctionnalités

- Mise en page mobile-first avec des variantes de composants dédiées mobile/desktop pour chaque section (`HeroMobile`/`HeroDesktop`, etc.), permettant un contrôle précis à chaque point de rupture plutôt que de s'appuyer uniquement sur des classes responsives
- Barre de navigation avec variantes claire/sombre selon le fond de la section affichée
- Navigation par ancres (`#sobre`, `#local`, `#planos`) avec défilement fluide
- Bouton WhatsApp flottant sensible au scroll, isolé en Client Component afin que le reste de la page reste rendu côté serveur
- Séparation données/présentation pour la carte tarifaire (`plans.data.ts` alimente `PlanCard`, `PlanBenefit`, `PlanPriceBox`, `PlanCTA`), permettant de modifier l'offre sans toucher à la mise en page
- SEO de base via la Metadata API de Next.js

## Structure du projet

```
app/
  layout.tsx        # Layout racine, polices, metadata
  page.tsx           # Composition des sections
  globals.css         # Design tokens (variables CSS)
components/
  Hero.tsx, Sobre.tsx, Local.tsx
  plans/               # Carte tarifaire et ses données
  Navbar.tsx, Footer.tsx, FloatingWhatsAppDesktop.tsx
  Container.tsx, MediaFrame.tsx, SectionIntro.tsx  # Primitives de mise en page partagées
```

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint     # ESLint
```

## Feuille de route

- [ ] Blog (`/blog`, articles en MDX)
- [ ] SEO avancé (OpenGraph, metadata structurée) et compression des images
- [ ] Analytics

## Auteure

Développé de bout en bout par [Daisy Oliani](https://www.linkedin.com/in/daisy-oliani).

## Licence

MIT
