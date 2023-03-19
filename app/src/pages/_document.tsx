import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-brand-dark-bg dark:text-brand-dark-text bg-brand-light-bg text-brand-light-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
