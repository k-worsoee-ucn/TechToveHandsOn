import {standardOrder, expressOrder} from "../models/orderTypes";

export function orderFactory(type, details) {
    switch (type) {
        case "standard":
            console.log("🐌🐌")
            return new standardOrder(details);
        case "express":
            console.log("🐎🐎")
            return new expressOrder(details);
        default:
            throw new Error("Ej altså, ugyldig orderetype");
    }
}