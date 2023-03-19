import useTheme from "@hooks/useTheme"

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme()

  return (
    <div className="flex text-lg gap-x-10">
      <label
        htmlFor="dark-mode-toggle"
        className="cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <input type="radio" id="dark-mode-toggle" className="hidden" />
        <span
          className={`relative before:w-3 before:h-3 before:absolute before:-top-[1px] before:translate-y-1/2 before:-left-2 before:-translate-x-full ${
            theme === "dark" ? "before:bg-white" : ""
          }`}
        >
          dark
        </span>
      </label>
      <label
        htmlFor="light-mode-toggle"
        className="cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <input type="radio" id="light-mode-toggle" className="hidden" />
        <span
          className={`relative before:w-3 before:h-3 before:absolute before:-top-[1px] before:translate-y-1/2 before:-left-2 before:-translate-x-full ${
            theme === "light" ? "before:bg-brand-dark-bg" : ""
          }`}
        >
          light
        </span>
      </label>
    </div>
  )
}
