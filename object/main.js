let mine = {
  firstName: "kishore",
  lastName: "kumar",
  age: 25,
  isAlive: true,
  hobbies: ["wakeup", "eat", "sleep"],
  address: {
    city: "tokyo",
    country: "japan",
  },
  greet: function () {
    let msg = `Hai this is ${this.firstName} ${this.lastName} and am ${this.age} years old , currently live in ${this.address.city},${mine.address.country}. and my hobbies are ${this.hobbies}`;
    console.log(msg);
  },
};

//create/add

// mine.hobbies.splice(1, 0, "refresh");
// console.log(mine.hobbies);

// mine.address.pincode = 25000;
// console.log(mine.address);

//read

// console.log(mine.firstName);
console.log(mine["age"]);
// console.log(mine.isAlive);

// update
// mine.address.city = "chennai";
// mine.address.country = "india";

// console.log(mine.address);

//delete
// delete mine.address.city;

// console.log(mine.address);

// emptying object by using  for in loop
//   for(let i in mine){
//     delete mine[i];
//   }
// console.log(mine);

// value reassing for emptying an Object
// mine = {};
// console.log(mine);

// console.log(mine);

// mine.greet();
