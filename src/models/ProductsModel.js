import { products } from "./ProductsDatabase"
class ProductsModel {
  constructor() {
    if (!ProductsModel.instance) {
      this.products = products
      ProductsModel.instance = this
    }
    return ProductsModel.instance
  }

  addProduct(product) {
    this.products.push(product)
  }

  deleteProduct(id) {
    console.log(`Trying to delete product with id: ${id} (Type: ${typeof id})`)
    console.log("Current products:", this.products)

    const index = this.products.findIndex((p) => p.id === id)

    if (index !== -1) {
      this.products.splice(index, 1)
      console.log(`Product with id ${id} deleted.`)
      return this.products
    } else {
      console.warn(`Product with id ${id} not found.`)
      return null
    }
  }

  updateProduct(updatedProduct) {
    this.products[index] = updatedProduct
  }

  getProducts() {
    return this.products
  }
}

const instance = new ProductsModel()
Object.freeze(instance)

export default instance
