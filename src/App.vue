<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <RouterView />

</template>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  box-shadow: 0px 4px 10px black;
  margin-bottom: 30px;
}

@media (min-width: 768px) {}

@media (min-width: 992px) {}

@media (min-width: 1200px) {}
</style>
