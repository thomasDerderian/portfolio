<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="app-shell">
    <TheHeader />
    <main class="app-content">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
