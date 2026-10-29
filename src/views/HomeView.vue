<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import NavBar from "@/components/NavBar.vue";
import ContactMe from "@/components/ContactMe.vue";
import { skills } from "@/data/cv";

const { tm, rt } = useI18n();

const developmentSkills = computed(() =>
  skills.filter((s) => s.category === "development"),
);
const devopsSkills = computed(() =>
  skills.filter((s) => s.category === "devops"),
);
const toolSkills = computed(() => skills.filter((s) => s.category === "tools"));

const whyItems = computed<string[]>(() => {
  const raw = tm("home.whyItems") as unknown;
  if (!Array.isArray(raw)) return [];
  return (raw as unknown[]).map((item) => rt(item as string) as string);
});

const cvUrl = "/Portfolio/cv/benjamin-colimard-cv.pdf";
</script>

<template>
  <NavBar />
  <div class="home">
    <section class="welcome">
      <div class="welcome-body container">
        <img
          class="me"
          src="@/assets/me/professional.jpg"
          alt="Benjamin Colimard"
        />
        <h1 class="title">{{ $t("home.title") }}</h1>
        <h2 class="subtitle" v-html="$t('home.subtitle')"></h2>
        <a :href="cvUrl" class="btn" download="Benjamin-Colimard-CV.pdf">
          {{ $t("home.downloadCV") }}
        </a>
      </div>
    </section>

    <section>
      <h2 class="title">{{ $t("home.whoAmI.title") }}</h2>
      <p
        v-for="(paragraph, i) in $tm('home.whoAmI.content')"
        :key="i"
        class="align-text"
        v-html="paragraph"
      ></p>
    </section>

    <section class="me_skills">
      <section class="skills">
        <h2 class="title">{{ $t("home.skills") }}</h2>

        <h3 class="subtitle">{{ $t("home.skillsDevelopment") }}</h3>
        <div class="skills-grid">
          <a
            v-for="skill in developmentSkills"
            :key="skill.name"
            :href="skill.website"
            target="_blank"
            rel="noopener noreferrer"
            class="skill-item"
            :title="skill.name"
          >
            <img :src="skill.image" :alt="skill.name" />
          </a>
        </div>

        <h3 class="subtitle">{{ $t("home.skillsDevops") }}</h3>
        <div class="skills-grid">
          <a
            v-for="skill in devopsSkills"
            :key="skill.name"
            :href="skill.website"
            target="_blank"
            rel="noopener noreferrer"
            class="skill-item"
            :title="skill.name"
          >
            <img :src="skill.image" :alt="skill.name" />
          </a>
        </div>

        <h3 class="subtitle">{{ $t("home.skillsTools") }}</h3>
        <div class="skills-grid">
          <a
            v-for="skill in toolSkills"
            :key="skill.name"
            :href="skill.website"
            target="_blank"
            rel="noopener noreferrer"
            class="skill-item"
            :title="skill.name"
          >
            <img :src="skill.image" :alt="skill.name" />
          </a>
        </div>
      </section>

      <section class="why-work-with-me">
        <h2 class="title">{{ $t("home.whyWorkWithMe") }}</h2>
        <ul class="why-item-list">
          <li v-for="(item, i) in whyItems" :key="i">{{ item }}</li>
        </ul>
      </section>
    </section>

    <section class="projects">
      <h2 class="title">{{ $t("home.projects") }}</h2>
      <RouterLink to="/projects" class="btn">{{
        $t("home.projectsButton")
      }}</RouterLink>
    </section>
  </div>
  <ContactMe />
</template>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.align-text {
  justify-content: center;
  text-align: center;
  align-items: center;
  word-break: break-word; /* Breaks words when necessary */
  white-space: pre-line; /* Ensures new lines are preserved while allowing wrapping */
}

.me {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 2s;
}

.me:hover {
  transform: perspective(1000px) rotateY(360deg);
}

.welcome,
.projects {
  text-align: center;
  padding: 2rem;
}

.welcome-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.me_skills {
  background-color: var(--color-background);
  box-shadow: var(--color-background);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  font-weight: bold;
  line-height: 1.5;
  color: var(--color-heading);
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  animation: fadeIn 1.5s ease-in-out;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; /* Adjust gap */
  justify-content: center;
  align-items: center;
}

.skill-item {
  text-align: center;
}

.skills img {
  width: 100px;
  height: 100px;
  transition: transform 0.3s;
}

.skills img:hover {
  transform: scale(1.1);
}

.why-work-with-me {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
}

.why-item-list {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: center;
  justify-content: center;
}

.why-item-list li {
  font-size: 1.7rem;
  margin: 0.5rem 0;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
  display: list-item;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

/* Keyframes for animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .me_skills {
    flex-direction: column;
  }

  .me {
    width: 120px;
    height: 120px;
  }

  .skills img {
    width: 60px;
    height: 60px;
  }

  .btn {
    font-size: 1.2rem;
    padding: 2% 3%;
  }

  section {
    margin: 0%;
  }

  .why-item-list li {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
