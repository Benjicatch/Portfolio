<script setup lang="ts">
const changeLang = (lang: string) => {
  localStorage.setItem("lang", lang);
  window.location.reload();
};
const lang = localStorage.getItem("lang") || "FRA";

const items = [ "FRA", "ENG" ];
</script>

<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <a class="nav-btn" href="#">{{ $t("nav.home") }}</a>
        <a class="nav-btn" href="#projects">{{ $t("nav.project") }}</a>
        <a class="nav-btn" href="#studies">{{ $t("nav.studies") }}</a>
        <a class="nav-btn" href="#about-me">{{ $t("nav.about") }}</a>
        <li class="lang-btn">
          <v-select
            v-model="lang"
            :items="items"
            @update:modelValue="changeLang"
            class="lang-select"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-border);
}

.lang-select {
  font-size: 0.9rem;
  max-width: auto;
  max-height: 0px;
  padding: 0px;
  margin-top: -30px;
  background-color: var(--color-background-mute);
  color: var(--color-heading);
  cursor: pointer;
  position: relative;
  display: block;
}

.navbar {
  overflow: hidden;
  flex: 1;
}

.nav-list {
  list-style: none; /* Removes bullet points from all list items */
  display: flex;
  align-items: center;
  padding: 0;
}

.nav-btn {
  display: block;
  color: var(--color-heading);
  text-align: center;
  padding: 1.4rem 0rem;
  text-decoration: none;
  flex: 200;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.lang-btn {
  color: var(--color-heading);
  text-align: center;
  margin-left: auto;
  margin-right: 10px;
  flex-grow: 0;
  padding: 1.4rem 0rem;
  text-decoration: none;
  flex-grow: 1;
  position: relative;
  z-index: 1;
  text-align: center;
}

.nav-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(
    circle,
    var(--color-background) 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease-out;
  z-index: -1;
}

.nav-btn:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.nav-btn:hover {
  color: var(--color-heading);
  z-index: 2;
}

.img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

a {
  color: var(--color-heading);
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 768px) {

  /* Adjust language selection button */
  .lang-btn {
    margin-right: 0;
    margin-left: 0;
  }
}

</style>
