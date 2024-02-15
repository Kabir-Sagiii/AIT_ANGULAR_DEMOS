var product = {
  brand: "Apple",
  model: "Iphone 15 Pro Max",
  price: 160000,
  rating: 4.6,
  inStock: true,
};

console.log(product);
console.log("------------------------------------------------");
//Inserting
product["id"] = 101;
// console.log(product);

//Update
product["inStock"] = false;
// console.log(product);

//Read or Access
// console.log(product["model"]);

//Delete
delete product["rating"];
console.log(product);
