class Product {
    constructor(n, d, p, r) {
        this.name = n;
        this.description = d;
        this.price = p;
        this.rating = r;
    }

    buy() {

    }

    display() {
        console.log(this);
    }
}

let iphone = new Product("iphone", "brand new iphone", 100000, 4.5);
console.log(iphone);
iphone.display();
// write a show class
