import { products } from "./ProductsDatabase"
class ProductsModel {
  constructor() {
    if (!ProductsModel.instance) {
      const storedProducts = localStorage.getItem("products")
      this.products = storedProducts ? JSON.parse(storedProducts) : products

      // Hvis der ikke er produkter i `localStorage`, gem dem der
      if (!storedProducts) {
        localStorage.setItem("products", JSON.stringify(this.products))
      }
      //this.products = products
      ProductsModel.instance = this
    }
    return ProductsModel.instance
  }

  addProduct(product) {
    product.id = this.products.length
      ? Math.max(...this.products.map((p) => p.id)) + 1
      : 1

    if (product.img instanceof File) {
      product.img = URL.createObjectURL(product.img) // Gem URL i stedet for `File`
    }
    this.products.push(product)

    console.log("Tilføjet produkt:", product)
  }

  deleteProduct(id) {
    console.log(`Sletter produkt med id: ${id}`)

    // Find produktets index og slet
    const index = this.products.findIndex((p) => p.id === id)

    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ]

    // Opdater localStorage efter sletningen
    localStorage.setItem("products", JSON.stringify(this.products))
  }
  updateProduct = (updateProduct) => {
    const index = this.products.findIndex((p) => p.id === updateProduct.id)

    if (updateProduct.img instanceof File) {
      updateProduct.img = URL.createObjectURL(updateProduct.img)
    }
    this.products[index] = updateProduct
    localStorage.setItem("products", JSON.stringify(this.products))
  }

  getProducts() {
    return [...this.products]
  }
}

const instance = new ProductsModel()

export default instance
