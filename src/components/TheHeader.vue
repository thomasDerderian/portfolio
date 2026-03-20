<script setup>
import { Monitor, Moon, Sun, Linkedin } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'

const { currentTheme, setTheme, THEMES } = useTheme()

const themeIcons = {
  device: Monitor,
  dark: Moon,
  light: Sun
}

const themeLabels = {
  device: 'Device',
  dark: 'Dark',
  light: 'Light'
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="logo">Thomas Derderian</RouterLink>
      <div class="nav-container">
        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/skills">Skills</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
        </nav>
        <div class="theme-selector">
          <button
            v-for="theme in Object.values(THEMES)"
            :key="theme"
            :class="['theme-btn', { active: currentTheme === theme }]"
            :title="themeLabels[theme]"
            @click="setTheme(theme)"
            :aria-label="`Switch to ${themeLabels[theme]} theme`"
          >
            <component :is="themeIcons[theme]" :size="20" :stroke-width="2" />
          </button>
        </div>
        <a
          href="https://www.linkedin.com/in/thomas-derderian/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          title="LinkedIn"
          aria-label="Follow me on LinkedIn"
        >
          <Linkedin :size="20" :stroke-width="2" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
}

.header-inner {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-heading);
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  transition: color 0.2s ease, background-color 0.2s ease, border-radius 0.2s ease;
  white-space: nowrap;
}

.logo:hover {
  color: var(--vt-c-green);
  background-color: rgba(0, 200, 100, 0.08);
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  transition: color 0.2s ease, background-color 0.2s ease, border-radius 0.2s ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--vt-c-green);
  background-color: rgba(0, 200, 100, 0.08);
}

.theme-selector {
  display: flex;
  gap: 0.5rem;
  background-color: var(--color-background-mute);
  padding: 0.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
}

.theme-btn {
  background: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--color-text);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
}

.theme-btn:hover {
  background-color: var(--color-border-hover);
}

.theme-btn.active {
  background-color: var(--vt-c-green);
  color: var(--vt-c-green-contrast);
  border-color: var(--vt-c-green);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: color 0.2s ease;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.social-link:hover {
  color: var(--vt-c-green);
}

@media (max-width: 768px) {
  .header-inner {
    padding: 0 1rem;
  }

  .nav-container {
    gap: 1rem;
  }

  .nav {
    gap: 1rem;
    font-size: 0.85rem;
  }

  .nav a {
    padding: 0.25rem 0.5rem;
  }

  .logo {
    font-size: 1rem;
  }
}
</style>
