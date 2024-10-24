<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
