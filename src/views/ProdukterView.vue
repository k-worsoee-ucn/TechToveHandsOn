<template>
  <div id="container">
    <button @click="åbenTilføjProdukt()">Tilføj produkt</button>
    <ProduktComponent />
    <Modal v-if="tilføjProduktÅben" @close="tilføjProduktClose()">
      <h2>Tilføj Produkt</h2>
      <ProductForm @submit="tilføjProdukt()" />
    </Modal>
  </div>
</template>

<script setup>
import ProduktComponent from "@/components/ProduktComponent.vue"
</script>
