<template>
  <div class="ProduktCard-container">
    <div v-for="produkt in filtrerProdukter" :key="produkt.titel">
      <div class="film-image">
        <img :src="produkt.img" alt="Film Poster" />
      </div>
      <div class="film-info">
        <h2 class="film-titel">{{ produkt.titel }}</h2>

        <p class="film-beskrivelse">Katagori:{{ produkt.katagori }}</p>
        <p class="film-pris">Pris: {{ produkt.pris }} kr</p>
        <button @click="tilfojTilKurv">Tilføj til kurv</button>
        <button @click="redigerProdukt(produkt)">Rediger produkt</button>
        <button @click="sletProdukt(produkt.id)">Slet produkt</button>
      </div>
    </div>
    <modal v-if="åbenRedigerProdukt" @click="lukRedigerProdukt">
      <h2>Rediger Produkt</h2>
      <ProdukForm :produkt="valgtProdukt" @submit="opdaterProdukt" />
    </modal>
    <modal v-if="åbenSletProdukt" @click="lukSletProdukt">
      <h2>Rediger Produkt</h2>
      <ProdukForm :produkt="valgtProdukt" @submit="opdaterProdukt" />
    </modal>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { produkter } from "../Models/ProdukterDatabase"

const filtrerProdukter = computed(() => {
  return produkter.map((produkt) => ({
    ...produkt,
  }))
})

const tilfojTilKurv = (produkt) => {
  this.kurv.push({ ...produkt })
}
</script>
