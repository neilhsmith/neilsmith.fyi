import Link from "next/link"

const projects = [
  {
    href: "/#simple-spaghettio",
    label: "simple spaghettio",
  },
  {
    href: "/#captain-hooks",
    label: "captain hooks",
  },
  // {
  //   href: "/#brsl-events",
  //   label: "brsl events",
  // },
  // {
  //   href: "/#kysek",
  //   label: "kysek",
  // },
]

export default function ProjectsList() {
  return (
    <>
      <h2 className="mb-8 text-5xl font-thin md:mt-1 md:mb-6 lg:mb-8 md:text-4xl lg:text-5xl">
        projects
      </h2>
      <nav aria-label="Projects Navigation" role="navigation">
        <ul className="space-y-6">
          {projects.map((p) => (
            <ListItem key={p.href} href={p.href} label={p.label} />
          ))}
        </ul>
      </nav>
    </>
  )
}

function ListItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="underline transition-colors duration-200 transform underline-offset-4 hover:text-brand-hover hover:dark:text-brand-dark-hover"
      >
        {label}
      </Link>
    </li>
  )
}
