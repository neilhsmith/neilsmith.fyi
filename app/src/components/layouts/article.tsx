import { ReactNode } from "react"
import LeftBorder from "@components/left-border"

type ArticleProps = {
  title: string
  body: ReactNode
  footer?: ReactNode
}

export default function Article({ title, body, footer }: ArticleProps) {
  return (
    <article className="flex flex-col h-full">
      <h2 className="mb-8 text-3xl font-thin md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className="my-auto">
        <LeftBorder>
          {body}
          {footer ? <div className="pt-6">{footer}</div> : null}
        </LeftBorder>
      </div>
    </article>
  )
}
