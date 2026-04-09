import Image from "next/image";
import Container from "./Container";
import MediaFrame from "./MediaFrame";
import SectionIntro from "./SectionIntro";

export default function Local() {
  return (
    <section
      id="local"
      aria-label="Local"
      className="w-full bg-[var(--dark-sand)]"
    >
      <LocalMobile />
      <LocalDesktop />
    </section>
  );
}

function LocalMobile() {
  return (
    <div id="local" className="min-h-[100svh] bg-[var(--dark-sand)] py-24 md:hidden">
      <Container>
        <div className="flex flex-col gap-8">
          <SectionIntro
            title="Local"
            className="max-w-[380px]"
            titleClassName="text-[40px] leading-[1] tracking-[0.01em] text-[var(--text-dark)] xl:text-[40px]"
            contentClassName="mt-6 max-w-[360px] space-y-4 text-[14px] leading-[1.7] text-[var(--nav-text)]"
          >
            <p>
              A LeCLUB nasce em um espaço criado para colocar a saúde no centro da experiência. Mais do que acolher o movimento, o ambiente foi pensado para sustentar uma prática de cuidado contínua, orientada e consistente, em que o treino se integra a uma visão mais ampla de bem-estar e qualidade de vida.
            </p>

            <p>

  Localizada no Alto de Pinheiros, em São Paulo, a{" "}
  <a
    href="https://maps.app.goo.gl/GENbfPhSk6Q5bNdc9"
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-4 hover:opacity-70 transition"
    aria-label="Abrir localização da LeCLUB Fitness & Wellness no Google Maps"
  >
    LeCLUB Fitness & Wellness
  </a>{" "}
  está em um bairro marcado por áreas verdes, praças e pela proximidade do Parque Villa-Lobos. Essa atmosfera se traduz em uma arquitetura com identidade própria, em que formas, luz e materialidade constroem uma experiência fluida, envolvente e acolhedora.
</p>
          </SectionIntro>

          <MediaFrame className="relative aspect-[0.9/1] w-full border-[6px]">
            <Image
              src="/fachada.jpeg"
              alt="Fachada da Le Club Fitness & Wellness"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </MediaFrame>

          <div className="max-w-[360px] space-y-5 text-[14px] leading-[1.7] text-[var(--nav-text)]">
            

            <p>
              Mais do que um lugar para treinar, a LeCLUB propõe uma experiência em que saúde e acompanhamento se encontram com naturalidade. Um espaço pensado para quem valoriza cuidado, precisão e excelência.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MediaFrame className="relative aspect-[1.18/1] w-full border-[6px]">
              <Image
                src="/reception.jpeg"
                alt="Recepção da Le Club"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 44vw, 160px"
              />
            </MediaFrame>

            <MediaFrame className="relative aspect-[1.18/1] w-full border-[6px]">
              <Image
                src="/machine1.jpeg"
                alt="Ambiente interno de treino da Le Club"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 44vw, 160px"
              />
            </MediaFrame>
          </div>
        </div>
      </Container>
    </div>
  );
}

function LocalDesktop() {
  return (
    <div id="local" className="relative hidden h-[100svh] bg-[var(--dark-sand)] md:block">
      <Container>
        {/* <Navbar variant="light" /> */}
        <div className="mx-auto flex h-full w-full max-w-[840px] items-center">
          <div className="grid w-full grid-cols-[400px_360px] items-start justify-center gap-x-8">
            <SectionIntro
              title="Local"
              className="max-w-[360px]"
              titleClassName="text-[42px] leading-[0.95] tracking-[-0.02em] text-[var(--text-dark)] xl:text-[46px]"
              contentClassName="mt-5 space-y-5 text-[13px] leading-[1.95] text-[var(--text-dark)]"
            >
              <p>
                A LeCLUB nasce em um espaço criado para colocar a saúde no centro da experiência. Mais do que acolher o movimento, o ambiente foi pensado para sustentar uma prática de cuidado contínua, orientada e consistente, em que o treino se integra a uma visão mais ampla de bem-estar e qualidade de vida.
              </p>

              <p>
 
  Localizada no Alto de Pinheiros, em São Paulo, a{" "}
  <a
    href="https://maps.app.goo.gl/GENbfPhSk6Q5bNdc9"
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-4 hover:opacity-70 transition"
    aria-label="Abrir localização da LeCLUB Fitness & Wellness no Google Maps"
  >
    LeCLUB Fitness & Wellness
  </a>{" "}
  está em um bairro marcado por áreas verdes, praças e pela proximidade do Parque Villa-Lobos. Essa atmosfera se traduz em uma arquitetura com identidade própria, em que formas, luz e materialidade constroem uma experiência fluida, envolvente e acolhedora.
</p>

              <p>
                Mais do que um lugar para treinar, a LeCLUB propõe uma experiência em que saúde e acompanhamento se encontram com naturalidade. Um espaço pensado para quem valoriza cuidado, precisão e excelência.
              </p>
            </SectionIntro>

            <div className="grid w-[407px] grid-cols-[250px_145px] gap-3 mt-6 pt-3">
              <MediaFrame variant="light" className="relative aspect-[0.75/1] w-full">
                <Image
                  src="/fachada.jpeg"
                  alt="Fachada da Le Club Fitness & Wellness"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </MediaFrame>

              <div className="flex flex-col gap-3">
                <MediaFrame variant="light" className="relative aspect-[0.90/1] w-full">
                  <Image
                    src="/reception.jpeg"
                    alt="Recepção da Le Club"
                    fill
                    className="object-cover"
                    sizes="126px"
                  />
                </MediaFrame>

                <MediaFrame variant="dark" className="relative aspect-[0.90/1] w-full">
                  <Image
                    src="/machine1.jpeg"
                    alt="Ambiente interno de treino da Le Club"
                    fill
                    className="object-cover"
                    sizes="126px"
                  />
                </MediaFrame>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}