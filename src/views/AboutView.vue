<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="about">
    <section>
      <img src="../assets/me/me.png" alt="Benjamin Colimard" class="rounded-image" />
      <h1 class="title">👋 Hey, I'm  Benjamin Colimard !</h1>
      <p class="align-text">
        I am a French citizen🇫🇷, born in Bordeaux🍷, and I am 21 years old.<br />
        I am currently in my 4th year at Epitech Nantes, a computer science school🏫.<br />
        I love to learn new things and I am always looking for new challenges🚀.<br />
      </p>
    </section>
    <section>
      <h2 class="title">🚀 Why I Love Tech</h2>
      <p class="align-text">
        For me, programming is like a puzzle, I love to solve problems and create new things🧩.<br />
        It allow me to create things that can help people, and I love to see the impact of my work on others🌍.<br />
        For this reasons, I want to work in the tech industry, to create new things and help people in their daily life🚀.<br />
      </p>
    </section>

    <section>
      <h3 class="title">✈️ My Passions and Hobbies</h3>
      <p class="align-text">
        I love to play video games🎮, I play a lot of different games, but my favorite one is Hollow Knight🖤.<br />
        I am also passionate about sports, I practice baseball⚾ and a little bit of callisthenics🏋️.<br />
        I also love to travel, I have already visited several countries and I am always looking for new destinations🌍.<br />
        Sometimes, I enjoy exploring new passions like chess, Blender, or drawing, always to experiment with different things🎨.<br />
      </p>
    </section>

    <section>
      <h1 class="title">🎲 Random Facts</h1>
      <p class="align-text">
        My favorite color is red🔴 and my favorite number is 🔟.<br />
        I know how to play mahjong🀄 and I am a big fan of the game.<br />
        I love play laser tag🔫, I think it's a great way to have fun with friends.<br />
        I have a problem with remembering names, but I never forget a face🤔.<br />
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
