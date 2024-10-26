import ProductsModel from "@/models/ProductsModel"

class ProductsController {
  constructor() {
    this.model = ProductsModel
  }
  addProduct(newProduct) {
    this.model.addProduct(newProduct)
  }

  updateProduct(updatedProduct) {
    const index = this.products.findIndex(
      (product) => product.id === updatedProduct.id
    )
    if (index !== -1) {
      console.log("Før update:", this.products[index])
      this.products[index] = updatedProduct
      console.log("Efter update:", this.products[index])
    }
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
