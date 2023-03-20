import useIsHydrated from "@hooks/useIsHydrated"
import { ReactNode, useCallback, useEffect, useRef, useState } from "react"

type ContentViewerProps = {
  activePath: string
  items: Array<{
    label: string
    path: string
    content: ReactNode
  }>
}

export default function ContentViewer({
  activePath,
  items,
}: ContentViewerProps) {
  // the content-viewer's height should match the tallest child but they're
  // absolutely positioned so we need to find & set the height manually
  const [tallestChildHeight, setTallestChildHeight] = useState(0)

  const maybeSetTallestChildHeight = useCallback((h: number) => {
    setTallestChildHeight((curr) => (h > curr ? h : curr))
  }, [])

  return (
    <div
      className="relative overflow-x-hidden"
      style={{ minHeight: `${tallestChildHeight}px` }}
    >
      {items.map((item) => (
        <ContentSlider
          key={item.path}
          active={activePath === item.path}
          reportHeight={maybeSetTallestChildHeight}
        >
          {item.content}
        </ContentSlider>
      ))}
    </div>
  )
}

ContentViewer.Header = function ContentViewerHeader({
  children,
}: {
  children: string
}) {
  return (
    <h2 className="mb-8 text-3xl font-thin md:text-5xl lg:text-6xl">
      {children}
    </h2>
  )
}

ContentViewer.Body = function ContentViewerBody({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex gap-8 lg:ml-8">
      <div className="border-l-2 border-brand-light-text dark:border-brand-dark-text" />
      <div className="space-y-4">{children}</div>
    </div>
  )
}

ContentViewer.Footer = function ContentViewerFooter({
  children,
}: {
  children: ReactNode
}) {
  return <div className="pt-8 pb-2">{children}</div>
}

function ContentSlider({
  active,
  children,
  reportHeight,
}: {
  active: boolean
  children: ReactNode
  reportHeight: (h: number) => void
}) {
  /**
   * TODO: probably a better way to do this:
   *
   * need to slide & fade these content-sliders in/out but also need to set display: none when hidden for accessibility
   * but i can't set display: none on the correct items ntil we're hydrated. idk why - i'm guessing useRouter further
   * up isn't set properly
   */

  const hydrated = useIsHydrated()
  const ref = useRef<HTMLElement>(null)

  const isVisible = hydrated && active
  const [shouldHide, setShouldHide] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldHide((c) => !isVisible)
    }, 500)

    return () => clearTimeout(timer)
  }, [isVisible])

  useEffect(() => {
    reportHeight(ref.current?.clientHeight ?? 0)
  }, [reportHeight])

  return (
    <article
      ref={ref}
      aria-hidden={!isVisible}
      className={`absolute top-0 left-0 w-full h-auto transform duration-500 transition-[opacity,transform] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      } ${shouldHide ? "hidden" : "block"}`}
    >
      {children}
    </article>
  )
}
