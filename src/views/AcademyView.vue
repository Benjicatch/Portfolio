<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";

const timelineItems = [
  {
    title: "Chung Cheng University, Taiwan",
    description: "Studied at Chung Cheng University as an exchange student for 2 semester.",
    color: "blue",
    icon: "mdi-briefcase",
    date: "2024-2025"
  },
  {
    title: "Internship at the Institute of Technology, Bordeaux",
    description: "Worked as a Lisp developer on a project automating the creation of virtual machines for the institute.",
    color: "blue",
    icon: "mdi-briefcase",
    date: "2024"
  },
  {
    title: "Internship at Chouic, Nantes",
    description: "Developed and maintained mobile applications using React Native for the company’s products.",
    color: "green",
    icon: "mdi-web",
    date: "2022"
  },
  {
    title: "Epitech, Nantes",
    description: "Started my studies at Epitech Nantes, specializing in software development.",
    color: "purple",
    icon: "mdi-school",
    date: "2021"
  },
  {
    title: "High School Saint Dominique, Nantes",
    description: "Graduated with honors.\nSpecialized in programming and mathematics as final subjects.",
    color: "purple",
    icon: "mdi-school",
    date: "2020-2021"
  },
  {
    title: "High School Alfred Kastler, Talence",
    description: "Pursued baseball sports studies while beginning programming.\nFocused on programming, physics-chemistry, and mathematics.",
    color: "purple",
    icon: "mdi-school",
    date: "2018-2020"
  },
  {
    title: "College Victor Louis, Talence",
    description: "Participated in baseball sports studies during my college years.",
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
