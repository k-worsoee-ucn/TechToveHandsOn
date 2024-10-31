import { ref, computed, watch } from 'vue';

const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

  // Watch for changes in cart and save to localStorage
  watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, { deep: true });

const useCart = () => {

    const addToCart = (product) => {
        
        // Check if product already exists in the cart
        if (!cart.value.includes(product)) {
            cart.value.push(product);
        } 
    }



    return {
        cart,
        addToCart,
    };
};

export default useCart;