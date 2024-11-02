import { ref, watch, computed } from 'vue';


export default function useCart() {
  
  const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

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
    console.log(cart.value);
  };

  // Calculate total price function based on cart contents
  const calculateTotalPrice = computed(() => {
    const total = cart.value.reduce((total, item) => total + item.pris * item.quantity, 0);
    return total.toFixed(2)
  });

   const totalCartItems = computed(() => {
     return cart.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  return {
      cart,
      addToCart,
      calculateTotalPrice,
      totalCartItems,
  };
};