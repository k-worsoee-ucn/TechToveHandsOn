<script setup>
    import {ref, computed} from 'vue';
    import {useOrderProcessing} from '../Services/useOrderProcessing';

    const isExpress = ref(false);
    const orderType = ref("standard");
    const firstName = ref("");

    const orderDetails = computed(() => ({
        firstName: firstName.value,
    }));

    const {createOrder} = useOrderProcessing();

    function handleOrder() {
        console.log(firstName.value)
        createOrder(orderType.value, orderDetails.value);
    } 


    const changeOrderType = () => {
        isExpress.value = !isExpress.value;

        if(!isExpress.value) {
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
                <input type="text" id="lastName" name="lastName">
            </div>
            <div class="formField">
                <label for="Adress">Adress:</label>
                <input type="text" id="Adress" name="Adress">  
            </div>
           <div class="formField">
                <label for="Phone">Phone number:</label>
                <input type="tel" id="Phone" name="Phone">
           </div>
           <div class="formField">
            <label for="Email">Email:</label>
            <input type="Email" id="Email" name="Email">
           </div>
           <button type="submit">KØB FOR SATAN!</button>
        </form>
        <button @click="changeOrderType">{{ isExpress ? 'Vælg Standard' : 'Vælg Express'
            }}</button>
    </section>
</template>

<style lang="scss">

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .formField {
        display: flex;
        flex-direction: column;
    }
}

</style>