<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="about">About</a>
        <a class="nav-item" href="projects">Projects</a>
        <a class="nav-item" href="academy">Academy</a>
        <img class="img" src="../assets/me.png" alt="logo" />
      </ul>
    </nav>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar {
  background-color: var(--color-background-mute);
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
  padding: 14px 16px;
  text-decoration: none;
  flex-grow: 1;
}

.nav-item:hover {
  background-color: var(--color-border-hover);
  color: var(--color-heading);
}

.img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

</style>
