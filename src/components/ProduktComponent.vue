<template>
  <button @click="openAddProductModal()">Tilføj produkt</button>
  <div class="ProduktCard-container">
    <div v-for="product in products" :key="product.titel">
      <div class="product-image">
        <img :src="product.img" alt="Film Poster" />
      </div>
      <div class="product-info">
        <h2 class="product-title">{{ product.titel }}</h2>

        <p class="product-catagori">Katagori: {{ product.katagori }}</p>
        <p class="product-price">Pris: {{ product.pris }} kr</p>
        <button @click="addToCart()">Tilføj til kurv</button>
        <button @click="openEditProductModal(product)">Rediger produkt</button>
        <button @click="deleteProduct(product.id)">Slet produkt</button>
      </div>
    </div>
    <!-- Modal til tilføjelse af produkt -->
    <Modal :isOpen="isAddModalOpen" @close="closeAddProductModal">
      <h2>Tilføj Produkt</h2>
      <ProductForm @submit="addProduct" />
    </Modal>

    <!-- Modal til redigering af produkt -->
    <Modal :isOpen="isEditModalOpen" @close="closeEditProductModal">
      <h2>Rediger Produkt</h2>
      <ProductForm :produkt="selectedProdukt" @submit="updateProduct" />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/components/modal.vue"
import ProductForm from "@/components/ProductForm.vue"
import ProductController from "@/controllers/ProductsController"
import { products as productsDatabase } from "@/models/ProductsDatabase"

// State til produkter og modal-styring
const products = ref([...productsDatabase])
const isAddModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedProdukt = ref(null) //

// Modal-åbning/lukning
const openAddProductModal = () => {
  isAddModalOpen.value = true
}
const closeAddProductModal = () => {
  isAddModalOpen.value = false
}

const openEditProductModal = (product) => {
  selectedProdukt.value = { ...product }
  isEditModalOpen.value = true
}
const closeEditProductModal = () => {
  isEditModalOpen.value = false
}

// CRUD-funktioner med controller
const addProduct = (newProduct) => {
  ProductController.addProduct(newProduct)
  products.value = [...ProductController.getAllProducts()]
  console.log("Products after addition:", products.value)
  closeAddProductModal()
}

const updateProduct = (updatedProduct) => {
  ProductController.updateProduct(updatedProduct)
  products.value = [...ProductController.getAllProducts()]
  closeEditProductModal()
}

const deleteProduct = (id) => {
  console.log("Deleting product with id:", id)
  const numericId = Number(id)
  console.log("Type of id:", typeof numericId)
  console.log("Products before deletion:", products.value)

  ProductController.deleteProduct(numericId)

  products.value = ProductController.getAllProducts()
  console.log("Products after deletion:", products.value)
}
</script>

<style scoped>
.ProduktCard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.produkt-card {
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

button {
  margin-top: 5px;
  padding: 5px 10px;
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
