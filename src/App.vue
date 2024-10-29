<script setup>
import { RouterLink, RouterView } from "vue-router"
import cartComponent from '../src/components/cartComponent.vue'
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
  <cartComponent></cartComponent>
</template>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
}
li {
  margin: 0 10px;
  text-decoration: none;
}

</style>
