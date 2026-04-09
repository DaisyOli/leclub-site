import Link from "next/link";
import Container from "./Container";
import LogoDark from "./LogoDark";
import LogoLight from "./LogoLight";

type NavbarProps = {
  variant?: "light" | "dark";
};

export default function Navbar({ variant = "light" }: NavbarProps) {
  return (
    <>
      <NavbarMobile variant={variant} />
      <NavbarDesktop variant={variant} />
    </>
  );
}

function NavbarMobile({ variant = "light" }: NavbarProps) {
  const isDark = variant === "dark";

  const subnavClass = [
    "whitespace-nowrap text-[11px] font-medium tracking-[0.03em] transition-opacity duration-200 hover:opacity-70",
    isDark ? "text-[var(--white-typo)]" : "text-[var(--nav-text)]",
  ].join(" ");

  const dotClass = isDark
    ? "text-[var(--white-typo)]/45"
    : "text-[var(--nav-text)]/35";

  const ctaClass = [
    "inline-flex h-[39px] min-w-[86px] items-center justify-center rounded-full border",
    "px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.02em] whitespace-nowrap transition-all duration-300",
    isDark
      ? "border-[var(--copper)] bg-[var(--copper)] text-[var(--white-typo)] hover:opacity-90"
      : "border-[var(--nav-text)] bg-[var(--light-sand)] text-[var(--nav-text)] hover:bg-[var(--dark-green)] hover:text-[var(--white-typo)]",
  ].join(" ");

  return (
    <header className="absolute left-0 top-0 z-50 w-full md:hidden">
      <Container>
        <div className="px-[10px] pt-6">
          <div className="grid grid-cols-3 items-start">
            <Link
              href="/"
              aria-label="Ir para o início"
              className="justify-self-start shrink-0 -translate-x-2 -translate-y-[0.5px]"
            >
              <span className="inline-block origin-left scale-[0.89]">
                {isDark ? <LogoLight /> : <LogoDark />}
              </span>
            </Link>

            <nav className="justify-self-center flex items-center gap-2 pt-1">
              <Link href="#sobre" className={subnavClass}>
                Sobre
              </Link>

              <span className={dotClass}>·</span>

              <Link href="#local" className={subnavClass}>
                Local
              </Link>
            </nav>

            <Link
  href="https://vendas.online.sistemapacto.com.br/planos?un=1&k=ca89d02626bca25861157f7d214c12fc"
  target="_blank"
  rel="noopener noreferrer"
  className={`${ctaClass} justify-self-end translate-x-1 -translate-y-1`}
>
  Planos
</Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

function NavbarDesktop({ variant = "light" }: NavbarProps) {
  const isDark = variant === "dark";

  return (
    <header className="absolute left-0 top-0 z-50 hidden w-full md:block">
      <Container>
        <div
          className={[
            "mt-6 flex items-center justify-between px-4 lg:px-8",
            isDark ? "bg-[var(--nav-text)] py-4" : "bg-transparent py-5",
          ].join(" ")}
        >
          <Link href="/" aria-label="Ir para o início" className="shrink-0">
            {isDark ? <LogoLight /> : <LogoDark />}
          </Link>

          <nav className="flex items-center gap-8 lg:gap-10">
            <Link
              href="#sobre"
              className={[
                "font-medium text-sm tracking-[0.08em] transition-opacity duration-200 hover:opacity-70",
                isDark
                  ? "text-[var(--white-typo)]"
                  : "text-[var(--nav-text)]",
              ].join(" ")}
            >
              Sobre
            </Link>

            <Link
              href="#local"
              className={[
                "font-medium text-sm tracking-[0.08em] transition-opacity duration-200 hover:opacity-70",
                isDark
                  ? "text-[var(--white-typo)]"
                  : "text-[var(--nav-text)]",
              ].join(" ")}
            >
              Local
            </Link>
          </nav>

          <Link
            href="https://vendas.online.sistemapacto.com.br/planos?un=1&k=ca89d02626bca25861157f7d214c12fc"
             target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex shrink-0 items-center justify-center rounded-full border px-6 py-2.5 text-[13px] font-medium tracking-[0.02em] -translate-y-[3px] mr-8 transition-all duration-300",
              isDark
                ? "border-[var(--copper)] bg-[var(--copper)] text-[var(--white-typo)] hover:opacity-90"
                : "border-[var(--nav-text)] bg-[var(--light-sand)] text-[var(--nav-text)] hover:bg-[var(--dark-green)] hover:text-[var(--white-typo)]",
            ].join(" ")}
          >
            Conheça os planos
          </Link>
        </div>
      </Container>
    </header>
  );
}