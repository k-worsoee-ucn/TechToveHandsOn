<script setup>
import { RouterLink, RouterView } from "vue-router"
import cartComponent from '../src/components/cartComponent.vue'
import { ref } from "vue";
import useCart from "./services/useCart";

const { cart, totalCartItems } = useCart();

const isShoppingBarVisible = ref(false);

const toggleShoppingBar = () => {
  isShoppingBarVisible.value = !isShoppingBarVisible.value;
}

const closeSidebar = () => {
  isShoppingBarVisible.value = false;
}
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
            <li>produkter</li>
          </RouterLink>
        </ul>
      </nav>
      <div id="loginBox">
        <p>Log ind din taber!</p>
        <div>
          <img src="./assets/img/jonathan-cosens-photography-IgOVPMd862s-unsplash.jpg" alt="Tech Tove">
        </div>
      </div>
      <button class="shopping-cart-btn" @click="toggleShoppingBar">
        <i class="fa-solid fa-cart-shopping fa-2x"></i>
        <div class="cart-count" v-if="cart.length > 0">
          <p>{{ totalCartItems }}</p>
        </div>
      </button>
    </header>
    <RouterView />
  </div>
  <cartComponent :visible="isShoppingBarVisible" @close="closeSidebar"></cartComponent>
</template>
