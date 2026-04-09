import Image from "next/image";
import Container from "./Container";
import MediaFrame from "./MediaFrame";
import SectionIntro from "./SectionIntro";
import Navbar from "./Navbar";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="w-full bg-[var(--dark-green)]"
    >
      <AboutMobile />
      <AboutDesktop />
    </section>
  );
}

function AboutMobile() {
  return (
    <div id="sobre"className="min-h-[100svh] bg-[var(--dark-green)] py-24 md:hidden">
      <Container>
        <div className="flex flex-col gap-8">
          <SectionIntro
            title="Sobre"
            titleId="about-heading"
            className="max-w-[380px]"
            titleClassName="text-[40px] leading-[1] tracking-[0.01em] xl:text-[40px]"
            contentClassName="mt-6 text-[14px] leading-[1.75] text-[var(--white-typo)] space-y-5"
          >
            <p>Na LeCLUB, o movimento é um meio — não um fim.</p>

            <p>
              Acreditamos no corpo como um espaço de escuta, presença e
              construção contínua.
            </p>
          </SectionIntro>

          <MediaFrame variant="dark" className="relative aspect-[1.25/1] w-full border-[4px]">
            <Image
              src="/sobre_instrutora.png"
              alt="Experiência de treino com estética boutique e wellness"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </MediaFrame>

          <div className="space-y-5 text-[14px] leading-[1.75] text-[var(--white-typo)]">
            <p>
              Aqui, a força é construída com técnica, constância e consciência.
              Cada treino respeita o ritmo individual, valoriza a qualidade do
              gesto e acontece a partir de um olhar atento sobre o corpo, suas
              necessidades e seus limites.
            </p>

            <p>
              Mais do que treinar, acompanhamos processos. Um corpo forte,
              funcional e presente. Preparado para sustentar o dia a dia, a
              mente e o tempo.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function AboutDesktop() {
  return (
    <div id="sobre" className="relative hidden h-[100svh] bg-[var(--dark-green)] md:block">
      <Container>
        {/* <Navbar variant="dark" /> */}
        <div className="mx-auto flex h-full w-full max-w-[980px] items-center">
          <div className="grid w-full grid-cols-[300px_400px] items-center justify-center gap-x-12">
            <SectionIntro
              title="Sobre"
              titleId="about-heading"
              className="max-w-[300px]"
            >
              <p>Na LeCLUB, o movimento é um meio — não um fim.</p>

              <p>
                Acreditamos no corpo como um espaço de escuta, presença e
                construção contínua.
              </p>

              <p>
                Aqui, a força é construída com técnica, constância e
                consciência. Cada treino respeita o ritmo individual, valoriza
                a qualidade do gesto e acontece a partir de um olhar atento
                sobre o corpo, suas necessidades e seus limites.
              </p>

              <p>
                Mais do que treinar, acompanhamos processos. Um corpo forte,
                funcional e presente. Preparado para sustentar o dia a dia, a
                mente e o tempo.
              </p>
            </SectionIntro>

            <div className="flex justify-start">
              <MediaFrame variant="dark" className="relative aspect-[1.24/1] w-full max-w-[400px]">
                <Image
                  src="/sobre_instrutora.png"
                  alt="Experiência de treino com estética boutique e wellness"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </MediaFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}