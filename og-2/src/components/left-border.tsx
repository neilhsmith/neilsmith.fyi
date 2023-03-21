import { ReactNode } from "react"

export default function LeftBorder({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6 relative pl-16 before:absolute before:w-[2px] before:left-8 before:h-full before:bg-brand-text dark:before:bg-brand-dark-text">
      {children}
    </div>
  )
}
