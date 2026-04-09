import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--light-sand)]">
      <HeroMobile />
      <HeroDesktop />
      <Navbar variant="light" />
    </section>
  );
}


function HeroMobile() {
  return (
    <div id="hero" className="relative h-[100svh] min-h-[620px] md:hidden">
      <Image
        src="/hero-mobile.png"
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
    <div id="hero" className="relative hidden h-[100svh] md:block">
      <Image
        src="/hero-desktop.png"
        alt="Le Club Fitness & Wellness"
        fill
        priority
        className="object-cover object-center"
      />
    <div className="absolute inset-0 hidden xl:block">
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
);}
