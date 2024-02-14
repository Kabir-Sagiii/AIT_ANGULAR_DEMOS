// var users = ["Raj", 101, "Mumbai", "MH", "male", true];

// export default users;

//OOPs

export class Products {
  pId;
  pName;
  pPrice;

  constructor() {
    this.pId = 101;
    this.pName = "Macbook Pro";
    this.pPrice = 240000;
  }

  display() {
    console.log(this.pId, this.pName, this.pPrice);
  }

  changePrice(newPrice) {
    this.pPrice = newPrice;
    this.display();
  }
}

// export default Products;

// var firstProduct = new Products();

// firstProduct.display();
// firstProduct.changePrice(180000);
