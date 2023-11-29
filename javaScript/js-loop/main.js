const players = [
  { name: "Virat", favNum: 18, favColour: "red" },
  { name: "Rohith", favNum: 45, favColour: "blue" },
  { name: "Dhoni", favNum: 7, favColour: "yellow" },
];

// for loop

// for (let i = 0; i < players.length; i++) {
//   console.log(
//     players[i].name +
//       " is good boy, he loves number " +
//       players[i].favNum +
//       " and his favourite colour is " +
//       players[i].favColour
//   );
// }

// for in

// for (let i in players) {
//   let sort = players[i].name;
//   console.log(sort);
// }

// for of

for (let i of players) {
  console.log(i.name + " your favourite colour is " + i.favColour);
}
