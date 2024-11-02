export class standardOrder {
    constructor(details) {
        this.type = "standard";
        this.details = details;
    }

    process() {
        console.log("hej standard");
    }
}

export class expressOrder {
    constructor(details) {
        this.type = "express";
        this.details = details;
    }

    process() {
        console.log("hej express");
    }
}


