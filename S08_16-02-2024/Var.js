var id = 101;

function f1() {
  var city = "Delhi";

  if (true) {
    var state = "MH";
    console.log(city);
  }

  if (true) {
    console.log(city);
    console.log(state);
  }
  console.log(state);
}
f1();
console.log(city, state);

function f2() {}
