<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-content">
      <button class="close-button" @click="close">X</button>

      <h2>{{ mode === "add" ? "Tilføj nyt produkt" : "Rediger produkt" }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="titel">Titel:</label>
          <input v-model="productData.titel" type="text" id="titel" required />
        </div>
        <div class="form-group">
          <label for="kategori">Kategori:</label>
          <input
            v-model="productData.kategori"
            type="text"
            id="kategori"
            required
          />
        </div>
        <div class="form-group">
          <label for="pris">Pris:</label>
          <input v-model="productData.pris" type="number" id="pris" required />
        </div>
        <button type="submit">
          {{ mode === "add" ? "Tilføj produkt" : "Gem ændringer" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue"

const props = defineProps({
  isOpen: Boolean,
  mode: String,
  product: {
    type: Object,
    default: () => ({ titel: "", kategori: "", pris: 0, id: null }),
  },
})

const emit = defineEmits(["close", "submit"])

const productData = ref({ ...props.product })

// Synkronisering af produktData ved ændring i prop `produkt`
watchEffect(() => {
  productData.value = { ...props.product }
})

const close = () => {
  emit("close")
}
const submitForm = () => {
  console.log("Submit event emitted:", productData.value)
  console.log("Submit event emitted - Produkt ID:", productData.value.id)
  emit("submit", productData.value)
  close()
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.form-group {
  margin-bottom: 10px;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
