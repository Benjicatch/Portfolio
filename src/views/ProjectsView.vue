<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <div class="project">
      <NavBar />
      <h1>This is an project page</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .project {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
