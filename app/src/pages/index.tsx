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
