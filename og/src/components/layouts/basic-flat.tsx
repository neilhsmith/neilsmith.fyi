import FadeIn from "@components/fade-in"
import ThemeToggle from "@components/theme-toggle"
import { ReactNode } from "react"

type BasicFlatLayoutProps = {
  header: ReactNode
  content: ReactNode
  sidebar: ReactNode
}

export default function BasicFlatLayout({
  header,
  content,
  sidebar,
}: BasicFlatLayoutProps) {
  return (
    <div className="flex items-baseline justify-center h-full pt-6 md:pt-0 md:items-center">
      <div className="container mx-auto">
        <FadeIn>
          <div className="p-12 border border-brand-light-border dark:border-brand-dark-border">
            <div className="mb-14">{header}</div>
            <main
              id="main"
              role="main"
              className="grid grid-cols-3 gap-12 text-lg font-light lg:gap-28 xl:gap-36 md:text-xl"
            >
              <div className="col-span-3 md:col-span-2">{content}</div>
              <aside className="col-span-3 md:col-span-1">{sidebar}</aside>
            </main>
            <div className="absolute -bottom-[32px] right-0 md:bottom-[40px] md:right-[-66px] md:rotate-90">
              <ThemeToggle />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
