import type { NextConfig } from "next";

// Único lugar onde os links da Pacto ficam escritos.
// Se a Pacto trocar a chave (k=...), basta editar aqui.
const PACTO_UNIT = "un=1&k=ca89d02626bca25861157f7d214c12fc";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/inscricao",
        destination: `https://vendas.online.sistemapacto.com.br/planos?${PACTO_UNIT}`,
        permanent: false,
      },
      {
        source: "/loja",
        destination: `https://vendas.online.sistemapacto.com.br/loja?${PACTO_UNIT}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
