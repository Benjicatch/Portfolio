<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import ContactMe from "@/components/ContactMe.vue";
</script>

<template>
  <NavBar />
  <div class="home">
    <section class="welcome">
      <div class="welcome-body">
        <div class="container">
          <img class="me" src="../assets/me.jpg" alt="me"/>
          <h1 class="title">Welcome to My Portfolio !</h1>
          <h2 class="subtitle">Junior Developer | Backend & Fullstack | Based in Nantes</h2>
        </div>
        <p>Currently a 5th-year student at Epitech Nantes, my diverse experiences have allowed me to gain expertise in various fields of computer science.</p>
        <p>I am currently seeking an internship, fixed-term contract (CDD), or permanent position (CDI) with availability from Monday to Wednesday, starting September 15 until February 28.</p>
      </div>
    </section>

    <section class="skills">
      <h2 class="title">Skills & Tools</h2>
      <div class="skills-grid">
        <img src="../assets/skills/C.png" alt="C" />
        <img src="../assets/skills/C++.png" alt="C++" />
        <img src="../assets/skills/Docker.png" alt="Docker" />
        <img src="../assets/skills/Lisp.png" alt="Lisp" />
        <img src="../assets/skills/NestJs.png" alt="NestJs" />
        <img src="../assets/skills/React.png" alt="React" />
        <img src="../assets/skills/Python.png" alt="Python" />
        <img src="../assets/skills/Typescript.png" alt="Typescript" />
        <img src="../assets/skills/Vuejs.png" alt="Vuejs" />
      </div>
    </section>
    <section class="why-work-with-me">
      <h2 class="title">Why Working with Me?</h2>
      <ul>
      <li class="why-item">Passionate about clean, efficient code.</li>
      <li class="why-item">Strong problem-solving and debugging skills.</li>
      <li class="why-item">Collaborative team player with good communication.</li>
      </ul>
    </section>
    <section class="projects">
      <h2 class="title">Want to know more?</h2>
       <a href="/projects" class="btn">Check out my projects</a>
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

.me {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.me:hover {
  transform: perspective(1000px) rotateY(360deg);
  transition: transform 2s;
}

.welcome {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.welcome-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2%;
}

.skills-grid {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.skills img {
  width: 100px;
  height: 100px;
  transition: transform 0.3s;
}

.skills img:hover {
  transform: scale(1.1);
}

section {
  width: 100%;
  background: var(--color-background-mute);
  margin: 2rem 0;
  padding: 2%;
  border-radius: 8px;
  box-shadow: 0 4px 8px var(--color-border);
}

.why-work-with-me {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.why-item {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
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

.btn {
  display: inline-block;
  padding: 3% 4%;
  margin: 10px;
  border-radius: 5px;
  background-color: var(--color-background-soft);
  color: var(--color-heading);
  text-decoration: none;
  border-color: var(--color-border);
  text-size-adjust: 100%;
  font-size: 2rem;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn:hover {
  background-color: var(--color-background);
  border-color: var(--color-border-hover);
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

</style>
