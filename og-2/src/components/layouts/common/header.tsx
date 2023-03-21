import Link from "next/link"
import Image from "next/image"
import GitHub from "@components/svgs/GitHub"
import Linkedin from "@components/svgs/Linkedin"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1>
        <Link
          href="/"
          aria-label="Home page"
          className="flex items-center gap-4 text-3xl font-thin underline transition-colors duration-200 transform md:text-4xl underline-offset-4 hover:text-brand-hover hover:dark:text-brand-dark-hover"
        >
          <Image
            priority
            src="/portrait-100.jpg"
            width={72}
            height={72}
            alt="Small, stylized portrait of Neil Smith"
            className="rounded-full transform-none"
          />
          neil smith
        </Link>
      </h1>
      <nav aria-label="External Navigation" role="navigation">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              prefetch={false}
              target="_blank"
              href="https://github.com/neilhsmith"
            >
              <span className="sr-only">GitHub</span>
              <GitHub />
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              target="_blank"
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
