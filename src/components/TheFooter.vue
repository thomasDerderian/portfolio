<script setup></script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p>&copy; {{ new Date().getFullYear() }} Thomas Derderian. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 2rem;
  text-align: center;
}

.footer-inner p {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.75;
}
</style>
