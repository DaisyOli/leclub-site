import { ReactNode } from "react";

type SectionIntroProps = {
  title: string;
  titleId?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
};

export default function SectionIntro({
  title,
  titleId,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
}: SectionIntroProps) {
  return (
    <div className={className}>
      <h2
        id={titleId}
        className={`font-[family-name:var(--font-cormorant)] text-[46px] leading-[0.95] tracking-[-0.02em] text-[color:var(--white-typo)] xl:text-[50px] ${titleClassName}`}
      >
        {title}
      </h2>

      <div
        className={`mt-7 space-y-5 text-[13px] leading-[1.9] text-[color:var(--white-typo)] ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}