import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-[var(--light-sand)]"
    >
      <HeroMobile />
      <HeroDesktop />
      <HeroHeadline />
      <Navbar variant="light" />
    </section>
  );
}

function HeroMobile() {
  return (
    <div className="relative h-[100svh] min-h-[620px] md:hidden">
      <Image
        src="/hero-mobile4.png"
        alt="Le Club Fitness & Wellness"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}

function HeroDesktop() {
  return (
    <div className="relative hidden h-[100svh] md:block">
      <Image
        src="/hero-desktop.png"
        alt="Le Club Fitness & Wellness"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}

function HeroHeadline() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
  {/* Mobile */}
  <div className="absolute left-1/2 top-[26%] w-[220px] -translate-x-1/2 md:hidden">
    <h1 className="text-center font-[family-name:var(--font-cormorant)] text-[25px] leading-[1.08] tracking-[0.01em] text-[rgba(13,43,37,0.68)]">
      Corpo,
      <br />
      movimento e
      <br />
      consciência
    </h1>
  </div>

  {/* Desktop */}
  <div className="hidden h-full xl:block">
    <div className="mx-auto flex h-full w-full max-w-[1440px] px-6 lg:px-8">
      <div className="ml-[72%] flex h-full max-w-[300px] items-end pb-36 pr-16">
        <h1 className="font-[family-name:var(--font-cormorant)] text-[32px] leading-[1.1] tracking-[0.01em] text-[rgba(13,43,37,0.68)]">
          Corpo, movimento
          <br />
          e consciência
        </h1>
      </div>
    </div>
  </div>
</div>
  )}