import { ArrowRight } from "lucide-react";

type PlanCTAProps = {
  label: string;
  href: string;
};

export default function PlanCTA({ label, href }: PlanCTAProps) {
  return (
    <a
      href="https://vendas.online.sistemapacto.com.br/planos?un=1&k=ca89d02626bca25861157f7d214c12fc"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group mx-auto flex h-[46px] w-[82%] items-center justify-center gap-2.5 rounded-full bg-[var(--copper-cta)] px-4 text-center text-[12.5px] font-medium leading-none text-white transition duration-300 hover:bg-[var(--copper-deep)] md:h-[48px] md:w-[84%] md:text-[13px] lg:h-[52px] lg:w-[88%] lg:text-[13.5px]"
    >
      <span>{label}</span>

      <ArrowRight
        size={17}
        strokeWidth={1.2}
        className="shrink-0 transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}