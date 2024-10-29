<template>
  <!-- Knap til at åbne modal for tilføjelse af produkt -->
  <button @click="openAddProductModal()" class="addProductButton">
    Tilføj produkt
  </button>

  <!-- Knap til at nulstille produkterne til standard -->
  <button @click="reset()" id="resetButton">Reset</button>

  <!-- Container til at vise produktkort -->
  <div class="ProductCard-container">
    <div v-for="product in products" :key="product.titel">
      <div class="product-card">
        <div class="product-image">
          <img :src="product.img" :alt="product.titel" />
        </div>
        <div class="product-info">
          <h2 class="product-title">{{ product.titel }}</h2>

          <p class="product-catagori">
            <b>Katagori:</b> {{ product.katagori }}
          </p>
          <p class="product-price"><b>Pris:</b> {{ product.pris }} kr</p>

          <!-- Knap til at tilføje produkt til kurv -->
          <button @click="addToCart()" class="addProductButton">
            Tilføj til kurv
          </button>

          <!-- Knap til at åbne modal for redigering af produkt -->
          <button @click="openEditProductModal(product)" class="editProductButton">
            Rediger produkt
          </button>

          <!-- Knap til at slette produkt -->
          <button @click="deleteProduct(product.id)" class="deleteProductButton">
            Slet produkt
          </button>
        </div>
      </div>
    </div>

    <!-- Modal til at tilføje nyt produkt -->
    <Modal :isOpen="isAddModalOpen" @close="closeAddProductModal">
      <h2>Tilføj nyt produkt</h2>
      <ProductForm mode="add" @submit="addProduct" />
    </Modal>

    <!-- Modal til at redigere eksisterende produkt -->
    <Modal :isOpen="isEditModalOpen" @close="closeEditProductModal">
      <h2>Redigér produkt</h2>
      <ProductForm :product="selectedProduct" mode="edit" @submit="updateProduct" />
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
  const products = ref(ProductController.getProducts()) // Henter produkter fra controller
  const isAddModalOpen = ref(false) // Tilstand for tilføjelsesmodal
  const isEditModalOpen = ref(false) // Tilstand for redigeringsmodal
  const selectedProduct = ref(null) // Gemmer det valgte produkt til redigering
  const modalMode = ref("") //Tilstand for modalMode

  // Åbner modal til at tilføje produkt
  const openAddProductModal = () => {
    modalMode.value = "add"
    isAddModalOpen.value = true
  }

  // Lukker modal til at tilføje produkt
  const closeAddProductModal = () => {
    isAddModalOpen.value = false
  }

  // Åbner modal til redigering af et produkt
  const openEditProductModal = (product) => {
    modalMode.value = "edit"
    selectedProduct.value = { ...product }
    isEditModalOpen.value = true
  }

  // Lukker modal til redigering af produkt
  const closeEditProductModal = () => {
    isEditModalOpen.value = false
  }

  // CRUD-funktioner med controller

  // Tilføjer produkt og opdaterer produktlisten
  const addProduct = (productData) => {
    ProductController.addProduct(productData)
    products.value = [...ProductController.getProducts()]
    closeAddProductModal()
  }

  // Opdaterer produkt og opdaterer produktlisten
  const updateProduct = (productData) => {
    ProductController.updateProduct({
      ...productData,
      id: selectedProduct.value.id,
    }) // Opdater produkt via controller
    products.value = [...ProductController.getProducts()]
    closeEditProductModal()
  }

  // Sletter produkt og opdaterer produktlisten
  const deleteProduct = (productId) => {
    ProductController.deleteProduct(productId)
    products.value = [...ProductController.getProducts()]
  }

  // Nulstiller produkterne til standard
  const reset = () => {
    ProductController.resetToDefault()
    products.value = [...ProductController.getProducts()]
  }
</script>

<style scoped>

</style>