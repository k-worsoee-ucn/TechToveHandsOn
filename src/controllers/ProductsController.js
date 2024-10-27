import ProductsModel from "@/models/ProductsModel"

class ProductsController {
  constructor() {
    this.model = ProductsModel
  }
  addProduct(newProduct) {
    this.model.addProduct(newProduct)
  }

  updateProduct(updatedProduct) {
    // Opdater produktet i modellen direkte
    this.model.updateProduct(updatedProduct)
  }

  deleteProduct(id) {
    console.log(`Controller: sletter produkt med id: ${id}`)
    this.model.deleteProduct(id)
  }

  getProducts() {
    return this.model.getProducts()
  }
}

export default new ProductsController()
