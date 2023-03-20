import { ReactNode, useEffect, useRef, useState } from "react"

type TransitionProps = {
  active: boolean
  duration?: number
  children: (currentStatus: TransitionStatus) => JSX.Element
}

type TransitionStatus =
  | "entering"
  | "entered"
  | "exiting"
  | "exited"
  | undefined

export default function Transition({
  active,
  children,
  duration = 1000,
}: TransitionProps) {
  const [status, setStatus] = useState<TransitionStatus>()
  const prevActiveRef = useRef(false)

  useEffect(() => {
    if (active === prevActiveRef.current) return
    prevActiveRef.current = active

    setStatus(() => (active ? "entering" : "exiting"))
    const timer = setTimeout(() => {
      setStatus(() => (active ? "entered" : "exited"))
    }, duration)

    // FIXME: we should clearTimeout but it's happening every time we initially render a component as active: true
    // so that it never transitions to "entered"
    //return () => clearTimeout(timer)
  }, [active, duration])

  return children(status)
}
