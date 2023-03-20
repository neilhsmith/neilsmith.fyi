import Link from "next/link"
import Image from "next/image"
import GitHub from "@components/icons/GitHub"
import Linkedin from "./icons/Linkedin"

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <header role="banner">
        <h1>
          <Link
            href="/"
            aria-label="Home page"
            className="flex items-center gap-4 text-3xl font-thin underline md:text-4xl underline-offset-4"
          >
            <Image
              priority
              src="/portrait-100.jpg"
              width={72}
              height={72}
              alt="Small, stylized portrait of Neil Smith"
              className="rounded-full"
            />
            neil smith
          </Link>
        </h1>
      </header>
      <nav aria-label="External Navigation" role="navigation">
        <ul className="flex items-center gap-8">
          <li>
            <Link prefetch={false} href="https://github.com/neilhsmith">
              <span className="sr-only">GitHub</span>
              <GitHub />
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              href="https://www.linkedin.com/in/neil-smith-br"
            >
              <span className="sr-only">Linkedin</span>
              <Linkedin />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
