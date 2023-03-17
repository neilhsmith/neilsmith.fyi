import { Children, ReactFragment } from "react"

export default function ContentViewer({
  activeIndex,
  children,
}: {
  activeIndex: number
  children: ReactFragment
}) {
  console.log("activeIndex", activeIndex)

  return (
    <div>
      {Children.toArray(children).map((child, idx) => (
        <div key={idx} className={activeIndex === idx ? "active" : ""}>
          {child}
        </div>
      ))}
    </div>
  )
}
