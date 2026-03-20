<script setup>
const skills = [
  {
    title: 'Languages & Technologies',
    items: ['JavaScript / TypeScript', 'HTML & CSS', 'C#', 'Java', 'Python', 'PHP', 'SQL', 'REST APIs']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Vue.js / PrimeVue / Quasar', 'ASP.NET / Blazor / MudBlazor', 'Spring Boot', 'Django REST Framework', 'CakePHP', 'Symfony', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Tools',
    items: ['VS Code / Visual Studio / Eclipse / IntelliJ IDEA / Android Studio', 'Copilot', 'Git / GitExt / GitLab / GitHub', 'Docker', 'Bruno', 'Figma', 'Trello', 'Notion', 'Lucid / LucidCharts', 'MySQL Workbench']
  },
  { 
    title: 'Languages',
    items: ['French (native)', 'English (TOEIC B2)']
  }
];
</script>

<template>
  <main class="skills-page">
    <section class="skills-section">
      <h1>Skills</h1>

      <div class="skills-grid">
        <div
          class="skill-card"
          v-for="(skill, idx) in skills"
          :key="skill.title + idx"
        >
          <h3>{{ skill.title }}</h3>
          <ul>
            <li v-for="(item, i) in skill.items" :key="item + i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.skills-page {
  padding: 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.skills-section h1 {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
  color: var(--color-heading);
}

.skills-section p {
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1.5fr));
  gap: 1rem;
}

.skill-card {
  background: var(--color-background-mute);
  padding: 1.25rem;
  border-radius: 8px;
}

.skill-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--color-heading);
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--color-text);
}

.skill-card li {
  margin: 0.7rem 0;
  line-height: 1.2;
}
</style>
