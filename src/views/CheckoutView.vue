<script setup>
import CheckoutComp from '../components/CheckoutComp.vue'
import CheckoutCartList from '@/components/CheckoutCartList.vue';

</script>

<template>
    <section class="checkout-container">
        <h2>Checkout</h2>
        <div class="checkout-content">
            <CheckoutComp />
            <CheckoutCartList />
        </div>
    </section>

</template>