var city = "Delhi"; //global scope

let state = "MH"; //global scope

function f1() {
  // module scope

  var id = 101; // function scope

  if (true) {
  }

  function inner() {
    // function scope
    console.log("inner function");
  }
}

console.log(id);
inner();
