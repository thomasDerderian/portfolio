<script setup>
import ProjectsGrid from '../components/ProjectsGrid.vue'

/**
 * Stop the meteors (Processing, Java) 2023 # learning programming with Processing (java simplified for beginners)
 * Lonely Survivor V1 (Processing, Java) 2023 # learning programming with Processing (java simplified for beginners)
 * Chess (Java, Swing) 2024 # learning OOP, GUI development and building my own complex algorithms
 * Lonely Survivor V2 (Java, Swing) 2024 # learning GUI development with Swing and having fun improving my previous game with new features and better design
 */
const personalProjectsLearn = [
  {
    id: 1,
    title: 'Stop the Meteors',
    description: 'A simple game built with Processing (simplified Java) where player have to stop meteors from passing through the screen by blocking them with a shield platform.',
    tech: ['Processing', 'Java'],
    date: '2023',
    image: '/assets/stop-the-meteors-screenshot.png',
  },
  {
    id: 2,
    title: 'Lonely Survivor V1',
    description: 'A top-down survival game built with Processing (simplified Java) where player have to survive as long as possible against waves of enemies including enemies that throw projectiles while collecting experience points dropped by enemies and upgrading their character.',
    tech: ['Processing', 'Java'],
    date: '2023',
    image: '/assets/lonely-survivor-v1-screenshot.png',
  },
  {
    id: 3,
    title: 'Chess Game',
    description: 'A chess game built with Java and Swing where player have some hints available. Every algorithm and game logic is built from scratch by myself with no internet research. The game manage edge cases such as castling, in passing, promotion, pat and checkmate.',
    tech: ['Java', 'Swing'],
    date: '2024',
    image: '/assets/chess-game-screenshot.png',
  },
  {
    id: 4,
    title: 'Lonely Survivor V2',
    description: 'An improved version of Lonely Survivor V1 with better graphics, new features and more complex gameplay mechanics. Such as new enemies, new weapons, new upgrades, game statistics, different difficulty levels and a better user interface.',
    tech: ['Java', 'Swing'],
    date: '2024',
    image: '/assets/lonely-survivor-V2.png',
  },
]

/**
 * 2048 (Processing, Java) 2023 # learning programming and building a clone of the popular game 2048
 * Growing mice game (Processing, Java) 2023 # learning programming and building a game where player have to grow a mouse by eating colored dots 
 * Labyrinth game (Processing, Java) 2023 # learning programming and algorithms by building a game where labyrinths are generated with a recursive backtracking algorithm and player have to find the exit of the labyrinth
 * Candy crush like game (Processing, Java) 2024 # learning programming and building a clone of the popular game candy crush
 * Serious game project (Processing, Java) 2024 # learning programming and building a serious game for learning programming with Java. Game to simulate an emergency evacuation of a school with multiple floors. Player can control students to evacuate the building and also control the one that have to verify that all students are evacuated by checking every room with a minimap that shows the status of each room.
 * Chessquito (Java, Swing) 2024 # learning programming and building a simplified chess game (base project for my chess game)
 */
const schoolProjectsLearn = [
  {
    id: 1,
    title: '2048 Game',
    description: 'A clone of the popular game 2048 built with Processing (simplified Java) where player have to slide numbered tiles on a grid to combine them and create a tile with the number 2048.',
    tech: ['Processing', 'Java'],
    date: '2023',
    image: '/assets/2048-game-screenshot.png',
  },
  {
    id: 2,
    title: 'Growing Mice Game',
    description: 'A game built with Processing (simplified Java) where player have to grow a mouse by eating colored dots while avoiding enemies. The mouse can also eat power-ups that give it temporary abilities such as invincibility or speed boost.',
    tech: ['Processing', 'Java'],
    date: '2023',
    image: '/assets/growing-mice-game-screenshot.png',
  },
  {
    id: 3,
    title: 'Labyrinth Game',
    description: 'A game built with Processing (simplified Java) where labyrinths are generated with a recursive backtracking algorithm and player have to find the exit of the labyrinth while avoiding traps and enemies.',
    tech: ['Processing', 'Java'],
    date: '2023',
    image: '/assets/labyrinthe.png',
  },
  {
    id: 4,
    title: 'Candy Crush Like Game',
    description: 'A clone of the popular game Candy Crush built with Processing (simplified Java) where player have to match three or more colored candies to clear them from the board and score points.',
    tech: ['Processing', 'Java'],
    date: '2024',
    image: '/assets/candy-crush.png',
  },
  {
    id: 5,
    title: 'Serious Game Project',
    description: 'A serious game for learning programming with Java built with Processing (simplified Java). The game simulate an emergency evacuation of a school with multiple floors. Player can control students to evacuate the building and also control the one that have to verify that all students are evacuated by checking every room with a minimap that shows the status of each room.',
    tech: ['Processing', 'Java'],
    date: '2024',
    image: '/assets/serious-game-project-screenshot.png',
  },
  {
    id: 6,
    title: 'Chessquito',
    description: 'A simplified chess game built with Java and Swing where player have some hints available. Every algorithm and game logic is built from scratch by myself with no internet research. The game manage edge cases such as castling, in passing, promotion, pat and checkmate. (base project for my chess game)',
    tech: ['Java', 'Swing'],
    date: '2024',
    image: '/assets/chessquito-screenshot.png',
  },
]

/**
 * CareNest (PHP, CakePHP, MySQL, Bootstrap) 2024 - 2025 # a web application for the IUT Lyon1 - Bourg-en-Bresse. A platform to conect students and the school's health services (infirmary, solidarity fridge, first aid formation). The project provide articles posting, a scheduling system for medical appointments, a way to manage an history for each student ...
 * BUT Project (Python, DjangoRestFramework, JWT, Angular, Bruno, Swagger) 2025 - 2026 # a web application for the IUT Lyon1 - Bourg-en-Bresse. A platform to manage the project of students. The app provide a way for students to apply for subjects provided by the school, a way to send messages between students and teachers, a way to manage teams and their members, a way to manage project documents and reports, an archive system...
 */
const schoolProjects = [
  {
    id: 1,
    title: 'CareNest',
    description: 'A web application for the IUT Lyon1 - Bourg-en-Bresse. A platform to conect students and the school\'s health services (infirmary, solidarity fridge, first aid formation). The project provide articles posting, a scheduling system for medical appointments, a way to manage an history for each student ...',
    tech: ['PHP', 'CakePHP', 'MySQL', 'Bootstrap'],
    date: '2024 - 2025',
    image: '/assets/carenest-screenshot.png',
  },
  {
    id: 2,
    title: 'BUT Project',
    description: 'A web application for the IUT Lyon1 - Bourg-en-Bresse. A platform to manage the project of students. The app provide a way for students to apply for subjects provided by the school, a way to send messages between students and teachers, a way to manage teams and their members, a way to manage project documents and reports, an archive system...',
    tech: ['Python', 'DjangoRestFramework', 'JWT', 'Angular', 'Bruno', 'Swagger'],
    date: '2025 - 2026',
    image: '/assets/but-project-screenshot.png',
  },
]
</script>

<template>
  <main class="projects-page">
    <ProjectsGrid title="School Projects" :projects="schoolProjects" />
    <ProjectsGrid title="Personal Projects to learn programming" :projects="personalProjectsLearn" />
    <ProjectsGrid title="School Projects to learn programming" :projects="schoolProjectsLearn" />
  </main>
</template>

<style scoped>
.projects-page {
  padding: 2rem 2rem;
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
