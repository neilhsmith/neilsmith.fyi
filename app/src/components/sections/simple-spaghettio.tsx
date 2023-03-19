import ButtonLink from "@components/button-link"
import ContentViewer from "@components/content-viewer"

export default function SimpleSpaghettioContent() {
  return (
    <>
      <ContentViewer.Header>simple-spaghett.io</ContentViewer.Header>
      <ContentViewer.Body>
        <p>
          Irure laboris consequat excepteur sint pariatur reprehenderit
          adipisicing. Laboris incididunt velit eiusmod amet non voluptate. Eu
          dolor laborum ea aliquip cupidatat consectetur. Minim cupidatat mollit
          Lorem veniam exercitation pariatur velit tempor.
        </p>
        <p>
          Eu dolor laborum ea aliquip cupidatat consectetur. Elit pariatur nisi
          esse do.
        </p>
        <ContentViewer.Footer>
          <ul className="flex flex-col gap-8 md:flex-row">
            <li>
              <ButtonLink href="/">GitHub</ButtonLink>
            </li>
            <li>
              <ButtonLink href="/">View Site</ButtonLink>
            </li>
          </ul>
        </ContentViewer.Footer>
      </ContentViewer.Body>
    </>
  )
}
