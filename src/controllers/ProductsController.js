import ProductsModel from "@/models/ProductsModel"

class ProductsController {
  constructor() {
    this.model = ProductsModel
  }

  addProduct(product) {
    this.model.addProduct(product)
  }
  deleteProduct(id) {
    this.model.deleteProduct(id)
  }

  updateProducts(product) {
    this.model.updateProducts(product)
  }

  getProducts() {
    return this.model.getProducts()
  }
}

export default new ProductsController()
