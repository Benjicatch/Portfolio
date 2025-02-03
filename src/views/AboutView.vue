<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="about">
    <section>
      <img src="../assets/me/me.png" alt="Benjamin Colimard" class="rounded-image" />
      <h1 class="title">👋 Hey, I'm Benjamin Colimard !</h1>
      <p class="align-text">
        I am French 🇫🇷, born in Bordeaux 🍷, and I am 21 years old.<br />
        I am currently in my 4th year at Epitech Nantes, a computer science school 🏫.<br />
        I love programming and I'm always looking for new challenges 🚀.<br />
      </p>
    </section>
    <section>
      <h2 class="title">🚀 Why I Love Tech</h2>
      <p class="align-text">
        For me, programming is like a puzzle, where I have to find the right pieces to make everything work together 🧩.<br />
        It allows me to build projects that can help people, and I love seeing the impact of my work on others 🌍.<br />
        For these reasons, I want to work in the tech industry to continue to help people and create amazing things 🌟.<br />
      </p>
    </section>

    <section>
      <h3 class="title">✈️ My Passions and Hobbies</h3>
      <p class="align-text">
        I love playing video games 🎮. I play a lot of different games, but my favorite is Hollow Knight 🖤.<br />
        I am also passionate about sports. I practice baseball ⚾ and a little bit of calisthenics 🏋️.<br />
        I also love traveling. I have already visited several countries and am always looking for new destinations 🌍.<br />
        Sometimes, I enjoy exploring new passions like chess or Blender, and see where they take me 🎨.<br />
      </p>
    </section>

    <section>
      <h1 class="title">🎲 Random Facts</h1>
      <p class="align-text">
        My favorite color is red 🔴, and my favorite number is 🔟.<br />
        I know how to play mahjong 🀄 and I am a big fan of the game.<br />
        I love playing laser tag 🔫, I think it's a great way to have fun with friends.<br />
        I have trouble remembering names, but I never forget a face 🤔.<br />
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
