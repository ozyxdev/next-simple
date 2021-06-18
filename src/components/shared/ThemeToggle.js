import { useTheme } from '../../lib/useTheme'

function ThemeToggle() {
  const { colorMode, setColorMode } = useTheme()

  if (!colorMode) {
    return null
  }

  return (
    <div>
      <label htmlFor="theme-toggle">
        <input
          type="checkbox"
          name="theme-toggle"
          id="toggle-dark"
          checked={colorMode === 'dark'}
          onChange={(e) => {
            setColorMode(e.target.checked ? 'dark' : 'light')
          }}
        />
      </label>
    </div>
  )
}

export default ThemeToggle
