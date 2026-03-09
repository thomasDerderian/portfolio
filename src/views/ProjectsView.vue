<script setup>
const projects = [
  {
    id: 1,
    title: 'Portfolio App',
    description: 'A personal portfolio built with Vue.js and Vite.',
    tech: ['Vue.js', 'Vite', 'CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of another project you have worked on.',
    tech: ['JavaScript', 'Node.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of yet another project showcasing your skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
]
</script>

<template>
  <main class="projects-page">
    <h1>Projects</h1>
    <div class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="tech-tags">
          <span v-for="tag in project.tech" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <a :href="project.link" class="project-link">View Project</a>
      </article>
    </div>
  </main>
</template>

<style scoped>
.projects-page {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.projects-page h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--color-background-mute);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card h2 {
  font-size: 1.3rem;
  color: var(--color-heading);
}

.project-card p {
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: var(--color-background-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  color: var(--color-text);
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--vt-c-green);
  font-weight: 500;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}
</style>
