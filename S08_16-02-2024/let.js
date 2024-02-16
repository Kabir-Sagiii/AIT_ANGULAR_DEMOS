let city = "Mumbai";

function fnLet() {
  var id1 = 102;
  let id = 101;

  if (true) {
    var gender = "male";
    let price = 5000;
    console.log(id);
    console.log(id1);
    // console.log(price);
  }
  console.log(gender);
  //   console.log(price); //invalid

  if (gender === "male") {
    console.log(id);
    console.log(id1);
    console.log(price);
  }
  console.log(gender);
}

// console.log(gender) // invalid

fnLet();
