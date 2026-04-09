import Container from "./Container";
import LogoLight from "./LogoLight";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--dark-green)] py-10 text-[var(--text-light)] md:py-12">
      <Container>
        <FooterDesktop />
        <FooterMobile />
      </Container>
    </footer>
  );
}

function FooterDesktop() {
  return (
    <div className="hidden md:grid md:grid-cols-[1.4fr_1fr_1fr_0.6fr] md:gap-10 lg:gap-16">
      <div className="flex items-start">
        <LogoLight />
      </div>

      <nav className="flex flex-col gap-3 text-[15px]" aria-label="Links institucionais">
        <h3 className="opacity-90">Quem somos</h3>

        <a href="#sobre" className="opacity-90 transition-opacity hover:opacity-70">
          Sobre
        </a>
        <a href="#local" className="opacity-90 transition-opacity hover:opacity-70">
          Local
        </a>
        <a href="https://vendas.online.sistemapacto.com.br/loja?un=1&k=ca89d02626bca25861157f7d214c12fc" className="opacity-90 transition-opacity hover:opacity-70" target="_blank" rel="noreferrer">
        
          Planos
        </a>
      </nav>

      <nav className="flex flex-col gap-3 text-[15px]" aria-label="Links de contato">
        <h3 className="opacity-90">Fale Conosco</h3>

        <a href="mailto:contato@leclubfw.com" className="opacity-90 transition-opacity hover:opacity-70">
          Contato
        </a>
        <a
  href="mailto:recursoshumanos@leclubfw.com"
  className="opacity-90 transition-opacity hover:opacity-70"
>
  Faça parte da equipe
</a>
      </nav>

      <div className="flex flex-col gap-3">
        <span className="text-[15px] opacity-90">Siga</span>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram da Le Club"
          className="w-fit text-[var(--text-light)] opacity-90 transition-opacity hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-[18px] w-[18px]"
          >
            <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" />
            <circle cx="12" cy="12" r="4.25" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function FooterMobile() {
  return (
    <div className="flex flex-col gap-8 md:hidden">
      <div className="flex justify-start">
        <LogoLight />
      </div>

      <div className="grid grid-cols-1 gap-8 text-sm">
        <nav className="flex flex-col gap-3" aria-label="Links institucionais">
          <h3 className="opacity-90">Quem somos</h3>

          <a href="#sobre" className="opacity-90 transition-opacity hover:opacity-70">
            Sobre
          </a>
          <a href="#local" className="opacity-90 transition-opacity hover:opacity-70">
            Local
          </a>
          <a href="https://vendas.online.sistemapacto.com.br/loja?un=1&k=ca89d02626bca25861157f7d214c12fc" className="opacity-90 transition-opacity hover:opacity-70" target="_blank" rel="noreferrer">
            Planos
          </a>
        </nav>

        <nav className="flex flex-col gap-3" aria-label="Links de contato">
          <h3 className="opacity-90">Fale Conosco</h3>

          <a href="mailto:contato@leclubfw.com" className="opacity-90 transition-opacity hover:opacity-70">
            Contato
          </a>
          <a
  href="mailto:recursoshumanos@leclubfw.com"
  className="opacity-90 transition-opacity hover:opacity-70"
>
  Faça parte da equipe
</a>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-sm opacity-90">Siga</span>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Le Club"
            className="w-fit text-[var(--text-light)] opacity-90 transition-opacity hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-[18px] w-[18px]"
            >
              <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" />
              <circle cx="12" cy="12" r="4.25" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}