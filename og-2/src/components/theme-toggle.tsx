import useIsHydrated from "@hooks/useIsHydrated"
import { useTheme } from "next-themes"
import { useId, useRef } from "react"

const themes = ["dark", "light"]

export default function ThemeToggle() {
  const hydrated = useIsHydrated()
  const { theme, setTheme } = useTheme()

  // the theme selected during first render should always be the last option for visual alignment purposes
  const orderedThemes = useRef([
    ...themes.filter((t) => t !== theme),
    theme,
  ]).current

  // FIXME: make a lib like next-themes which uses cookies so we can correctly render during SSR - https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  if (!hydrated) return null

  // TODO: what's the correct semantic html to use here?
  return (
    <form>
      <fieldset role="radiogroup">
        <legend className="sr-only">Choose your preferred theme</legend>
        <div className="flex gap-4">
          {orderedThemes.map((t) =>
            t ? (
              <Radio
                key={t}
                active={theme === t}
                value={t}
                onChange={() => setTheme(t)}
              />
            ) : null,
          )}
        </div>
      </fieldset>
    </form>
  )
}

function Radio({
  active,
  value,
  onChange,
}: {
  active: boolean
  value: string
  onChange: (value: string) => void
}) {
  const id = useId()

  return (
    <>
      <input
        id={id}
        type="radio"
        name="theme"
        value={value}
        defaultChecked={active}
        onChange={() => onChange(value)}
        className="appearance-none"
      />
      <label
        htmlFor={id}
        className={`relative cursor-pointer before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-brand-dark-bg dark:before:bg-brand-bg ${
          active ? "before:opacity-100" : "before:opacity-0"
        }`}
      >
        {value}
      </label>
    </>
  )
}
