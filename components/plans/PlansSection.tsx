import Container from "../Container";
import SectionIntro from "../SectionIntro";
import PlanCard from "./PlanCard";
import {
  WellnessLeafIcon,
  WellnessOutlineIcon,
} from "../icons/PlanIcons";

export default function PlansSection() {
  return (
    <section
      id="planos"
      aria-labelledby="plans-heading"
      className="w-full bg-[var(--dark-green)] py-20 lg:min-h-screen"
      
    >
      <Container>
        <div className="mx-auto grid gap-12 lg:min-h-[calc(100vh-10rem)] lg:w-full lg:max-w-[980px] lg:grid-cols-[280px_620px] lg:items-center lg:justify-center lg:gap-10 xl:max-w-[1060px] xl:grid-cols-[300px_660px]">
          <div className="max-w-[360px] pl-4 lg:pl-8 xl:pl-10">
            <SectionIntro
              title="Planos"
              titleId="plans-heading"
              className="max-w-[300px]"
              titleClassName="text-[50px]"
              contentClassName="scroll-mt-24 mt-8 text-[13px] leading-[1.8]"
            >
              <p className="text-[var(--copper)] uppercase tracking-[0.16em]">
                plano anual
              </p>

              <p className="mt-8 max-w-[260px] pl-5 text-[13px] leading-[1.9] text-[var(--white-typo)]/88">
                Um plano pensado para quem busca constância,
                acompanhamento próximo e uma experiência completa de cuidado
                com o corpo.
              </p>
            </SectionIntro>

            <div className="mt-10 h-px w-full bg-[var(--white-typo)]/30" />

            <div className="mt-8 space-y-7 pl-1 text-[13px] leading-[1.6] text-[var(--white-typo)]">
  <div className="flex items-center gap-4">
    <WellnessLeafIcon className="h-7 w-7 shrink-0 text-[var(--copper)]" />

    <p className="uppercase tracking-[0.10em]">
      Saúde • Performance • Longevidade
    </p>
  </div>

  <div className="flex items-start gap-4">
    <WellnessOutlineIcon className="mt-1 h-7 w-7 shrink-0 text-[var(--copper)]" />

    <p className="max-w-[280px] font-[family-name:var(--font-cormorant)] text-[18px] leading-[1.35]">
      Condição especial de pré-venda para os primeiros alunos.
    </p>
  </div>
</div>
            
          </div>

          <PlanCard />
        </div>
      </Container>
    </section>
  );
}