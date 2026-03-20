import { ref, watch } from 'vue'

const THEME_STORAGE_KEY = 'portfolio-theme'
const THEMES = {
  device: 'device',
  dark: 'dark',
  light: 'light'
}

const currentTheme = ref(getInitialTheme())

function getInitialTheme() {
  // Check localStorage first
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  if (stored && Object.values(THEMES).includes(stored)) {
    return stored
  }
  // Default to device theme
  return THEMES.device
}

function setTheme(theme) {
  if (!Object.values(THEMES).includes(theme)) {
    console.warn(`Invalid theme: ${theme}`)
    return
  }

  currentTheme.value = theme
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}

function applyTheme(theme) {
  const html = document.documentElement

  if (theme === THEMES.device) {
    html.removeAttribute('data-theme')
  } else {
    html.setAttribute('data-theme', theme)
  }
}

// Watch for changes and apply theme
watch(currentTheme, (newTheme) => {
  applyTheme(newTheme)
})

// Apply theme on initialization
applyTheme(currentTheme.value)

export function useTheme() {
  return {
    currentTheme,
    setTheme,
    THEMES
  }
}
