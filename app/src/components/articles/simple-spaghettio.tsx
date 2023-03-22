import Article from "@components/layouts/article"
import Link from "next/link"

export default function SimpleSpaghettio() {
  return (
    <Article
      title="simple-spaghett.io"
      body={
        <>
          <p>
            Irure laboris consequat excepteur sint pariatur reprehenderit
            adipisicing. Laboris incididunt velit eiusmod amet non voluptate. Eu
            dolor laborum ea aliquip cupidatat consectetur. Minim cupidatat
            mollit Lorem veniam exercitation pariatur velit tempor.
          </p>
        </>
      }
      footer={
        <ul className="flex flex-col gap-8 md:flex-row">
          <li>
            <Link href="/cv">Visit Site</Link>
          </li>
          <li>
            <Link href="/contact">GitHub</Link>
          </li>
        </ul>
      }
    />
  )
}
