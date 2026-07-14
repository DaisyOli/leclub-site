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
      className="group mx-auto flex h-[38px] w-[82%] items-center justify-center gap-2.5 rounded-full bg-(--dark-green) px-4 text-center text-[11.5px] font-medium leading-none text-[var(--white-typo)] transition duration-300 hover:opacity-95 md:h-[40px] md:w-[84%] md:text-[12px] lg:h-[42px] lg:w-[88%] lg:text-[12.5px]"
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