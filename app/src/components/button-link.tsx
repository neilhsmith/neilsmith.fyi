import Link from "next/link"

export default function ButtonLink({
  children,
  href,
}: {
  children: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="block w-full px-8 py-4 text-lg font-light leading-normal text-center uppercase border text-brand-light-text border-slate-800 dark:text-brand-dark-text dark:border-white md:w-auto"
    >
      {children}
    </Link>
  )
}
