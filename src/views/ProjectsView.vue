<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import NavBar from "@/components/NavBar.vue";
import ContactMe from "@/components/ContactMe.vue";
import { projects } from "@/data/cv";

const { t } = useI18n();

const items = computed(() =>
  projects.map((p) => ({
    ...p,
    title: t(`projects.${p.id}.title`),
    description: t(`projects.${p.id}.description`),
  })),
);
</script>

<template>
  <NavBar />
  <div class="project">
    <section class="welcome">
      <div class="welcome-body container">
        <h1 class="title">{{ t("projects.title") }}</h1>
        <p>{{ t("projects.description") }}</p>
      </div>
    </section>

    <section v-for="project in items" :key="project.id" class="projects">
      <img :src="project.image" :alt="project.title" />
      <div class="project-details">
        <h2 class="title">{{ project.title }}</h2>

        <div class="project-meta">
          <span><strong>{{ t("projects.labels.year") }}:</strong> {{ project.year }}</span>
          <span><strong>{{ t("projects.labels.role") }}:</strong> {{ project.role }}</span>
          <span><strong>{{ t("projects.labels.team") }}:</strong> {{ project.team }}</span>
        </div>

        <ul class="stack-tags">
          <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
        </ul>

        <p>{{ project.description }}</p>
        <a :href="project.link" class="btn" target="_blank" rel="noopener noreferrer">
          {{ t("projects.learnMore") }}
        </a>
      </div>
    </section>
  </div>
  <ContactMe />
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.welcome,
.projects {
  text-align: center;
  padding: 2rem;
}

.welcome-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.projects p {
  margin-bottom: 1rem;
  max-width: 70rem;
  word-break: break-word;
  white-space: pre-line;
}

.projects img {
  max-width: 40rem;
  max-height: 20rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-size: 0.95rem;
}

.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
  justify-content: center;
}

.stack-tags li {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  background: var(--color-background-soft);
  color: var(--color-heading);
  font-size: 0.85rem;
  font-weight: 600;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5;
  color: var(--color-heading);
  text-align: center;
}

@media screen and (max-width: 768px) {
  .projects img {
    max-width: 100%;
    max-height: 15rem;
  }
}
</style>
