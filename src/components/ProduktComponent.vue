<template>
  <!-- Knap til at åbne modal for tilføjelse af produkt -->
  <button @click="openAddProductModal" class="addProductButton">
    Tilføj produkt
  </button>

  <!-- Knap til at nulstille produkterne til standard -->
  <button @click="reset" id="resetButton">Reset</button>

  <!-- Container til at vise produktkort -->
  <div class="ProductCard-container">
    <div v-for="product in productList" :key="product.titel">
      <div class="product-card">
        <div class="product-image">
          <img :src="product.img" :alt="product.titel" />
        </div>
        <div class="product-info">
          <h2 class="product-title">{{ product.titel }}</h2>

          <p class="product-katagori">
            <b>Katagori:</b> {{ product.katagori }}
          </p>
          <p class="product-price"><b>Pris:</b> {{ product.pris }} kr</p>

          <!-- Knap til at tilføje produkt til kurv -->
          <button @click="addToCart(product)" class="addProductButton">
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
  import { ref } from "vue";
  import Modal from "@/components/Modal.vue";
  import ProductForm from "@/components/ProductForm.vue";
  import products from "../models/ProductsDatabase"

  // Eksempel på initiale produkter
  const initialProducts = products

  const productList = ref([...initialProducts]); // Lokalt produktstate
  const isAddModalOpen = ref(false); // Tilstand for tilføjelsesmodal
  const isEditModalOpen = ref(false); // Tilstand for redigeringsmodal
  const selectedProduct = ref(null); // Gemmer det valgte produkt til redigering

  // Åbner modal til at tilføje produkt
  const openAddProductModal = () => {
    selectedProduct.value = null; // Nulstil valgt produkt
    isAddModalOpen.value = true;
  };

  // Lukker modal til at tilføje produkt
  const closeAddProductModal = () => {
    isAddModalOpen.value = false;
  };

  // Åbner modal til redigering af et produkt
  const openEditProductModal = (product) => {
    selectedProduct.value = { ...product }; // Klon produkt til redigering
    isEditModalOpen.value = true;
  };

  // Lukker modal til redigering af produkt
  const closeEditProductModal = () => {
    isEditModalOpen.value = false;
  };

  // Tilføjer produkt til listen
  const addProduct = (productData) => {
    const newProduct = {
      id: productList.value.length + 1, // Simple ID-generering
      ...productData,
    };
    productList.value.push(newProduct);
    closeAddProductModal();
  };

  // Opdaterer produkt i listen
  const updateProduct = (productData) => {
    const index = productList.value.findIndex((p) => p.id === selectedProduct.value.id);
    if (index !== -1) {
      productList.value[index] = { ...productData, id: selectedProduct.value.id };
    }
    closeEditProductModal();
  };

  // Sletter produkt fra listen
  const deleteProduct = (productId) => {
    productList.value = productList.value.filter((product) => product.id !== productId);
  };

  // Nulstiller produkterne til standard
  const reset = () => {
    productList.value = [...initialProducts]; // Sætter produkterne tilbage til initiale produkter
  };
</script>

<style scoped>

</style>