import ButtonLink from "@components/button-link"
import ContentViewer from "@components/content-viewer"

export default function AboutMeContent() {
  return (
    <>
      <ContentViewer.Header>about me</ContentViewer.Header>
      <ContentViewer.Body>
        <p>
          Irure laboris consequat excepteur sint pariatur reprehenderit
          adipisicing. Laboris incididunt velit eiusmod amet non voluptate. Eu
          dolor laborum ea aliquip cupidatat consectetur. Minim cupidatat mollit
          Lorem veniam exercitation pariatur velit tempor.
        </p>
        <p>
          Eu dolor laborum ea aliquip cupidatat consectetur. Elit pariatur nisi
          esse do. Qui laboris deserunt excepteur consectetur do dolor sit
          adipisicing amet reprehenderit laborum irure nulla..
        </p>
        <ContentViewer.Footer>
          <ul className="flex flex-col gap-8 md:flex-row">
            <li>
              <ButtonLink href="/cv">My CV</ButtonLink>
            </li>
            <li>
              <ButtonLink href="/contact">Contact Me</ButtonLink>
            </li>
          </ul>
        </ContentViewer.Footer>
      </ContentViewer.Body>
    </>
  )
}
