<script setup>
import products from "../models/ProductsDatabase";
const storedCart = localStorage.getItem("cartContents")

function getProductsByIds(ids) {
  // Filter the products array to find matching IDs
  return products.filter(product => ids.includes(product.id));
}

const selectedProducts = getProductsByIds(storedCart);
console.log('selectedProducts:', selectedProducts)


</script>

<template>
    <i class="fa-solid fa-cart-shopping"></i>
    <div class="cart">
        <h3>Cart</h3>
        <div class="cartItem">
            <p>Title</p>
            <p>Pris</p>
            <hr>
        </div>
        <button>Checkout</button>
    </div>
</template>

<style scoped>
</style>