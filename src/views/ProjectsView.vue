<script setup lang="ts">
import { useI18n } from 'vue-i18n'; // Import the useI18n hook
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
import dominoImage from "@/assets/projects/domino.jpg";
import snakeImage from "@/assets/projects/snake.png";
import rTypeImage from "@/assets/projects/RType.png";
import Ecommerce from "@/assets/projects/Ecommerce.jpg"

// Accessing translations via useI18n hook
const { t } = useI18n();

const projects = [
  {
    title: t("projects.area.title"),
    description: t("projects.area.description"),
    image: dominoImage,
    link: "https://github.com/AlexGuillard/Area",
  },
  {
    title: t("projects.rType.title"),
    description: t("projects.rType.description"),
    image: rTypeImage,
    link: "https://github.com/AlexGuillard/R-Type",
  },
  {
    title: t("projects.snake.title"),
    description: t("projects.snake.description"),
    image: snakeImage,
    link: "https://github.com/Benjicatch/Snake",
  },
  {
    title: t("projects.Ecommerce.title"),
    description: t("projects.Ecommerce.description"),
    image: Ecommerce,
    link: "https://github.com/Benjicatch/Electronic-commerce-system",
  },
];
</script>

<template>
  <NavBar />
  <div class="project">
    <section class="welcome">
      <div class="welcome-body">
        <div class="container">
          <h1 class="title">{{ t("projects.title") }}</h1>
        </div>
        <p>{{ t("projects.description") }}</p>
      </div>
    </section>
    <section v-for="project in projects" :key="project.title" class="projects">
      <img :src="project.image" :alt="project.title" />
      <div class="project-details" >
        <h2 class="title">{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a :href="project.link" class="btn">Learn more</a>
      </div>
    </section>
  </div>
  <ContactMe />
</template>

<style>
.project {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 2rem;
  flex-direction: row;
}

.projects p {
  margin-bottom: 1rem;
  max-width: 70rem; /* Restrict width to force wrapping */
  word-break: break-word; /* Breaks words when necessary */
  white-space: pre-line; /* Ensures new lines are preserved while allowing wrapping */
}

.projects img {
  max-width: 40rem;
  max-height: 20rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-details h2 {
  margin-bottom: 1rem;
}

.project-details a {
  margin-top: 1rem;
}

@media screen and (max-width: 768px) {
  .projects img {
    max-width: 100%;
    max-height: 15rem;
  }
  
}
</style>
