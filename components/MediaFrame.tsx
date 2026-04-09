import { ReactNode } from "react";

type MediaFrameProps = {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export default function MediaFrame({
  children,
  variant = "light",
  className = "",
}: MediaFrameProps) {
  const frameColorClass =
    variant === "dark"
      ? "border-[color:var(--white-typo)]"
      : "border-[color:var(--light-sand)]";

  return (
    <div
      className={`overflow-hidden rounded-lg border-[6px] ${frameColorClass} ${className}`}
    >
      {children}
    </div>
  );
}