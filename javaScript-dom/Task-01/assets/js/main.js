const formEl = document.forms.jobApplication;
const submitBtn = document.querySelector("#submit");
const outputEl = document.querySelector("#output");
const rightBtnEl = document.querySelector(".greenBtn");
const wrongBtnEl = document.querySelector(".redBtn");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const jsonData = Object.fromEntries(formData);
  console.log(jsonData);

  for (const key in jsonData) {
    const element = document.getElementById("span" + key);
    if (element) {
      element.innerText = jsonData[key];
    }
  }

  outputEl.className =
    " w-10/12  bg-gray-700 p-10 my-10 mx-32 text-white  bottom-1 ";
  formEl.className = "hidden";

  console.log("form submitted");
});

wrongBtnEl.addEventListener("click", (event) => {
  outputEl.className = "hidden";
  formEl.className = "mt-7 mx-10 p-5 text-lg";
});

rightBtnEl.addEventListener("click", (event) => {
  outputEl.className = "hidden";
  formEl.className = "mt-7 mx-10 p-5 text-lg";
  formEl.reset();
  alert("You have successfully applied a job");
});









// old try

// const formEl = document.forms.jobApplication;
// let divEl = document.getElementById("division");
// let nameEl = document.getElementById("spanName");
// let emailEl = document.getElementById("spanEmail");
// let mobileEl = document.getElementById("spanMobile");
// let genderEl = document.getElementById("spanGender");
// let dateEl = document.getElementById("spanDate");
// let jobEl = document.getElementById("spanJob");
// let addressEl = document.getElementById("spanAddress");
// let coverEl = document.getElementById("spanCover");

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const formData = new FormData(formEl);

//   // Convert formdata to object
//   const jsonData = Object.fromEntries(formData);
//   console.log(jsonData);

//   nameEl.innerText = jsonData.firstName + " " + jsonData.lastName;
//   emailEl.innerText = jsonData.email;
//   mobileEl.innerText = jsonData.mobileNo;
//   genderEl.innerText = jsonData.gender;
//   dateEl.innerText = jsonData.date;
//   jobEl.innerText = jsonData.job;
//   addressEl.innerText = jsonData.address1 + " " + jsonData.address2;
//   coverEl.innerText = jsonData.coverLetter;

//   // let value = [];
//   // value.push(jsonData[key]);
//   // console.log(value);
//   // for (const key in jsonData) {
//   //   console.log(`${key.length}, ${jsonData[key]}`);

//   // }

//   // jsonData.name;

//   console.log("form submitted");
// };

// formEl.addEventListener("submit", handleSubmit);
