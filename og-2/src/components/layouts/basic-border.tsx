import Header from "@components/layouts/common/header"
import ProjectsList from "@components/projects-list"
import ThemeToggle from "@components/theme-toggle"
import { motion } from "framer-motion"
import { ReactNode } from "react"

type BasicBorderLayoutProps = {
  children: ReactNode
}

// renders the header & sidebar and wraps the children in the main-content area
export default function BasicBorderLayout({
  children,
}: BasicBorderLayoutProps) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.5 }}
          className="relative"
        >
          <Container>
            <header role="banner" className="mb-14">
              <Header />
            </header>
            <main
              id="main"
              role="main"
              className="grid grid-cols-3 gap-12 text-lg font-light lg:gap-28 xl:gap-36 md:text-xl"
            >
              <div className="col-span-3 md:col-span-2">{children}</div>
              <aside className="col-span-3 md:col-span-1">
                <ProjectsList />
              </aside>
            </main>
          </Container>
          <div className="flex justify-end md:absolute md:block md:right-0 md:translate-x-[67px] md:-translate-y-[67px]">
            <div className="md:rotate-90">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </>
  )
}

// adds small amount of gutter on mobile, vertically/horizontally centers on desktop
function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:h-full place-items-center">
      <div className="w-full p-4 md:mx-auto md:container">{children}</div>
    </div>
  )
}

// the border and padded container containing all the children of this layout
function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-12 border-2 border-brand-border dark:border-brand-dark-border">
      {children}
    </div>
  )
}
