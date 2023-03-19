import Link from "next/link"

type SidebarProps = {
  items: Array<{
    label: string
    path: string
  }>
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <>
      <h2 className="mb-8 text-5xl font-thin md:mt-2 lg:mt-2 md:mb-6 lg:mb-8 md:text-4xl lg:text-5xl">
        projects
      </h2>
      <nav aria-label="Projects Navigation">
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.path} className="underline underline-offset-4">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
