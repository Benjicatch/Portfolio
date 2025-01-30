<script setup lang="ts"></script>

<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <a class="nav-btn" href="/">Home</a>
        <a class="nav-btn" href="#projects">Projects</a>
        <a class="nav-btn" href="#studies">Studies</a>
        <a class="nav-btn" href="#about">About Me</a>
      </ul>
    </nav>
    <img class="img" src="../assets/me.jpg" alt="logo" />
  </div>
</template>

<style scoped>
@import "../assets/base.css";
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-border);
}

.navbar {
  overflow: hidden;
  flex: 1;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.nav-btn {
  display: block;
  color: var(--color-heading);
  text-align: center;
  padding: 1.6rem 1rem;
  text-decoration: none;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.nav-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(
    circle,
    var(--color-background) 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease-out;
  z-index: -1;
}

.nav-btn:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.nav-btn:hover {
  color: var(--color-heading);
  z-index: 2;
}

.img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

a {
  color: var(--color-heading);
  text-decoration: none;
  font-weight: bold;
}
</style>
