# js object with crud operations
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2: Create a object about ur self with all datatype values. And try to manipulate it.


js
// Paste your code here

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

// console.log("firstname:",mine.firstName);
// console.log("age:",mine["age"]);
// console.log("isalive:",mine.isAlive);

// update
// mine.address.city = "chennai";
// mine.address.country = "india";

// console.log(mine.address);

//delete
// delete mine.address.city;

// console.log(mine.address);

// emptying object by using  for in loop
//   for(let i  mine){
//     delete mine[i];
//   }
// console.log(mine);

// value reassing for emptying an Object
// mine = {};
// console.log(mine);

// console.log(mine);

// mine.greet();




## Acknowledgement:
 - Any person who have helped you achieve this challenge. Mention them here. For example, look below.

