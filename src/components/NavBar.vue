<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="projects">Projects</a>
        <a class="nav-item" href="academy">Academy</a>
        <a class="nav-item" href="about">About</a>
      </ul>
    </nav>
    <img class="img" src="../assets/king.png" alt="logo" />
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

.nav-item {
  display: block;
  color: var(--color-heading);
  text-align: center;
  padding: 1.6rem 1rem;
  text-decoration: none;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, var(--color-border) 0%, transparent 70%);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease-out;
}

.nav-item:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.nav-item:hover {
  color: var(--color-heading);
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
