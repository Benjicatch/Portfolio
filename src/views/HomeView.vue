<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import ContactMe from "@/components/ContactMe.vue";
import cImage from "../assets/skills/C.png";
import cppImage from "../assets/skills/C++.png";
import dockerImage from "../assets/skills/Docker.png";
import lispImage from "../assets/skills/Lisp.png";
import nestjsImage from "../assets/skills/NestJs.png";
import reactImage from "../assets/skills/React.png";
import pythonImage from "../assets/skills/Python.png";
import typescriptImage from "../assets/skills/Typescript.png";
import vuejsImage from "../assets/skills/Vuejs.png";

// Skills array
const skills = [
  { name: "C", image: cImage, website: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "C++", image: cppImage, website: "https://en.wikipedia.org/wiki/C%2B%2B" },
  { name: "Typescript", image: typescriptImage, website: "https://www.typescriptlang.org/" },
  { name: "Docker", image: dockerImage, website: "https://www.docker.com/" },
  { name: "NestJs", image: nestjsImage, website: "https://nestjs.com/" },
  { name: "Python", image: pythonImage, website: "https://www.python.org/" },
  { name: "React", image: reactImage, website: "https://reactjs.org/" },
  { name: "Vuejs", image: vuejsImage, website: "https://vuejs.org/" },
  { name: "Lisp", image: lispImage, website: "https://lisp-lang.org/" },
];
</script>

<template>
  <NavBar />
  <div class="home">
    <section class="welcome">
      <div class="welcome-body">
        <div class="container">
          <img class="me" src="../assets/me/profesionnal.jpg" alt="me" />
          <h1 class="title">Welcome to my Portfolio !</h1>
          <h2 class="subtitle">
            Experienced Developer | Backend & Fullstack | Based in Nantes
          </h2>
        </div>
      </div>
    </section>

    <section>
      <h2 class="title">Who am I ?</h2>
        <p class="align-text">
          My name is <strong>Benjamin Colimard</strong>, I am a French citizen born in Bordeaux, and I am 21 years old.
        </p>
        <p class="align-text">
          Currently a 4th-year student at <strong>Epitech Nantes</strong>, my diverse experiences
          have allowed me to gain expertise in various fields of computer
          science.
        </p>
        <p class="align-text">
          I am currently seeking an <strong>internship, fixed-term contract (CDD), or
          permanent position (CDI)</strong> with availability from Monday to Wednesday,
          starting September 15 until February 28.
        </p>
    </section>

    <section class="me_skills">
      <section class="skills">
        <h2 class="title">Skills & Tools</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <a :href="skill.website" target="_blank" rel="noopener noreferrer">
              <img :src="skill.image" :alt="skill.name" />
            </a>
          </div>
        </div>
      </section>
      <section class="why-work-with-me">
        <h2 class="title">Why working with me ?</h2>
        <div class="why-item-list">
          <ul>
            <li>Passionate about clean, efficient code.</li>
            <li>Strong problem-solving and debugging skills.</li>
            <li>Collaborative team player with good communication.</li>
          </ul>
        </div>
      </section>
    </section>
    <section class="projects">
      <h2 class="title">Want to know more ?</h2>
      <a href="#projects" class="btn">Check out my projects</a>
    </section>
  </div>
  <ContactMe />
</template>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.align-text {
  justify-content: center;
  text-align: center;
  align-items: center;
  word-break: break-word; /* Breaks words when necessary */
  white-space: pre-line; /* Ensures new lines are preserved while allowing wrapping */
}

.me {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 2s;
}

.me:hover {
  transform: perspective(1000px) rotateY(360deg);
}

.welcome,
.projects {
  text-align: center;
  padding: 2rem;
}

.welcome-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.me_skills {
  background-color: var(--color-background);
  box-shadow: var(--color-background);
  display: flex;
  flex-direction: row;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  font-weight: bold;
  line-height: 1.5;
  color: var(--color-heading);
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  animation: fadeIn 1.5s ease-in-out;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; /* Adjust gap */
  justify-content: center;
  align-items: center;
}

.skill-item {
  text-align: center;
}

.skills img {
  width: 100px;
  height: 100px;
  transition: transform 0.3s;
}

.skills img:hover {
  transform: scale(1.1);
}

.why-work-with-me {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
}

.why-item-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  justify-content: center;
}

.why-item-list li {
  font-size: 1.7rem;
  margin: 0.5rem 0;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
  display: list-item;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

/* Keyframes for animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .me_skills {
    flex-direction: column;
  }

  .me {
    width: 120px;
    height: 120px;
  }

  .skills img {
    width: 60px;
    height: 60px;
  }

  .btn {
    font-size: 1.2rem;
    padding: 2% 3%;
  }

  section {
    margin: 0%;
  }
  
  .why-item-list li {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
