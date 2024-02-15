var product = {
  brand: "Apple",
  model: "Iphone 15 Pro Max",
  price: 160000,
  rating: 4.6,
};

// In the Terminal Print all the keys of Properties
// for (var keyName in product) {
//   console.log(keyName);
// }

//In the Terminal Print all the Values of Properties
for (var keyName in product) {
  console.log(product[keyName]); // keyName is a variable, in that variable we have some value
  // we want JS engine should search value inside this variable
}

// console.log(product);
