import { ref, computed, watch } from 'vue';

const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

  // Watch for changes in cart and save to localStorage
  watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, { deep: true });

const useCart = () => {

    const addToCart = (productId) => {
        console.log("Product ID:", productId);

        // Check if product already exists in the cart
        if (!cart.value.includes(productId)) {
            console.log("Product not in cart yet");
            cart.value.push(productId);
            // Save to local storage as a JSON string
            try {
                console.log("Saving Cart to localStorage:", cart.value);
                localStorage.setItem("cartContents", JSON.stringify(cart.value));
            } catch (e) {
                console.error("Error saving cart contents to localStorage:", e);
            }
        } else {
            console.log("Product already in cart");
        }
    }



    return {
        cart,
        addToCart,
    };
};

export default useCart;