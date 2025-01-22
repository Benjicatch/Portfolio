<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import ContactMe from "@/components/ContactMe.vue";
</script>

<template>
  <NavBar />
  <div class="home">
    <h1>This is a home page</h1>
  </div>
  <ContactMe />
</template>

<style>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
