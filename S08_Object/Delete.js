var userInfo = {
  name: "Raj Verma",
  gender: "male",
  city: "Delhi",
};

delete userInfo.gender;
delete userInfo["city"];

console.log(userInfo);
