<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="about">
    <section>
      <img src="../assets/me/me.png" alt="Benjamin Colimard" class="rounded-image" />
      <h1 class="title">{{ $t("about.title") }}</h1>
      <p class="align-text">
        {{ $t("about.description_me[0]") }}<br />
        {{ $t("about.description_me[1]") }}<br />
        {{ $t("about.description_me[2]") }}<br />
      </p>
    </section>
    <section>
      <h2 class="title">{{ $t("about.tech") }}</h2>
      <p class="align-text">
        {{ $t("about.description_tech[0]") }}<br />
        {{ $t("about.description_tech[1]") }}<br />
        {{ $t("about.description_tech[2]") }}<br />
      </p>
    </section>

    <section>
      <h3 class="title">{{ $t("about.hobbies") }}</h3>
      <p class="align-text">
        {{ $t("about.description_hobbies[0]") }}<br />
        {{ $t("about.description_hobbies[1]") }}<br />
        {{ $t("about.description_hobbies[2]") }}<br />
        {{ $t("about.description_hobbies[3]") }}<br />
      </p>
    </section>

    <section>
      <h1 class="title">{{ $t("about.randomFacts") }}</h1>
      <p class="align-text">
        {{ $t("about.description_randomFacts[0]") }}<br />
        {{ $t("about.description_randomFacts[1]") }}<br />
        {{ $t("about.description_randomFacts[2]") }}<br />
        {{ $t("about.description_randomFacts[3]") }}<br />
      </p>
    </section>
  </div>
  <ContactMe />
</template>

<style>
@import "../assets/base.css";

.about {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.about section {
  justify-content: center;
  text-align: center;
  align-items: center;
}

.about img {
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 100%;
  margin-bottom: 1rem;
}

.align-text {
  justify-content: center;
  text-align: center;
  align-items: center;
  word-break: break-word; /* Breaks words when necessary */
  white-space: pre-line; /* Ensures new lines are preserved while allowing wrapping */
}

.about p {
  justify-content: center;
  align-items: center;
  word-break: break-word; /* Breaks words when necessary */
  white-space: pre-line; /* Ensures new lines are preserved while allowing wrapping */
}

</style>
