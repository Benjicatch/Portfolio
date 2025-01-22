<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <div class="contact">
      <NavBar />
      <h1>This is an contact page</h1>
    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
