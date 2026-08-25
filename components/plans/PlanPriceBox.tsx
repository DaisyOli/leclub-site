import { LeafIcon, TagIcon } from "../icons/PlanIcons";

type PlanPriceBoxProps = {
  referencePrice: string;
  referenceFee: string;
  presalePrice: string;
  presaleFee: string;
  condition: string;
};

export default function PlanPriceBox({
  referencePrice,
  referenceFee,
  presalePrice,
  presaleFee,
  condition,
}: PlanPriceBoxProps) {
  return (
    <div className="rounded-[20px] border border-[var(--dark-sand)]/25 bg-[var(--light-sand)]/25 px-3 py-4 md:px-5 md:py-4">
      <div className="grid gap-5 text-center md:grid-cols-[1fr_1.25fr_1fr] md:items-center md:gap-0 md:text-left">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:gap-3">
          <TagIcon className="h-6 w-6 shrink-0 text-[var(--copper)]" />

          <div>
            <p className="text-[12px] leading-none text-[var(--text-dark)]">
              Valor de referência:
            </p>

            <p className="mt-1 text-[17px] leading-none text-[var(--copper)] line-through">
              {referencePrice}
            </p>

            <p className="mt-1.5 text-[11px] leading-[1.3] text-[var(--text-dark)]/60">
              {referenceFee}
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--dark-sand)]/25 pt-5 md:border-x md:border-y-0 md:px-8 md:py-0">
          <p className="text-[12px] leading-none text-[var(--text-dark)]">
            Valor especial de pré-venda:
          </p>

          <p className="mt-2 text-[26px] font-semibold leading-none tracking-[0.02em] text-[var(--copper)] md:text-[24px] xl:text-[26px]">
            {presalePrice}
          </p>

          <p className="mt-2 text-[11px] font-medium leading-[1.3] text-[var(--copper)]">
            {presaleFee}
          </p>
        </div>

        <div className="hidden items-center justify-center gap-2 md:flex md:justify-start md:gap-3">
          <LeafIcon className="h-5 w-5 shrink-0 text-[var(--copper)] md:h-7 md:w-7" />

          <p className="max-w-[220px] text-[11px] leading-[1.3] text-[var(--text-dark)] md:text-[11px]">
            {condition}
          </p>
        </div>
      </div>
    </div>
  );
}
