var arr = [ { name: 0}, { name : 1 } , {name : 2 } ];
var myObj = arr[1];

arr.splice(arr.indexOf(myObj),1);

console.log(arr);


// console.log(dataTypes(array));
// Output
// { function: 1, object: 4, number: 3, undefined: 1 }

// Check if obj contains the type or not
//  if (obj[typeof values]) {

// Increase the type with one
// obj[typeof val]++;
// } else {

// Initialize a key (type) into obj
// obj[typeof values] = 1;
// }
