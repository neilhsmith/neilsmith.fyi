import { useRouter } from "next/router"
import { ReactNode, useCallback, useEffect, useRef, useState } from "react"
import useIsHydrated from "@hooks/useIsHydrated"
import { AnimationDefinition, motion } from "framer-motion"

type UpdateHeightFunction = (height: number) => void

// TODO: probably a better way to do this height stuff than a child render prop function
type RouteViewProps = {
  children: (fn: UpdateHeightFunction) => ReactNode
}

export default function FixedHeightRouteViewer({ children }: RouteViewProps) {
  const [height, setHeight] = useState(0)

  const updateHeightIfTaller = useCallback((childHeight: number) => {
    setHeight((height) => (childHeight > height ? childHeight : height))
  }, [])

  return (
    <div
      className="relative"
      style={{
        minHeight: height,
      }}
    >
      {children(updateHeightIfTaller)}
    </div>
  )
}

type RouteProps = {
  path: string
  children: ReactNode
  reportHeight: UpdateHeightFunction
}

FixedHeightRouteViewer.Route = function Route({
  path,
  children,
  reportHeight,
}: RouteProps) {
  const hydrated = useIsHydrated()
  const router = useRouter()
  const [hidden, setHidden] = useState(false)
  const active = hydrated && router.asPath === path

  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (hydrated) return
    reportHeight(ref.current?.clientHeight ?? 0)
  }, [reportHeight, hydrated])

  function handleAnimationStart(definition: any) {
    if (!active) setHidden(false)
  }

  function handleAnimationComplete(definition: any) {
    console.log("Completed animating", path, definition)

    if (!active) setHidden(true)
  }

  return (
    <motion.div
      animate={active ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      ref={ref}
      aria-hidden={!active}
      className={`absolute block ${active ? "" : "pointer-events-none"} ${
        hidden ? "hidden" : ""
      }`}
    >
      {children}
    </motion.div>
  )
}
