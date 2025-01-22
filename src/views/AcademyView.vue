<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="academy">
    <h1>This is an academy page</h1>
  </div>
  <ContactMe />
</template>

<style>
.academy {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
