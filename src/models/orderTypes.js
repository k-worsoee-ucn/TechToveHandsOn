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
        this.type = "ekspres";
        this.details = details;
    }

    process() {
        console.log("hej ekspres");
    }
}


