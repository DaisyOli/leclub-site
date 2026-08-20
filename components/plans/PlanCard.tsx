import PlanBenefit from "./PlanBenefit";
import PlanCTA from "./PlanCTA";
import PlanPriceBox from "./PlanPriceBox";

import { annualPlan, planBenefits } from "./plans.data";

export default function PlanCard() {
  return (
    <div className="rounded-[22px] bg-[var(--neutral-sand)] px-4 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.18)] md:px-5 md:py-5 xl:px-6 xl:py-5">
      <div className="flex flex-col gap-3">
        <div className="border-b border-[var(--dark-sand)]/25 pb-3">
          <p className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-[var(--copper)] ">
            {annualPlan.eyebrow}
          </p>

          <p className="mt-2 max-w-[620px] text-[12px] leading-[1.5] text-[var(--text-dark)]">
            {annualPlan.description}
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-3.5 xl:grid-cols-2">
          {planBenefits.map((benefit) => (
            <PlanBenefit key={benefit.title} {...benefit} />
          ))}
        </div>

        <div className="space-y-3.5">
          <PlanPriceBox
            referencePrice={annualPlan.referencePrice}
            presalePrice={annualPlan.presalePrice}
            enrollmentFee={annualPlan.enrollmentFee}
            condition={annualPlan.condition}
          />

          <PlanCTA label={annualPlan.ctaLabel} href={annualPlan.ctaHref} />

          <p className="mx-auto max-w-[620px] text-center text-[11px] leading-[1.5] text-[var(--text-dark)]/70">
            {annualPlan.footerText}
          </p>
        </div>
      </div>
    </div>
  );
}