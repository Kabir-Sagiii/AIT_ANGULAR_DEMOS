class Products {
  pId;
  pName;
  pPrice;
  pCategory;

  constructor() {
    this.pId = 101;
    this.pName = "Macbook Pro";
    this.pPrice = 240000;
    this.pCategory = "Electronics";
  }

  display() {
    console.log(this.pId, this.pName, this.pPrice, this.pCategory);
  }

  changePrice(newPrice) {
    this.pPrice = newPrice;
    this.display();
  }
}

export default Products;
