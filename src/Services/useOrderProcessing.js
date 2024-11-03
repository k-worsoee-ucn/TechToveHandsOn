import { ref } from "vue";
import { orderFactory } from "./orderFactory";

const transactionDetails = ref([]);

export function useOrderProcessing() {

    async function createOrder(type, details) {
        const order = orderFactory(type, details);
        transactionDetails.value.push(order);
        order.process();

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(order); // Resolve with the order details after processing
            }, 2000); // Simulate 3 seconds of transaction time
        });
    }

    return {
        transactionDetails,
        createOrder
    };
}

