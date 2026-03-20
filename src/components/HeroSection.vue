<script setup></script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Hi, I'm <span class="highlight">Thomas Derderian</span></h1>
      <p class="hero-subtitle">Student - Full-Stack Web Developer</p>
      <p class="hero-description">
        Developing modern MES web apps—software that helps factories run smoothly by tracking production, scheduling tasks, and monitoring operations in real time.
      </p>
      <div class="hero-actions">
        <RouterLink to="/about" class="btn about">About me</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.about{
  color: var(--color-heading);
}

.hero-content {
  max-width: 700px;
  text-align: center;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.highlight {
  color: var(--vt-c-green);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--color-text);
  margin-bottom: 1rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.05rem;
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.85;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: var(--vt-c-green);
  color: var(--vt-c-white);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-border);
}
</style>
