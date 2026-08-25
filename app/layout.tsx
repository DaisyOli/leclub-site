import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const siteName = "Le Club Fitness & Wellness";
const tagline = "Corpo, movimento e consciência";

// Na prévia de link só existe uma linha de texto, e a tagline sozinha não
// diz o que é nem onde fica. Esta descreve; a da página segue sendo a marca.
const shareDescription =
  "Academia com acompanhamento clínico, avaliações periódicas e recursos de recuperação, no Alto de Pinheiros, São Paulo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leclubfw.com"),
  title: siteName,
  description: tagline,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.leclubfw.com",
    siteName,
    title: siteName,
    description: shareDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da Le Club Fitness & Wellness, no Alto de Pinheiros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: shareDescription,
    images: ["/og-image.jpg"],
  },
};

// Dados estruturados para busca local. Sem horário de funcionamento nem
// coordenadas até que sejam confirmados — dado errado aqui é pior que ausente.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Le Club Fitness & Wellness",
  url: "https://www.leclubfw.com",
  image: "https://www.leclubfw.com/fachada.jpeg",
  telephone: "+5511932311663",
  email: "contato@leclubfw.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Pio XI, 2162",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "05468-140",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/leclubfw"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorantGaramond.variable} ${manrope.variable}`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}