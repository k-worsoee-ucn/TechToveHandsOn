<script setup>
import products from "@/models/ProductsDatabase.js";
//import productModel from "../models/ProductsModel"
import useCart from "@/services/useCart";

const { cart } = useCart();

</script>

<template>
    <i class="fa-solid fa-cart-shopping"></i>
    <div class="cart">
        <h3>Cart</h3>
        <div class="cartItem" v-for="item in cart">
            <p>{{ item.titel }}</p>
            <p>{{ item.pris }} DKK</p>
            <hr>
        </div>
        <div class="totalPrice">
            <p>Total:</p>
            <p>{{  }} DKK</p>
        </div>
        <button>Checkout</button>
    </div>
</template>

<style scoped></style>