import { useTheme } from "@theme/context"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex text-lg gap-x-9" aria-label="Theme toggles">
      <button
        onClick={() => setTheme("light")}
        className={`cursor-pointer relative before:w-3 before:h-3 before:absolute before:top-[3px] before:translate-y-1/2 before:-left-2 before:-translate-x-full ${
          theme === "light" ? "before:bg-brand-dark-bg" : ""
        }`}
      >
        light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`cursor-pointer relative before:w-3 before:h-3 before:absolute before:top-[3px] before:translate-y-1/2 before:-left-2 before:-translate-x-full ${
          theme === "dark" ? "before:bg-brand-light-bg" : ""
        }`}
      >
        dark
      </button>
    </div>
  )
}
