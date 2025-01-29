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
