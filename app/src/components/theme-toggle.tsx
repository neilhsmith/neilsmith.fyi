import useIsHydrated from "@hooks/useIsHydrated"
import { useTheme } from "next-themes"
import { useId, useRef } from "react"

const themes = ["dark", "light", "system"]

export default function ThemeToggle() {
  const hydrated = useIsHydrated()
  const { theme, setTheme } = useTheme()

  // the theme selected during first render should always be the last option for visual alignment purposes
  const orderedThemes = useRef([
    ...themes.filter((t) => t !== theme),
    theme,
  ]).current

  // ssr doesn't know the selected theme because it's stored in local storage. will cause hydration error if rendered
  if (!hydrated) return null

  // TODO: what's the correct semantic html to use here?
  return (
    <form>
      <fieldset role="radiogroup">
        <legend className="sr-only">Choose your preferred theme</legend>
        <div className="flex gap-x-3">
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
        className={`relative cursor-pointer ${
          active ? "text-brand-active dark:text-brand-dark-active" : ""
        }`}
      >
        {value}
      </label>
    </>
  )
}
