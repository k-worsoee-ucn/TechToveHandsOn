import ProductsModel from "@/models/ProductsModel"

class ProductsController {
  constructor() {
    this.model = ProductsModel
  }
  addProduct(newProduct) {
    this.model.addProduct(newProduct)
  }

  updateProduct(updatedProduct) {
    this.model.updateProduct(updatedProduct)
  }

  deleteProduct(id) {
    this.model.deleteProduct(id)
  }

  getProducts() {
    return this.model.getProducts()
  }
}

export default new ProductsController()
