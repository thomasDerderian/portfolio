<script setup>
import { onMounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { useTheme } from './composables/useTheme'

const { currentTheme } = useTheme()

onMounted(() => {
  // Theme is already applied by useTheme composable
})
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
