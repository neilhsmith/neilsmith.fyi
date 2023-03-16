import Logo from "@components/logo"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header role="banner">
      <nav aria-label="Main Navigation" role="navigation">
        <ul className="flex items-center gap-8 lg:gap-8">
          <li className="mr-auto">
            <Link href="/">
              <Logo />
            </Link>
          </li>
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
                className="hover:scale-125 transform transition-all duration-300"
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
                className="hover:scale-125 transform transition-all duration-300"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
