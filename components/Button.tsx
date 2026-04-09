import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "outline"
  href?: string
}

export default function Button({
  children,
  variant = "primary",
  href
}: ButtonProps) {

  const baseStyles =
    "px-6 py-2.5 rounded-full text-[13px] font-medium tracking-[0.03em] transition-all duration-300"

  const variants = {
    primary:
      "bg-[var(--copper)] text-[var(--white-typo)] hover:opacity-90",

    outline:
      "bg-[var(--light-sand)] border border-[var(--dark-green)] text-[var(--dark-green)] hover:bg-[var(--dark-green)] hover:text-[var(--white-typo)]"
  }

  const className = `${baseStyles} ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className}>
      {children}
    </button>
  )
}