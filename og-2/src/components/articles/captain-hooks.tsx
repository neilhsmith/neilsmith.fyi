import LeftBorder from "@components/left-border"
import Link from "next/link"

export default function CaptainHooks() {
  return (
    <article>
      <h2 className="mb-8 text-3xl font-thin md:text-5xl lg:text-6xl">
        captain hooks
      </h2>
      <LeftBorder>
        <p>
          Irure laboris consequat excepteur sint pariatur reprehenderit
          adipisicing. Laboris incididunt velit eiusmod amet non voluptate. Eu
          dolor laborum ea aliquip cupidatat consectetur. Minim cupidatat mollit
          Lorem veniam exercitation pariatur velit tempor.
        </p>
        <div className="pt-6 pb-1">
          <ul className="flex flex-col gap-8 md:flex-row">
            <li>
              <Link href="/contact">GitHub</Link>
            </li>
            <li>
              <Link href="/cv">NPM</Link>
            </li>
          </ul>
        </div>
      </LeftBorder>
    </article>
  )
}
