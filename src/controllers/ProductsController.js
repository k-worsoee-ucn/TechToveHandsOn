import ProductsModel from "@/models/ProductsModel"

class ProductsController {
  constructor() {
    this.model = ProductsModel
  }

  addProduct(product) {
    this.model.addProduct(product)
  }
  deleteProduct(id) {
    console.log(`Controller: Deleting product with id: ${id}`)
    this.model.deleteProduct(id) // Slet produkt
  }

  updateProduct(product) {
    this.model.updateProduct(product)
  }

  getAllProducts() {
    return this.model.getProducts()
  }
}

export default new ProductsController()
