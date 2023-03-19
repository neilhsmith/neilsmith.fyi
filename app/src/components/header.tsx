import Logo from "@components/logo"
import Link from "next/link"
import Image from "next/image"
import GitHub from "@components/icons/GitHub"
import Linkedin from "./icons/Linkedin"

export default function Header() {
  return (
    <header role="banner" className="flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <nav aria-label="External Navigation">
        <ul className="flex items-center gap-8">
          <li>
            <Link prefetch={false} href="https://github.com/neilhsmith">
              <GitHub />
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              href="https://www.linkedin.com/in/neil-smith-br"
            >
              <Linkedin />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
