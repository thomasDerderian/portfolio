<script setup></script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="logo">Thomas Derderian</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
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
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--vt-c-green);
}
</style>
