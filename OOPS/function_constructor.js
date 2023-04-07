function Product(n, d, r, p) {
    this.name = n;
    this.price = p;
    this.rating = r;
    this.description = d;
  }
  let iphone = new Product("iphone", "iphone 14 pro", 4.5, 100000);
  console.log(iphone);
  