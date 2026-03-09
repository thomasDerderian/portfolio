<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <main class="contact-page">
    <h1>Contact</h1>
    <p class="contact-intro">
      Have a question or want to work together? Feel free to reach out!
    </p>

    <div v-if="submitted" class="success-message">
      Thanks for your message! I'll get back to you soon.
    </div>

    <form v-else class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" type="text" placeholder="Your name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </main>
</template>

<style scoped>
.contact-page {
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.contact-intro {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--color-heading);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vt-c-green);
}

.submit-btn {
  padding: 0.75rem 2rem;
  background-color: var(--vt-c-green);
  color: var(--vt-c-white);
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-start;
}

.submit-btn:hover {
  background-color: var(--vt-c-green-dark, #3a9d6e);
}

.success-message {
  padding: 1.5rem;
  background-color: var(--color-background-mute);
  border-radius: 8px;
  color: var(--vt-c-green);
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
