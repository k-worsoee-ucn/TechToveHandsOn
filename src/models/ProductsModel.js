import { products as defaultProducts } from "./ProductsDatabase"

class ProductsModel {
  constructor() {
    // Singleton-mønster for at sikre én instans af ProductsModel
    if (!ProductsModel.instance) {
      const storedProducts = localStorage.getItem("products")
      this.products = storedProducts
        ? JSON.parse(storedProducts)
        : defaultProducts

      ProductsModel.instance = this
    }
    return ProductsModel.instance
  }
  // Gemmer produkter til localStorage
  saveToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(this.products))
  }

  // Tilføjer et nyt produkt
  addProduct(product) {
    product.id = this.products.length
      ? Math.max(...this.products.map((p) => p.id)) + 1
      : 1
    // Omdanner billedfil til URL for preview
    if (product.img instanceof File) {
      product.img = URL.createObjectURL(product.img)
    }
    this.products.push(product)
    this.saveToLocalStorage()
    console.log("Tilføjet produkt:", product)
  }
  //Slet et produkt
  deleteProduct(id) {
    console.log(`Sletter produkt med id: ${id}`)

    const index = this.products.findIndex((p) => p.id === id)
    if (index !== -1) {
      this.products.splice(index, 1)
      this.saveToLocalStorage()
    }
  }
  //Opdater eksisterende produkt
  updateProduct = (updateProduct) => {
    const index = this.products.findIndex((p) => p.id === updateProduct.id)

    if (updateProduct.img instanceof File) {
      updateProduct.img = URL.createObjectURL(updateProduct.img)
    }
    this.products[index] = updateProduct
    this.saveToLocalStorage()
  }
  // Returnerer en kopi af produktlisten
  getProducts() {
    return [...this.products]
  }
  // Nulstiller produkterne til standard
  resetToDefault() {
    localStorage.removeItem("products") // Fjern de gemte produkter fra localstorage
    this.products = [...defaultProducts] // Gendan standardprodukterne
    this.saveToLocalStorage() // Gem standardprodukterne i localStorage
  }
}

const instance = new ProductsModel()

export default instance
