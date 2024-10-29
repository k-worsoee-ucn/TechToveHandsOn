<script setup>
import { RouterLink, RouterView } from "vue-router"
import cartComponent from '../src/components/cartComponent.vue'
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
