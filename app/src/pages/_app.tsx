import "@styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Component {...pageProps} />
    </>
  )
}
