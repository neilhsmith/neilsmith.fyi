import Logo from "@components/logo"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header role="banner" className="flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <nav aria-label="External Navigation">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              prefetch={false}
              href="https://www.linkedin.com/in/neil-smith-br"
            >
              <Image
                priority
                src="linkedin.svg"
                height={26}
                width={26}
                alt="Linkedin Logo"
                className="transition-all duration-300 transform hover:scale-125"
              />
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="https://github.com/neilhsmith">
              <Image
                priority
                src="github-mark-white.svg"
                height={26}
                width={26}
                alt="Github Logo"
                className="transition-all duration-300 transform hover:scale-125"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
