class ProductsModel {
  constructor() {
    if (!ProductsModel.instance) {
      this.products = []
      ProductsModel.instance = this
    }
    return ProductsModel.instance
  }

  addProduct(product) {
    this.products.push(product)
  }

  deleteProduct(id) {
    this.products = this.products.filter((p) => p.id !== id)
  }

  updateProducts(updatedProducts) {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id)
    if (index !== -1) {
      this.products[index] = updatedProduct
    }
  }

  getProducts() {
    return this.products
  }
}

const instance = new ProductsModel()
Object.freeze(instance)

export default instance
