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
      <h2 class="title">Why Work with Me?</h2>
      <ul>
        <li>Passionate about clean, efficient code.</li>
        <li>Strong problem-solving and debugging skills.</li>
        <li>Collaborative team player with good communication.</li>
      </ul>
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
}

.me {
  width: 200px;
  height: 200px;
  border-radius: 50%;
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
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
}

section {
  width: 100%;
  background: var(--color-background-mute);
  margin: 2rem 0;
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
