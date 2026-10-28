<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import NavBar from "@/components/NavBar.vue";
import ContactMe from "@/components/ContactMe.vue";
import { timeline } from "@/data/cv";

const { t } = useI18n();

// Reactive: rebuilds when locale changes.
const items = computed(() =>
  timeline.map((entry) => ({
    date: entry.date,
    color: entry.color,
    icon: entry.icon,
    title: t(`studies.${entry.id}.title`),
    description: t(`studies.${entry.id}.description`),
  })),
);
</script>

<template>
  <NavBar />
  <div class="timeline-container">
    <v-timeline line-color="var(--color-text)">
      <v-timeline-item v-for="(item, i) in items" :key="i">
        <template #opposite>
          <span class="timeline-date">{{ item.date }}</span>
        </template>
        <v-card color="var(--color-background-soft)" class="timeline-item">
          <div class="card-title">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </div>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
  <ContactMe />
</template>

<style scoped>
.timeline-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  padding: 2rem;
}

.v-timeline {
  width: 100%;
}

.card-title {
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-heading);
  padding: 0.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.v-card-text {
  text-align: center;
  color: var(--color-text);
  padding: 0.5rem;
}

.timeline-date {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text);
  white-space: nowrap;
}
</style>
