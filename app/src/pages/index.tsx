import Head from "next/head"
import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"
import NextHeight100 from "@styles/next-height"
import BasicFlatLayout from "@components/layouts/basic-flat"
import Header from "@components/header"
import ContentViewer from "@components/content-viewer"
import Sidebar from "@components/sidebar"
import AboutMeContent from "@components/sections/about-me"
import SimpleSpaghettioContent from "@components/sections/simple-spaghettio"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const theme = context.req.cookies["theme"] ?? null

  return {
    props: {
      theme,
    },
  }
}

const sections = [
  {
    label: "about me",
    path: "/",
    content: <AboutMeContent />,
  },
  {
    label: "simple-spaghett.io",
    path: "/#simple-spaghettio",
    content: <SimpleSpaghettioContent />,
  },
  {
    label: "captain hooks",
    path: "/#captain-hooks",
    content: <div>captain hooks</div>,
  },
  {
    label: "brsl events",
    path: "/#brsl-events",
    content: <div>brsl events</div>,
  },
  {
    label: "kysek",
    path: "/#kysek",
    content: <div>kysek</div>,
  },
]

export default function Home() {
  const router = useRouter()

  // TODO: think this memo is useless:
  // if Home rerenders then Sidebar rerenders anyway. i think I'd need to memo the actual
  // Sidebar component for this memo to have purpose - Sidebar wouldn't rerender when Home
  // does because it receives the same items since we memod it
  const sidebarItems = useMemo(() => sections.filter((s) => s.path !== "/"), [])

  // handle 404 redirects incase someone edits their url
  useEffect(() => {
    if (!router.isReady) return

    const isBadPath = !sections.some((s) => s.path === router.asPath)
    if (isBadPath) router.replace("/404")
  }, [router, router.isReady, router.asPath])

  return (
    <>
      <Head>
        <title>Neil Smith | Frontend Engineer</title>
        <meta name="description" content="todo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextHeight100 />
      <BasicFlatLayout
        header={<Header />}
        content={<ContentViewer activePath={router.asPath} items={sections} />}
        sidebar={<Sidebar items={sidebarItems} />}
      />
    </>
  )
}
