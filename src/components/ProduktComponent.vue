<template>
  <div class="ProduktCard-container">
    <div v-for="product in filtrerProdukter" :key="product.titel">
      <div class="product-image">
        <img :src="product.img" alt="Film Poster" />
      </div>
      <div class="product-info">
        <h2 class="product-title">{{ produkt.titel }}</h2>

        <p class="product-catagori">Katagori:{{ product.katagori }}</p>
        <p class="product-price">Pris: {{ product.pris }} kr</p>
        <button @click="addToCart()">Tilføj til kurv</button>
        <button @click="editProduct(product)">Rediger produkt</button>
        <button @click="sletProdukt(product.id)">Slet produkt</button>
      </div>
    </div>
    <modal v-if="openEditProduct" @click="closeEditProduct">
      <h2>Rediger Produkt</h2>
      <ProductForm :product="chosenProduct" @submit="updateProduct" />
    </modal>
    <modal v-if="openDeleProduct" @click="closeDeleteProduct">
      <h2>Rediger Produkt</h2>
      <ProdukForm :product="chosenProduct" @submit="updateProduct" />
    </modal>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { products } from "@/models/ProductsDatabase"

const filtrerProdukter = computed(() => {
  return products.map((product) => ({
    ...product,
  }))
})

const addToCart = (product) => {
  this.cart.push({ ...product })
}
</script>

<style>
.ProduktCard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.film-image img {
  width: 100%;
  height: auto;
}
.film-info {
  text-align: center;
}
</style>
