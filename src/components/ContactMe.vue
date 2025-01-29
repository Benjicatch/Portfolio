<script setup lang="ts"></script>

<template>
  <div class="contact-me">
    <h2 class="title">Contact Me</h2>
    <p>
      If you have any questions or would like to get in touch, feel free to
      contact me through the following methods:
    </p>
    <ul>
      <li>
        Email:
        <a href="mailto:benjamin.colimard@epitech.eu"
          >benjamin.colimard@epitech.eu</a
        >
      </li>
      <li>Phone: <a href="tel:+33618203071">+33 6 18 20 30 71</a></li>
      <li>
        LinkedIn:
        <a href="https://www.linkedin.com/in/benjamin-colimard" target="_blank"
          >Benjamin Colimard</a
        >
      </li>
      <li>
        GitHub:
        <a href="https://github.com/Benjicatch" target="_blank">Benjicatch</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "../assets/base.css";

.contact-me {
  width: 100%;
  padding: 20px;
  background-color: var(--color-background-mute);
  border-top: 1px solid var(--color-border);
  text-align: center;
  margin-top: auto; /* Push this to the bottom of its container */
  flex-shrink: 0; /* Prevent shrinking */
}

.contact-me h2 {
  margin-bottom: 10px;
}

.contact-me p {
  margin-bottom: 1rem;
  color: var(--color-text);
}

.contact-me ul {
  list-style: none;
  padding: 0;
}

.contact-me li {
  margin: 0.2rem 0;
  font-size: 1rem;
  color: var(--color-text);
}

.contact-me a {
  color: #007bff;
  text-decoration: none;
}

.contact-me a:hover {
  text-decoration: underline;
  background-color: var(--color-border-hover);
}
</style>
