type IconProps = {
  className?: string;
};

function BaseIcon({
  children,
  className = "",
}: IconProps & {
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ClinicalCareIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="24" cy="14" r="6" />
      <path d="M14 39v-5.5c0-5.5 4.5-10 10-10s10 4.5 10 10V39" />
      <path d="M19 39V28.5" />
      <path d="M29 39V28.5" />
      <path d="M22 32h4" />
      <path d="M24 30v4" />
    </BaseIcon>
  );
}

export function AssessmentIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="14" y="10" width="20" height="30" rx="2.5" />
      <path d="M20 10V7h8v3" />
      <path d="M19 18h2" />
      <path d="M24 18h6" />
      <path d="M19 24h2" />
      <path d="M24 24h6" />
      <path d="M19 30h2" />
      <path d="M24 30h6" />
      <path d="M19 36h2" />
      <path d="M24 36h6" />
    </BaseIcon>
  );
}

export function LeClubExperienceIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="16" y="9" width="16" height="31" rx="3" />
      <path d="M20 9V6h8v3" />
      <path d="M20 16h8" />
      <path d="M21 23c1.6-1.8 4.4-1.8 6 0" />
      <path d="M21 29c1.6 1.8 4.4 1.8 6 0" />
      <path d="M24 22v8" />
    </BaseIcon>
  );
}

export function RecoveryIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M10 25h25.5c2.5 0 4.5 2 4.5 4.5S38 34 35.5 34H16c-3.3 0-6-2.7-6-6V17" />
      <path d="M16 34l-2 5" />
      <path d="M34 34l2 5" />
      <path d="M16 19h10" />
      <path d="M26 19c3.5 0 6 2.5 6 6" />
      <circle cx="17" cy="14" r="4" />
      <path d="M34 14l4-4" />
      <path d="M36 8l4 4" />
    </BaseIcon>
  );
}

export function TagIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M10 14v12l14 14 14-14-14-14H12a2 2 0 0 0-2 2Z" />
      <circle cx="18" cy="20" r="2" />
    </BaseIcon>
  );
}

export function LeafIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M24 40V25" />
      <path d="M24 31c-8 0-13-5-14-15 10 1 15 6 14 15Z" />
      <path d="M24 31c8 0 13-5 14-15-10 1-15 6-14 15Z" />
      <path d="M24 25c-4-3-5-8-2-15 5 5 6 10 2 15Z" />
    </BaseIcon>
  );
}

export function ShieldIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M24 7 37 12v10c0 8.5-5.4 15-13 19-7.6-4-13-10.5-13-19V12l13-5Z" />
      <path d="m18 24 4 4 8-9" />
    </BaseIcon>
  );
}

export function WellnessLeafIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M24 40V25" />

      <path d="M24 30c-7 0-12-5-13-14 9 1 14 6 13 14Z" />

      <path d="M24 30c7 0 12-5 13-14-9 1-14 6-13 14Z" />

      <path d="M24 24c-3-3-4-8-1-14 4 5 5 10 1 14Z" />
    </BaseIcon>
  );
}

export function WellnessOutlineIcon({ className = "" }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M14 34c10-2 16-10 20-22" />

      <path d="M15 33c-2-8 1-15 10-20" />

      <path d="M23 25c-6-1-10-5-12-12 8 1 13 5 12 12Z" />
    </BaseIcon>
  );
}