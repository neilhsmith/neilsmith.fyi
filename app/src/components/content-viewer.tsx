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
  const [heights, setHeights] = useState<Array<number>>([])
  const tallestChildHeight = Math.max(...heights)

  const checkChildHeight = useCallback((h: number) => {
    setHeights((prev) => [...prev, h])
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
          reportHeight={checkChildHeight}
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
      <div className="border-l-2" />
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
  const ref = useRef<HTMLElement>(null)
  const hydrated = !!ref.current

  useEffect(() => {
    reportHeight(ref.current?.clientHeight ?? 0)
  }, [reportHeight])

  return (
    <article
      ref={ref}
      className={`absolute top-0 left-0 w-full h-auto transform duration-500 transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
        active && hydrated
          ? "translate-x-0 opacity"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </article>
  )
}
