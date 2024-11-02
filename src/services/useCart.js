import { ref, watch, computed } from 'vue';

const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

export default function useCart() {

  // Watch for changes in cart and save to localStorage
  watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, { deep: true });

  const addToCart = (product) => {
    // Check if product already exists in the cart
    const existingProduct = cart.value.find(item => item.id === product.id);
    if (existingProduct) {
      // If it exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // Otherwise, add the product with quantity 1
      cart.value.push({...product, quantity: 1,});
    }

    console.log(cart.value)
  };

    const removeFromCart = (productId) => {
      console.log("BEGONE")
      const existingProduct = cart.value.find(item => item.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          
          existingProduct.quantity -= 1;

        } else {
          cart.value = cart.value.filter(item => item.id !== productId);
        }
      }
  };

  // Calculate total price function based on cart contents
  const calculatedTotalPrice = computed(() => {
    const total = cart.value.reduce((total, item) => total + item.pris * item.quantity, 0);
    return total.toFixed(2)
  });

  return {
      cart,
      addToCart,
      removeFromCart,
      calculatedTotalPrice,
  };
};