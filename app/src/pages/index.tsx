import Head from "next/head"
import { useEffect, useMemo } from "react"
import { useRouter } from "next/router"
import BasicFlatLayout from "@components/layouts/basic-flat"
import Header from "@components/header"
import ContentViewer from "@components/content-viewer"
import Sidebar from "@components/sidebar"
import AboutMeContent from "@components/sections/about-me"
import SimpleSpaghettioContent from "@components/sections/simple-spaghettio"
import { GetServerSideProps, GetStaticProps } from "next"
import Transition from "@components/transition"

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const theme = context.req.cookies["theme"] ?? null

//   return {
//     props: {
//       theme,
//     },
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {},
//   }
// }

const articles = [
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
  const sidebarArticles = articles.filter((a) => a.path !== "/")

  // handle 404 redirects incase someone edits their url
  useEffect(() => {
    if (!router.isReady) return

    const isBadPath = !articles.some((s) => s.path === router.asPath)
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
      <Transition active={router.asPath === "/#captain-hooks"} duration={1000}>
        {(status) => <p>status: {status?.toString()}</p>}
      </Transition>
      <BasicFlatLayout
        header={<Header />}
        content={<ContentViewer activePath={router.asPath} items={articles} />}
        sidebar={<Sidebar items={sidebarArticles} />}
      />
    </>
  )
}
