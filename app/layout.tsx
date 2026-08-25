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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leclubfw.com"),
  title: "Le Club Fitness & Wellness",
  description: "Corpo, movimento e consciência",
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