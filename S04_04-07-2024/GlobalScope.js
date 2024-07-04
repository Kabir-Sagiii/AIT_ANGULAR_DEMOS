var city; // Global

if (true) {
  var username; // It is not in a global scope
}

function f1() {
  // Global
  function f2() {
    // f2 is not in the Global Scope
  }
}
