import { orderFactory } from "./orderFactory";

export function useOrderProcessing() {
    // const orders = ref([]);

    function createOrder(type, details) {
        const order = orderFactory(type, details);
        console.dir(order);
        // orders.value.push(order);
        // order.process();
    }

    return {
        // orders,
        createOrder
    };
}

