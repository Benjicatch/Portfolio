<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <div class="academy">
    <NavBar />
    <h1>This is an academy page</h1>
  </div>
</template>
  
<style>
@media (min-width: 1024px) {
  .academy {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
