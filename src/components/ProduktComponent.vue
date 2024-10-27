<template>
  <button @click="openAddProductModal()" class="addProductButton">
    Tilføj produkt
  </button>
  <button @click="reset()" id="reset">Reset</button>
  <div class="ProductCard-container">
    <div v-for="product in products" :key="product.titel">
      <div class="product-card">
        <div class="product-image">
          <img :src="product.img" alt="Film Poster" />
        </div>
        <div class="product-info">
          <h2 class="product-title">{{ product.titel }}</h2>

          <p class="product-catagori">
            <b>Katagori:</b> {{ product.katagori }}
          </p>
          <p class="product-price"><b>Pris:</b> {{ product.pris }} kr</p>
          <button @click="addToCart()" class="addProductButton">
            Tilføj til kurv
          </button>

          <button @click="openEditProductModal(product)">
            Rediger produkt
          </button>
          <button
            @click="deleteProduct(product.id)"
            class="deleteProductButton"
          >
            Slet produkt
          </button>
        </div>
      </div>
    </div>

    <Modal :isOpen="isAddModalOpen" @close="closeAddProductModal">
      <h2>Tilføj nyt produkt</h2>
      <ProductForm mode="add" @submit="addProduct" />
    </Modal>

    <Modal :isOpen="isEditModalOpen" @close="closeEditProductModal">
      <h2>Redigér produkt</h2>
      <ProductForm
        :product="selectedProduct"
        mode="edit"
        @submit="updateProduct"
      />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Modal from "@/components/Modal.vue"
import ProductForm from "@/components/ProductForm.vue"
import ProductController from "@/controllers/ProductsController"
import { products as initialProducts } from "@/models/ProductsDatabase"

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

const reset = () => {
  localStorage.clear()

  // Genindsæt de oprindelige produkter fra ProductsDatabase i både localStorage og i state
  const resetProducts = initialProducts.map((product) => ({ ...product })) // Sikrer en kopi af objekterne
  localStorage.setItem("products", JSON.stringify(resetProducts))

  // Opdater komponentens state til at vise de oprindelige produkter
  products.value = [...resetProducts]
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
  width: 340px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-title {
  height: 50px;
}

.product-image img {
  width: 200px;
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

.addProductButton {
  margin: 5px;
  padding: 5px 10px;
  background-color: #0ab827;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.addProductButton:hover {
  background-color: #0c8f21;
}

.deleteProductButton {
  margin: 5px;
  padding: 5px 10px;
  background-color: #f31b1b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.deleteProductButton:hover {
  background-color: #bd1b1b;
}
</style>
