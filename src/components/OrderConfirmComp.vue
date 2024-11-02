<script setup>
import useCart from "../Services/useCart";

const { cart } = useCart();
</script>

<template>
    <div class="order-conf-container">
        <h3>Tak for dit køb hos TechTove!</h3>
        <div>
            <h4>Glæd dig til:</h4>
            <div class="order-conf-items" v-for="item in cart" :key="item.id">
                <p>{{ item.titel }}</p>
                <p>{{ item.pris }} DKK</p>
                <p>{{ item.quantity }} stk</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>