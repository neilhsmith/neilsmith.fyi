import useIsHydrated from "@hooks/useIsHydrated"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

type RouteViewerProps = {
  children: ReactNode
}
type RouteProps = {
  children: ReactNode
  path: string
}

const HeightContext = createContext({
  reportHeight: (height: number) => {},
})

export default function RouteViewer({ children }: RouteViewerProps) {
  const [height, setHeight] = useState(0)

  const updateHeightIfTaller = useCallback(
    (newHeight: number) =>
      setHeight((curr) => (newHeight > curr ? newHeight : curr)),
    [],
  )

  return (
    <HeightContext.Provider
      value={{
        reportHeight: updateHeightIfTaller,
      }}
    >
      <div
        className="grid grid-cols-1 grid-rows-1"
        style={{ minHeight: height }}
      >
        {children}
      </div>
    </HeightContext.Provider>
  )
}

RouteViewer.Route = function Route({ children, path }: RouteProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const hydrated = useIsHydrated()

  const active = hydrated && router.asPath === path

  const { reportHeight } = useContext(HeightContext)
  useEffect(() => {
    reportHeight(ref.current?.clientHeight ?? 0)
  }, [reportHeight])

  // TODO: handle bad route fragments

  return (
    <AnimatePresence initial={!active}>
      {!hydrated || (hydrated && active) ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            //x: "0%",
            opacity: 1,
          }}
          exit={{
            //x: "20%",
            opacity: 0,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            duration: 50,
          }}
          ref={ref}
          className="col-start-1 row-start-1"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
