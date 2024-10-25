import { products } from "./ProductsDatabase";
class ProductsModel {
  constructor() {
    if (!ProductsModel.instance) {
      this.products = products;
      ProductsModel.instance = this;
    }
    return ProductsModel.instance;
  }

  addProduct(product) {
    // Tildel unik ID baseret på længden af listen eller et andet unikt felt
    product.id = this.products.length
      ? Math.max(this.products.map((p) => p.id)) + 1
      : 1;
    this.products.push(product);
  }

  deleteProduct(id) {
    console.log(`Trying to delete product with id: ${id} (Type: ${typeof id})`);
    console.log("Current products:", this.products);

    const index = this.products.findIndex((p) => p.id === id);

    if (index !== -1) {
      // Brug splice til at fjerne elementet og oprette en ny instans af arrayet
      this.products = [
        ...this.products.slice(0, index),
        ...this.products.slice(index + 1),
      ];
      console.log(`Product with id ${id} deleted.`);
      return this.products;
    } else {
      console.warn(`Product with id ${id} not found.`);
      return null;
    }
  }
  updateProduct = (updateProduct) => {
    const index = this.products.findIndex((p) => p.id === updateProduct.id); // Brug updatedProduct.id
    if (index !== -1) {
      // Opdater produktet på det fundne indeks
      this.products[index] = updateProduct; // Opdater direkte
      console.log(`Product with id ${updateProduct.id} updated.`);
    } else {
      console.warn(`Product with id ${updateProduct.id} not found.`);
    }
  };

  getProducts() {
    return [...this.products];
  }
}

const instance = new ProductsModel();

export default instance;
