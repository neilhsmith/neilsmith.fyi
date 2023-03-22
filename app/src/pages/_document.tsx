import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-brand-bg dark:bg-brand-dark-bg text-brand-text dark:text-brand-dark-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
