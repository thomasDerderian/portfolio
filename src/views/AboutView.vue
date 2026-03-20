<script setup></script>

<template>
  <main class="about-page">
    <section class="about-section">
      <h1>About Me</h1>
      <p>
        Hi! I'm a developer passionate about building great web experiences and useful applications.
      </p>
      <p>
        I'm currently studying at IUT Lyon1 Bourg en Bresse, pursuing a BUT Informatique degree. My journey into tech
        started with a drawing app I developed in Python on a calculator during math classes, and later a school project
        about sumo robots, where I worked on the software.
      </p>
      <p>
        Outside of coding, I love being active and connecting with nature. My hobbies include swimming, biking, running,
        and free diving. Whether it's exploring underwater or cycling through diversified landscapes, I find inspiration
        in the
        outdoors and enjoy challenging myself.
      </p>
      <p>
        I've also had the chance to travel a lot, discovering new cultures and landscapes. Some of my favorite
        destinations include Brazil, Florida, the Caribbean islands, Greece, Portugal, Italy and south of France. These
        experiences have
        broadened my perspective, inspired my creativity, and taught me the value of diversity and exploration.
      </p>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  padding: 2rem 2rem;
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
