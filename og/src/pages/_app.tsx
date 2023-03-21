import "@styles/globals.css"
import { ThemeProvider } from "@theme/context"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const theme = pageProps.theme ?? "dark"

  return (
    <ThemeProvider initialValue={theme}>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
