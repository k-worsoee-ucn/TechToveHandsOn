<template>
  <!-- Container til at vise produktkort -->
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

          <!-- Knap til at tilføje produkt til kurv -->
          <button @click="addToCart(product.id)" class="addProductButton" :productid="product.id">
            Tilføj til kurv
          </button>


          <!-- Knap til at åbne modal for redigering af produkt -->
          <button @click="openEditProductModal(product)">
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
import Modal from "@/components/modal.vue"
import ProductForm from "@/components/ProductForm.vue"
import ProductController from "@/controllers/ProductsController"
import { products as initialProducts } from "@/models/ProductsDatabase"

const filtrerProdukter = computed(() => {
  return produkter.map((produkt) => ({
    ...produkt,
  }))
})

// Initialize the cart as a reactive reference
const cart = ref([]);

// Function to check the cart on load
function checkCart() {
  const storedCart = localStorage.getItem("cartContents");
  
  // Check if storedCart is not null
  if (storedCart) {
    try {
      cart.value = JSON.parse(storedCart);
    } catch (e) {
      console.error("Error parsing cart contents from localStorage:", e);
      cart.value = []; // Reset cart to an empty array if parsing fails
    }
  }
}
checkCart();

// Function to add a product to the cart
const addToCart = (productId) => {
  console.log("Product ID:", productId);

  // Check if product already exists in the cart
  if (!cart.value.includes(productId)) {
    console.log("Product not in cart yet");
    cart.value.push(productId);

    // Save to local storage as a JSON string
    try {
      localStorage.setItem("cartContents", JSON.stringify(cart.value));
    } catch (e) {
      console.error("Error saving cart contents to localStorage:", e);
    }
  } else {
    console.log("Product already in cart");
  }
};

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
