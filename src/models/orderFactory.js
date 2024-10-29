import {standardOrder, expressOrder} from "./orderTypes";

export function orderFactory(type, details) {
    switch (type) {
        case "standard":
            return new standardOrder(details);
        case "ekspres":
            return new expressOrder(details);
        default:
            throw new Error("Ej altså, ugyldig orderetype");
    }
}