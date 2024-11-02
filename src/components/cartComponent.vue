<script setup>
import useCart from "@/services/useCart";

const { cart } = useCart();

const { visible } = defineProps(['visible'])

</script>

<template>
    <div class="cart" v-if="visible">
        <h3>Cart</h3>
        <div class="cartItem" v-for="item in cart">
            <p>{{ item.titel }}</p>
            <p>{{ item.pris }} DKK</p>
            <hr>
        </div>
        <div class="totalPrice">
            <p>Total:</p>
            <p>{{ }} DKK</p>
        </div>
        <button>Checkout</button>
    </div>
</template>

<style scoped></style>