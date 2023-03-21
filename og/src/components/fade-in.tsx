import useIsHydrated from "@hooks/useIsHydrated"
import { ReactNode } from "react"

export default function FadeIn({ children }: { children: ReactNode }) {
  const isHydrated = useIsHydrated()

  return (
    <div
      className={`transform transition-opacity delay-[400ms] duration-1000 opacity-0 ${
        isHydrated ? "opacity-100" : ""
      }`}
    >
      {children}
    </div>
  )
}
