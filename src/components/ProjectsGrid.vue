<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  title: String,
  projects: {
    type: Array,
    required: true
  }
})

const selectedProject = ref(null)
const isModalOpen = ref(false)

const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    closeModal()
  }
}
</script>

<template>
  <section class="projects-section">
    <h1>{{ title }}</h1>
    <div class="projects-grid">
      <article v-for="project in projects.slice().reverse()" :key="project.id" class="project-card" @click="openModal(project)">
          <h2>{{ project.title }}</h2>
          <p class="project-date">{{ project.date }}</p>
          <div class="tech-tags">
            <span v-for="tag in project.tech" :key="tag" class="tag">{{ tag }}</span>
          </div>
      </article>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal" aria-label="Close modal">×</button>
        <div v-if="selectedProject" class="modal-body">
          <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title" class="modal-image">
          <h2>{{ selectedProject.title }}</h2>
          <p class="modal-date">{{ selectedProject.date }}</p>
          <p class="modal-description">{{ selectedProject.description }}</p>
          <div class="modal-tech-tags">
            <span v-for="tag in selectedProject.tech" :key="tag" class="modal-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  margin-bottom: 3rem;
}

.projects-section h1 {
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
  flex-wrap: nowrap;
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 0.5rem;
  position: relative;
}

.tag {
  background-color: var(--color-background-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  color: var(--color-text);
  white-space: nowrap;
  display: inline-block;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background-color: var(--color-background);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-text);
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.close-btn:hover {
  transform: scale(1.2);
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.modal-body h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin: 0;
}

.modal-date {
  color: var(--color-text);
  font-size: 0.95rem;
  margin: 0;
}

.modal-description {
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
}

.modal-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.modal-tag {
  background-color: var(--color-background-mute);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  color: var(--color-text);
  display: inline-block;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90%;
    padding: 1.5rem;
  }

  .close-btn {
    top: 0.5rem;
    right: 0.5rem;
  }

  .modal-image {
    height: 200px;
  }

  .modal-body h2 {
    font-size: 1.5rem;
  }
}
</style>
