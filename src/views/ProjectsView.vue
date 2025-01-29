<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
import dominoImage from "@/assets/projects/domino.jpg";
import snakeImage from "@/assets/projects/snake.png";
import rTypeImage from "@/assets/projects/RType.png";

const projects = [
  {
    title: "Area",
    description:
      "The goal was to create a web application that allows users to connect their social networks via OAuth2 and automate actions between them.\n\
    For example, when a user posts a picture on Instagram, a mail is sent to his friends.\n\
    The project was developed using a microservices architecture, with a front-end in React, a mobile in React-Native, a back-end in Nestjs, and a database in PostgreSQL.",
    image: dominoImage,
    link: "https://github.com/AlexGuillard/Area",
  },
  {
    title: "RType",
    description:
      "A C++ game inspired by the R-Type game.\n\
    You can play different levels, with differents enemies and bosses.\n\
    The game is multiplayer. You can play with your friends on differents computers.\n\
    There is 3 modes: multi, pvp and multi friendly fire.\n\
    The game was developed using the Raylib library.",
    image: rTypeImage,
    link: "https://github.com/AlexGuillard/R-Type",
  },
  {
    title: "Snake",
    description:
      "A C++ snake game that can be played on Linux and Windows using the Raylib library.\n\
    The game features a main menu, a game over, pause and win screen, and a settings menu.\n\
    The game allow you to configure the map, the number of obstacles and the mirror mode.",
    image: snakeImage,
    link: "https://github.com/Benjicatch/Snake",
  },
];
</script>

<template>
  <NavBar />
  <div class="project">
    <section class="welcome">
      <div class="welcome-body">
        <div class="container">
          <h1 class="title">Projects</h1>
        </div>
        <p>Here are some of the projects I've worked on:</p>
      </div>
    </section>
    <section v-for="project in projects" :key="project.title" class="projects">
      <h2 class="title">{{ project.title }}</h2>
      <img :src="project.image" :alt="project.title" />
      <p>{{ project.description }}</p>
      <a :href="project.link" class="btn">Learn more</a>
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
  text-align: center;
  padding: 2rem;
}

.projects p {
  white-space: pre-line; /* Ensures new lines are preserved while allowing wrapping */
  word-break: break-word; /* Breaks words when necessary */
}

.projects img {
  max-width: 40%;
  max-height: 40%;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
