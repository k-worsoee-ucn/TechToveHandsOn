<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router"
import cartComponent from './components/cartComponent.vue'
import { auth } from './Services/firebaseConfiq';
import { onAuthStateChanged } from 'firebase/auth';

const isShoppingBarVisible = ref(false);

const toggleShoppingBar = () => {
  isShoppingBarVisible.value = !isShoppingBarVisible.value;
}

const closeSidebar = () => {
  isShoppingBarVisible.value = false;
}

const userEmail = ref(null);

// Lytter efter ændringer i authentication staten for brugeren
// Ændres denne state, gør følgende; ...
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Tjekker om user objektet ikke er tomt / logget ind
    userEmail.value = user.email;
  } else {
    // Brugeren er logget ud
    userEmail.value = null;
  }
});
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <RouterLink to="/">
            <li>Home</li>
          </RouterLink>
          <RouterLink to="/login">
            <li>Login</li>
          </RouterLink>
          <RouterLink to="/produkter">
            <li>Produkter</li>
          </RouterLink>
        </ul>
      </nav>
      <div id="loginBox">
        <p v-if="userEmail">{{ userEmail }}</p>
        <p v-else>Log ind din taber!</p>
        <div>
          <img src="./assets/img/jonathan-cosens-photography-IgOVPMd862s-unsplash.jpg" alt="Tech Tove">
        </div>
      </div>
      <button class="shopping-cart-btn" @click="toggleShoppingBar">
        <i class="fa-solid fa-cart-shopping fa-2x"></i>
      </button>
    </header>
    <RouterView />
  </div>
  <cartComponent :visible="isShoppingBarVisible" @close="closeSidebar"></cartComponent>
</template>
