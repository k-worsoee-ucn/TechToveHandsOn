<template>
    <section class="cart-overview-container">
        <h3>Order overview</h3>
        <ul class="cart-list">
            <li class="cart-item" v-for="item in cart" :key="item.id">
                <img :src="item.img" alt="">
                <div>
                    <strong>{{ item.titel }}</strong>
                    <p>{{ item.katagori }}</p>
                    <p>Antal: {{ item.quantity }}</p>
                    <p>{{ item.pris }} kr.</p>
                </div>
            </li>
            <strong>Total price: {{ calculatedTotalPrice }} kr.</strong>
        </ul>
    </section>
</template>

<script setup>
import useCart from '@/Services/useCart';

const { cart, calculatedTotalPrice } = useCart();
</script>