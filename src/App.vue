<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <RouterLink to="/"><li>Home</li></RouterLink>
          <RouterLink to="/about"><li>About</li></RouterLink>
          <RouterLink to="/login"><li>Login</li></RouterLink>
          <RouterLink to="/produkter"><li>produkter</li></RouterLink>
        </ul>
      </nav>
      <div id="loginBox">
        <p>Log ind din taber!</p>
        <div>
          <img src="./assets/img/jonathan-cosens-photography-IgOVPMd862s-unsplash.jpg" alt="Tech Tove">
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
