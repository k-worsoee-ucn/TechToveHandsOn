<script setup>
import { useOrderProcessing } from '../Services/useOrderProcessing';


const { transactionDetails } = useOrderProcessing()
</script>

<template>
    <section class="order-conf-container">
        <h3>Tak for dit køb hos TechTove!</h3>
        <div class="order-conf-details">
            <h4>Glæd dig til:</h4>
            <div class="order-conf-items" v-for="(order, index) in transactionDetails" :key="index">
                <p>
                    Navn: {{ order.details.firstName }} {{ order.details.lastName }}
                </p>
                <p>
                    Adresse: {{ order.details.address }}
                </p>
                <p>
                    Phone: {{ order.details.phone }}
                </p>
                <p>
                    Email: {{ order.details.email }}
                </p>
                <strong>Leverings metode:</strong>
                <p>{{ order.type }}</p>

                <strong>Dine produkter:</strong>
                <div class="order-product" v-for="(item, index) in order.details.cartItems" :key="index">
                    <img :src="item.img" alt="product thumb">
                    <div>
                        <strong>{{ item.titel }}</strong>
                        <p>{{ item.katagori }}</p>
                        <p>Antal: {{ item.quantity }}</p>
                        <p>{{ item.pris }} kr.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>