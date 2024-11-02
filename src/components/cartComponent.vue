<template>
    <transition name="cart-slide">
        <div class="cart" v-if="visible">
            <h3>Cart</h3>
            <div class="cartList">
                <div class="cartItem" v-for="item in cart" :key="item.id">
                    <p>{{ item.titel }}</p>
                    <p>{{ item.pris }} DKK</p>
                    <p>{{ item.quantity }}</p>
                    <button @click="removeFromCart(item.id)" class="trash-icon">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="totalPrice">
                <p>Total:</p>
                <strong>{{ calculatedTotalPrice }} DKK</strong>
            </div>
            <button>Checkout</button>
        </div>
    </transition>
</template>

<script setup>
import useCart from "../Services/useCart";


const { cart, calculatedTotalPrice, removeFromCart } = useCart();

const { visible } = defineProps(['visible'])
</script>