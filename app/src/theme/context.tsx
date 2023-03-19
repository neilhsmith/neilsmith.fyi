import usePrevious from "@hooks/usePrevious"
import { Theme } from "@types"
import { createContext, ReactNode, useContext, useEffect } from "react"
import { useCookies } from "react-cookie"

type ThemeContextProps = {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setTheme: (nt: Theme) => {},
})

export function ThemeProvider({
  children,
  initialValue,
}: {
  children: ReactNode
  initialValue: Theme
}) {
  const [cookies, setCookie] = useCookies(["theme"])
  const theme = cookies.theme ?? initialValue
  const prevTheme = usePrevious(theme)

  useEffect(() => {
    const htmlEl = window.document.documentElement
    htmlEl.classList.remove(prevTheme)
    htmlEl.classList.add(theme)
  }, [theme, prevTheme])

  const handleSetTheme = (newTheme: Theme) => {
    if (newTheme === cookies.theme) return

    setCookie("theme", newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: cookies.theme ?? initialValue,
        setTheme: handleSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
