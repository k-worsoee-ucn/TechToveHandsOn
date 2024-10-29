<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <RouterLink to="/"><li>Home</li></RouterLink>
          <RouterLink to="/about"><li>About</li></RouterLink>
          <RouterLink to="/login"><li>Login</li></RouterLink>
          <RouterLink to="/produkter"><li>Produkter</li></RouterLink>
        </ul>
      </nav>
      <div id="loginBox">
        <p v-if="userEmail">{{ userEmail }}</p>
        <p v-else>Log ind, taber!</p>
        <div>
          <img src="./assets/img/jonathan-cosens-photography-IgOVPMd862s-unsplash.jpg" alt="Tech Tove">
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

import { ref, onMounted } from 'vue';
import { auth } from './Services/firebaseConfiq';
import { onAuthStateChanged } from 'firebase/auth';

const userEmail = ref(null);

  // Set up the listener for authentication state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      userEmail.value = user.email;
    } else {
      // User is signed out
      userEmail.value = null;
    }
  });
</script>

<style scoped>
/* Add any styles here */
</style>
