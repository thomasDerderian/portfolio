<script setup></script>

<template>
  <main class="about-page">
    <section class="about-section">
      <h1>About Me</h1>
      <p>
        Hi! I'm a developer passionate about building great web experiences.
        I specialize in modern JavaScript frameworks and enjoy solving complex
        problems with clean, maintainable code.
      </p>
      <div class="skills">
        <h2>Skills</h2>
        <ul>
          <li>Vue.js</li>
          <li>JavaScript / TypeScript</li>
          <li>HTML &amp; CSS</li>
          <li>Node.js</li>
          <li>Git &amp; GitHub</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.about-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.skills h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.skills ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skills li {
  background-color: var(--color-background-mute);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  color: var(--color-text);
}
</style>
