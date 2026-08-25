import Container from "./Container";
import LogoLight from "./LogoLight";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const clubLinks: FooterLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Local", href: "#local" },
  { label: "Planos", href: "/loja", external: true },
];

const contactLinks: FooterLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5511947961496",
    external: true,
  },
  { label: "Contato", href: "mailto:contato@leclubfw.com" },
  { label: "Faça parte da equipe", href: "mailto:recursoshumanos@leclubfw.com" },
];

// Rótulos recuam como estrutura; os links é que carregam o peso.
const labelClass =
  "text-[10.5px] font-medium uppercase tracking-[0.22em] text-[var(--text-light)]/45";

const linkClass =
  "w-fit text-[14px] text-[var(--text-light)]/85 transition-colors duration-200 hover:text-[var(--text-light)] md:text-[15px]";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--coffee)] py-12 text-[var(--text-light)] md:py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto_auto] md:gap-12 lg:gap-20">
          <div className="flex flex-col items-start gap-6">
            <LogoLight />

            <address className="not-italic">
              <p className="text-[14px] leading-[1.7] text-[var(--text-light)]/85">
                Rua Pio XI, 2162
                <br />
                Alto de Pinheiros
                <br />
                05468-140 &mdash; São Paulo, SP
              </p>

              <a
                href="https://maps.app.goo.gl/GENbfPhSk6Q5bNdc9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o endereço da LeCLUB no Google Maps"
                className="mt-3 inline-block text-[13px] text-[var(--text-light)]/60 underline underline-offset-4 transition-colors duration-200 hover:text-[var(--text-light)]"
              >
                Ver no mapa
              </a>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:contents">
            <FooterNav
              label="Academia"
              ariaLabel="Links institucionais"
              links={clubLinks}
            />

            <FooterNav
              label="Fale Conosco"
              ariaLabel="Links de contato"
              links={contactLinks}
            />

            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <span className={labelClass}>Siga</span>

              <a
                href="https://instagram.com/leclubfw"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Le Club"
                className="w-fit text-[var(--text-light)]/85 transition-colors duration-200 hover:text-[var(--text-light)]"
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

        <div className="mt-12 border-t border-[var(--text-light)]/10 pt-6 text-center md:mt-14">
          <a
            href="https://www.linkedin.com/in/daisy-oliani"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-[var(--text-light)]/45 transition-colors duration-200 hover:text-[var(--text-light)]/70"
          >
            Site desenvolvido por Daisy Oliani
          </a>
        </div>
      </Container>
    </footer>
  );
}

type FooterNavProps = {
  label: string;
  ariaLabel: string;
  links: FooterLink[];
};

function FooterNav({ label, ariaLabel, links }: FooterNavProps) {
  return (
    <nav className="flex flex-col gap-4" aria-label={ariaLabel}>
      <h3 className={labelClass}>{label}</h3>

      <ul className="flex flex-col gap-3">
        {links.map(({ label: text, href, external }) => (
          <li key={text}>
            <a
              href={href}
              className={linkClass}
              {...(external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
