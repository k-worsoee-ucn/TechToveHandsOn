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
    product.id = this.products.length
      ? Math.max(this.products.map((p) => p.id)) + 1
      : 1
    this.products.push(product)
    console.log("Tilføjet produkt:", product)
  }

  deleteProduct(id) {
    console.log(`Slettet produkt med id: ${id} (Type: ${typeof id})`)
    console.log("Nuværende produkter:", this.products)

    const index = this.products.findIndex((p) => p.id === id)

    // Bruger splice til at fjerne elementet og oprette en ny version af arrayet
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ]
    console.log(`produkt med id ${id} slettet.`)
    return this.products
  }
  updateProduct = (updateProduct) => {
    const index = this.products.findIndex((p) => p.id === updateProduct.id)

    this.products[index] = updateProduct
    console.log(`Produkt med id: ${updateProduct.id} slettet.`)
  }

  getProducts() {
    return [...this.products]
  }
}

const instance = new ProductsModel()

export default instance
