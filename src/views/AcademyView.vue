<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
import { useI18n } from "vue-i18n";

// Accessing translations via useI18n hook
const { t } = useI18n();

const timelineItems = [
  {
    title: t("studies.taiwan.title"),
    description: t("studies.taiwan.description"),
    color: "blue",
    icon: "mdi-briefcase",
    date: "2024-2025"
  },
  {
    title: t("studies.internship_bordeaux.title"),
    description: t("studies.internship_bordeaux.description"),
    color: "blue",
    icon: "mdi-briefcase",
    date: "2024"
  },
  {
    title: t("studies.internship_chouic.title"),
    description: t("studies.internship_chouic.description"),
    color: "green",
    icon: "mdi-web",
    date: "2022"
  },
  {
    title: t("studies.epitech.title"),
    description: t("studies.epitech.description"),
    color: "purple",
    icon: "mdi-school",
    date: "2021"
  },
  {
    title: t("studies.highschool_saint_dominique.title"),
    description: t("studies.highschool_saint_dominique.description"),
    color: "purple",
    icon: "mdi-school",
    date: "2020-2021"
  },
  {
    title: t("studies.highschool_alfred_kastler.title"),
    description: t("studies.highschool_alfred_kastler.description"),
    color: "purple",
    icon: "mdi-school",
    date: "2018-2020"
  },
  {
    title: t("studies.college_victor_louis.title"),
    description: t("studies.college_victor_louis.description"),
    color: "red",
    icon: "mdi-laptop",
    date: "2017-2018"
  },
];
</script>

<template>
  <NavBar />
  <div class="timeline-container">
      <v-timeline
        line-color="var(--color-text)">
        <v-timeline-item
          v-for="(item, i) in timelineItems"
          :key="i"
        >
          <template v-slot:opposite>
            <span class="timeline-date">{{ item.date }}</span>
          </template>
          <v-card color="var(--color-background-soft)" class="timeline-item">
            <div class="title">
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

<style>
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
  justify-content: center;
  align-items: center;
}

.v-card .title {
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-heading);
  padding: 0.5rem;
}

.v-card-text {
  text-align: center;
  color: var(--color-text);
  padding: 0.5rem;
}

.card-title {
  word-wrap: break-word; /* Ensures long words wrap */
  overflow-wrap: break-word; /* Alternative for better support */
  white-space: normal; /* Prevents text from staying in one long line */
  text-align: left; /* Keep text readable */
}

.timeline {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.timeline-item {
  width: 100%;
}

.timeline-date {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text);
}

</style>
