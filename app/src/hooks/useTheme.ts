import { useEffect, useState } from "react"
import usePrevious from "./usePrevious"

type Theme = "dark" | "light"

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark")
  const prevTheme = usePrevious(theme)

  useEffect(() => {
    if (theme === prevTheme) return

    const htmlEl = window.document.documentElement
    htmlEl.classList.remove(prevTheme)
    htmlEl.classList.add(theme)
  }, [theme, prevTheme])

  return [theme, setTheme] as const
}
