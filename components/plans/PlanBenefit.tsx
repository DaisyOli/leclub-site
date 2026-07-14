type PlanBenefitProps = {
  number: string;
  title: string;
  items: string[];
  Icon: React.ComponentType<{
    className?: string;
  }>;
};

export default function PlanBenefit({
  number,
  title,
  items,
  Icon,
}: PlanBenefitProps) {
  return (
    <article className="grid grid-cols-[42px_1fr] gap-4 lg:grid-cols-[44px_1fr]">
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[var(--light-sand)]/55 text-[var(--copper)] lg:h-11 lg:w-11">
        <Icon className="h-5.5 w-5.5" />
      </div>

      <div>
        <h3 className="text-[12px] font-semibold uppercase leading-[1.25] tracking-[-0.01em] text-[var(--text-dark)] lg:text-[12px]">
          <span className="mr-1.5">{number}.</span>
          {title}
        </h3>

        <ul className="mt-2.5 space-y-1.5 text-[11.5px] leading-[1.45] text-[var(--text-dark)] lg:text-[11px] lg:leading-[1.4]">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-[3.5px] w-[3.5px] shrink-0 rounded-full bg-[var(--text-dark)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}