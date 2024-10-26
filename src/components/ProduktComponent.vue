<template>
  <button @click="openAddProductModal()">Tilføj produkt</button>
  <div class="ProductCard-container">
    <div v-for="product in products" :key="product.titel">
      <div class="product-card">
        <div class="product-image">
          <img :src="product.img" alt="Film Poster" />
        </div>
        <div class="product-info">
          <h2 class="product-title">{{ product.titel }}</h2>

          <p class="product-catagori">Katagori: {{ product.katagori }}</p>
          <p class="product-price">Pris: {{ product.pris }} kr</p>
          <!--<button @click="addToCart()">Tilføj til kurv</button>-->
          <button @click="openEditProductModal(product)">
            Rediger produkt
          </button>
          <button @click="deleteProduct(product.id)">Slet produkt</button>
        </div>
      </div>
    </div>

    <Modal
      :isOpen="isAddModalOpen"
      :mode="modalMode"
      @close="closeAddProductModal"
    >
      <h2>Tilføj Produkt</h2>
      <ProductForm @submit="addProduct" />
    </Modal>

    <Modal
      :isOpen="isEditModalOpen"
      :mode="modalMode"
      @close="closeEditProductModal"
    >
      <h2>Rediger Produkt</h2>
      <ProductForm v-model:product="selectedProduct" @submit="updateProduct" />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/components/Modal.vue"
import ProductForm from "@/components/ProductForm.vue"
import ProductController from "@/controllers/ProductsController"

// State til produkter og modal-styring
const products = ref(ProductController.getProducts())
const isAddModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedProduct = ref(null)
const modalMode = ref("")

// Modal-åbning/lukning
const openAddProductModal = () => {
  modalMode.value = "add"
  console.log("Åbner modal for at tilføje produkt")
  isAddModalOpen.value = true
}
const closeAddProductModal = () => {
  isAddModalOpen.value = false
}

const openEditProductModal = (product) => {
  modalMode.value = "edit"
  console.log("Opening edit modal for:", product)
  selectedProduct.value = { ...product }
  isEditModalOpen.value = true
}
const closeEditProductModal = () => {
  isEditModalOpen.value = false
}

// CRUD-funktioner med controller

const addProduct = (productData) => {
  console.log("Tilføjer product:", productData)
  ProductController.addProduct(productData)
  products.value = [...ProductController.getProducts()]
  closeAddProductModal()
}

const updateProduct = (productData) => {
  console.log("Updater product:", productData)
  ProductController.updateProduct({
    ...productData,
    id: selectedProduct.value.id,
  })
  products.value = [...ProductController.getProducts()]
  closeEditProductModal()
}

const deleteProduct = (productId) => {
  ProductController.deleteProduct(productId)
  console.log("Products før sletning:", products.value)
  products.value = [...ProductController.getProducts()]
  console.log("Products efter sletning:", products.value)
}
</script>

<style scoped>
.ProductCard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  width: 250px;

  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  border: 2px solid;
}

.product-title {
  height: 50px;
}

button {
  margin: 5px;
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
