// var users = {};

// console.log(users);

var user = {
  uname: "Raj Verma",
  city: "Delhi",
  id: 101,
  gender: "male",
  phone: 9898987878,
  isMarried: false,
};

console.log(user);

//Inserting New Property
//<ObjectName>.<keyName> = <Value>
user.email = "Raj@gmail.com";
// console.log(user);

//Update exisiting Property
//<ObjectName>.<Existing Property Key Name> = <New Value>
user.city = "Hyderabad";
console.log(user);

//Access the value of Specific Property
//<ObjectName>.<Property Key Name>
console.log(user.uname);

//Delete or Remove
// delete <objectName>.<Property Key Name>
delete user.id;
delete user.gender;
console.log(user);
