import ProductsModel from "@/models/ProductsModel"

class ProductsController {
  // Henter alle produkter
  getProducts() {
    return ProductsModel.getProducts()
  }

  // Tilføjer et nyt produkt
  addProduct(newProduct) {
    ProductsModel.addProduct(newProduct)
  }

  // Sletter et produkt
  deleteProduct(id) {
    ProductsModel.deleteProduct(id)
  }

  // Opdaterer et produkt
  updateProduct(updatedProduct) {
    ProductsModel.updateProduct(updatedProduct)
  }

  // Nulstiller produkter til standard
  resetToDefault() {
    ProductsModel.resetToDefault()
  }
}

// Eksporterer en ny instans af controlleren
export default new ProductsController()
