<template>
  <form @submit.prevent="handleSubmit">
    <div id="editTitle">
      <input type="text" v-model="productData.titel" id="titel" />
    </div>
    <div id="editCategori">
      <input type="text" v-model="productData.katagori" id="katagori" />
    </div>
    <div id="editPrice">
      <input type="number" v-model="productData.pris" id="pris" />
    </div>
    <button type="submit">
      {{ mode === "add" ? "Tilføj produkt" : "Gem ændringer" }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
  product: {
    type: Object,
    default: () => ({ titel: "", katagori: "", pris: 0, id: null }),
  },
})

const emit = defineEmits(["submit"])

const productData = ref({ ...props.product })

watch(
  () => props.product,
  (newVal) => {
    productData.value = { ...newVal }
  }
)

// Submit-funktion, der sender produktdata til ProductComponent
const handleSubmit = () => {
  console.log("Emitting product data:", productData.value)
  emit("submit", { ...productData.value })
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
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
