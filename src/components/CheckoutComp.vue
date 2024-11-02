<script setup>
import { ref, computed } from 'vue';
import { useOrderProcessing } from '@/services/useOrderProcessing';

const isExpress = ref(false);
const orderType = ref("standard");
const firstName = ref("");
const lastName = ref("");
const address = ref("");
const phone = ref("");
const email = ref("");


const orderDetails = computed(() => ({
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    phone: phone.value,
    email: email.value,
}));
const { createOrder } = useOrderProcessing();

function handleOrder() {
    createOrder(orderType.value, orderDetails.value);
}


const changeOrderType = () => {
    isExpress.value = !isExpress.value;

    if (!isExpress.value) {
        orderType.value = 'standard'
    }
    else {
        orderType.value = 'express'
    }
};
</script>

<template>
    <section>
        <form @submit.prevent="handleOrder">
            <div class="formField">
                <label for="firstName">First name:</label>
                <input type="text" id="firstName" name="firstName" v-model="firstName">
            </div>
            <div class="formField">
                <label for="lastName">Last name:</label>
                <input type="text" id="lastName" name="lastName" v-model="lastName">
            </div>
            <div class="formField">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" v-model="address">
            </div>
            <div class="formField">
                <label for="phone">Phone number:</label>
                <input type="tel" id="phone" name="phone" v-model="phone">
            </div>
            <div class="formField">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="email">
            </div>
            <button type="submit"><RouterLink to="/orderconfirm"> KØB FOR SATAN!</RouterLink></button>
        </form>
        <button @click="changeOrderType">{{ isExpress ? 'Vælg Standard' : 'Vælg Express'
            }}</button>
    </section>
</template>

<style lang="scss"></style>