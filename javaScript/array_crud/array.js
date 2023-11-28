// Create a primitive & reference array with all the CRUD operations. (Manipulations)

// 1.primitive type

let places = ["paris", "new york", "dubai"];

// create/add

// 1. push  (last )

// places.push("south korea");
// console.log(places);

// 2 .unshift (first)

// places.unshift("spain");
// console.log(places);

// 3. splice (in b/w)

// places.splice(2, 0, "bali");
// console.log(places);

//read

// 1. index

// console.log(places.indexOf("south korea"));

//  includes

// console.log(places.includes("bali"));

// for of loop

// for (let i of places){
//     console.log(i);
// };

// for each
// places.forEach(element => {
//   console.log(element);

// });

// update

let places2 = ["beiging", "tokyo"];

// 1.concat

// let tour = places.concat(places2);

// console.log(tour);

// 2. by using spred operator

// let tour = [...places, ...places2];
// console.log(tour);


// delete

// 1.pop

// places.pop();
// console.log(places);

// shift

// places.shift();
// console.log(places);

// splice

// console.log(places.splice(1, 2));
// console.log(places);

// emptying array
// places = [];
// console.log(places);

// console.log(places);

// 2. reference types

const users = [
  { id: 1, name: "navya", age: 17 },
  { id: 2, name: "ramesh", age: 30 },
  { id: 3, name: "kishore", age: 27 },
  { id: 4, name: "dhaya", age: 14 },
];

// create /add

// map method

// let usersMap = users.map(function (value) {
//   return { ...value, country: "india" };
// });

// console.log(usersMap);

// read

// filter method

// let usersFilter = users.filter((value) => {
//   return value.age <= 18;
// });

// console.log(usersFilter);

// sort method

// let sortUser = users.sort((a, b) => {
//   if (a.age < b.age) return -1;
//   else if (a.age > b.age) return 1;
//   else return 0;
// });

// console.log(sortUser);

// update

// const updatedUser = users.find(user => user.name === "dhaya");

// if (updatedUser) {
//   updatedUser.age = 8;
// }
// console.log(users);

// delete

// let deleteUser = users[1];

// users.splice(users.indexOf(deleteUser),1);

// console.log(users);
