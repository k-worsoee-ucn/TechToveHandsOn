<template>
  <form @submit.prevent="handleSubmit">
    <label>Upload produktbillede:</label>
    <div id="editImg">
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        @change="handleFileChange"
      />
    </div>
    <div id="editTitle">
      <label>Titel:</label>
      <input type="text" v-model="productData.titel" id="titel" />
    </div>
    <div id="editCategori">
      <label>Katagori:</label>
      <input type="text" v-model="productData.katagori" id="katagori" />
    </div>
    <div id="editPrice">
      <label>Pris: </label>
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
    default: () => ({ titel: "", katagori: "", pris: 0, img: "" }),
  },
  mode: String,
})

const emit = defineEmits(["submit"])

const productData = ref({ ...props.product })

const imgPreview = ref(null)

watch(
  () => props.product,
  (newVal) => {
    productData.value = { ...newVal }
  }
)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    productData.value.img = file
    imgPreview.value = URL.createObjectURL(file) // Opret URL til billed-preview
  }
}

const handleSubmit = () => {
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
