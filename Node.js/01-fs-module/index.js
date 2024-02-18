const fs = require("fs");
const tripSpot = require("./data/details.json");

fs.mkdir("Districts", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("folder created sucessfully");
  });

tripSpot.map((tripDistrict) => {
  fs.mkdir(`Districts/${tripDistrict.district}`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("inside a folder created sucessfully");
  });

  tripDistrict.spots.map((spot) => {
    fs.writeFile(
      `Districts/${tripDistrict.district}/${spot.area}.json`,
      `[{"SpotPlace ": "${spot.area}"},{"descriptions ":"${spot.desc}"}]`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("file created sucessfully");
      });
  });
});

// fs.writeFile("firstfile.txt", "hai hello this is kishore nodejs", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("file created sucessfully");
// });
