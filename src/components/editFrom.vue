<template>
  <form>
    <div id="editTitle">
      <label></label>
      <input type="text" v-model="productData.titel" id="titel" />
    </div>
    <div id="editCategori">
      <label></label>
      <input type="text" v-model="productData.kategori" id="kategori" />
    </div>
    <div id="editPrice">
      <label></label>
      <input type="text" v-model="productData.pris" id="pris" />
    </div>
    <button type="submit" @click="handleSubmit">Tilføj ændringer</button>
  </form>
</template>

<script setup>
import { ref, watchEffect } from "vue"

const props = defineProps({
  produkt: {
    type: Object,
    default: () => ({ titel: "", kategori: "", pris: 0 }),
  },
})

const emit = defineEmits(["submit"])

const produktData = ref({ ...props.produkt })

watchEffect(() => {
  produktData.value = { ...props.produkt }
})

const handleSubmit = () => {
  emit("submit", produktData.value)
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
