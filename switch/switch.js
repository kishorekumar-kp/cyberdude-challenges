
// switch case syntax

// switch (condition) {
//     case 1: console.log("case 1 is executed");
//     break;
//     case 2: console.log("case 2 is executed");
//     break;
//     case 3: console.log("case 3 is executed");
//     break;
//     default: console.log("default case executed");
// }

// examples

// const grade = "A";
// switch (grade) {
//   case "S":
//     console.log("excellent grade");
//     break;
//   case "A":
//     console.log("super grade");
//     break;
//   case "B":
//   case "C":
//     console.log("good grade");
//     break;
//   case "U":
//     console.log("fail grade");
//     break;

//   default:
//     console.log("unknown grade");
//     break;
// }

// example 2

const marks = 60;

switch (true) {
  case marks >= 90:
    console.log("good marks");
    break;
  case marks >= 45:
    console.log("pass marks");
    break;
  case marks < 45:
    console.log("fail marks");
    break;

  default:
    console.log("unknown marks");
    break;
}
