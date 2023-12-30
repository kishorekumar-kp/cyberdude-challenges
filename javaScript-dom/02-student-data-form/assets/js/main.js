import JustValidate from "just-validate";
import { v4 as uuidv4 } from "uuid";


const formEl = document.getElementById("studentForm");

const tableBodyEl = document.querySelector("table > tbody");

const listSection = document.querySelector("#listSection");

const viewBtnDivEl = document.getElementById("viewBtnDiv");

const formSectionEl = document.getElementById("formSection");

const liEl2 = document.querySelector("#viewExistingdata");

const homeEl = document.querySelector("#home");



const studentValidate = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

studentValidate.addField(
  "#name",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

studentValidate.addField(
  "#number",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

studentValidate.addField(
  "#date",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

studentValidate.addField(
  "#email",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

studentValidate.addField(
  "#gender",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

studentValidate.addField(
  "#department",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["error"],
  }
);

studentValidate.onSuccess((event) => {
  const formData = new FormData(formEl);
  formData.append("id", uuidv4());

  const formDataObj = Object.fromEntries(formData);

  const existingStudentData = localStorage.getItem("studentData");

  const studentAllData = [];
  if (existingStudentData) {
    const studentArray = JSON.parse(existingStudentData);
    studentArray.push(formDataObj);
    localStorage.setItem("studentData", JSON.stringify(studentArray));
    formEl.reset();
  } else {
    studentAllData.push(formDataObj);
    localStorage.setItem("studentData", JSON.stringify(studentAllData));
    formEl.reset();
  }
  getAllStudentData();
  
});



function getAllStudentData() {
  const allStudentData = localStorage.getItem("studentData");

  const getAllStudenDataArr = JSON.parse(allStudentData);

  console.log(getAllStudenDataArr);

  console.log(listSection);

  if (getAllStudenDataArr && getAllStudenDataArr.length > 0) {
    listSection.classList.remove("hidden");
    formSectionEl.classList.add("hidden");

    tableBodyEl.innerHTML = "";

    const studentFinalData = [];

    getAllStudenDataArr.map((allStudentData) => {
      const trEl = document.createElement("tr");
      const tdNameEl = document.createElement("td");
      const tdNoEl = document.createElement("td");
      const tdInfoEl = document.createElement("td");
      const tdIconEl = document.createElement("td");
      const BtnEl = document.createElement("button");
      const divEl = document.createElement("div");

      trEl.classList.add("tr-class");

      tdNameEl.classList.add("td-class");
      tdNameEl.innerText = allStudentData.name;

      tdNoEl.classList.add("td-class");
      tdNoEl.innerText = allStudentData.number;

      tdInfoEl.classList.add("td-class");
      tdInfoEl.append(BtnEl);

      BtnEl.classList.add("td-class-btn");
      BtnEl.innerText = "Click Here...";

      tdIconEl.classList.add("td4-class");
      tdIconEl.append(divEl);

      // viewmore fun
      BtnEl.addEventListener("click", (e) => {
        viewMoreData(allStudentData);
        showcaseStudentData();
      });

      // Create a new SVG element
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "32");
      svg.setAttribute("height", "32");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("class", "fill-current text-red-500 ");
      svg.classList.add("hover:bg-white");

      // Create a new path element
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("fill", "currentColor");
      path.setAttribute(
        "d",
        "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
      );

      // Append the path element to the SVG element
      svg.appendChild(path);

      svg.addEventListener("click", (e) => {
        deleteStudentData(allStudentData);
      });

      // Append the SVG element to the HTML element with div
      divEl.classList.add("flex", "space-x-10");
      divEl.appendChild(svg);

      trEl.append(tdNameEl, tdNoEl, tdInfoEl, tdIconEl);
      console.log(trEl);

      studentFinalData.push(trEl);
      studentFinalData.forEach((element) => tableBodyEl.append(element));
    });

    console.log(studentFinalData);
  } else {
    listSection.classList.add("hidden");
  }
}

// list all student existing data when click in navbar -> ("View Student Data")
liEl2 .addEventListener("click",()=>{
  getAllStudentData();
  viewBtnDivEl.classList.add("hidden");
});

// home click navigate to form page
homeEl.addEventListener("click",()=>{
  formSectionEl.classList.remove("hidden");
  listSection.classList.add("hidden");
  viewBtnDivEl.classList.add("hidden");

})

// delete functionality
function deleteStudentData(dataReq) {
  const confirmation = confirm(
    `Do you want to delete '${dataReq["name"]}' record?`
  );

  if (confirmation) {
    const allStudentData = localStorage.getItem("studentData");

    const studentDataObj = JSON.parse(allStudentData);

    const studentRecords = studentDataObj.filter(
      (courierReq) => courierReq.id != dataReq["id"]
    );

    // Push it to localstorage again, this time, i'm deleting that record (courierRequestId)
    localStorage.setItem("studentData", JSON.stringify(studentRecords));

    getAllStudentData();
  }
}

// view functionality

function viewMoreData(dataview) {
  const allStudentData = localStorage.getItem("studentData");

  const studentDataObj = JSON.parse(allStudentData);

  const studentViewRecords = studentDataObj.filter(
    (allDataView) => allDataView.id === dataview["id"]
  );
  // console.log(studentViewRecords);

  // get all ements of span
  for (const key in studentViewRecords[0]) {
    const element = document.getElementById("span" + key);
    // console.log(key);
    if (element) {
      element.innerText = studentViewRecords[0][key];
      // console.log(element.id);
    }
  }
//  console.log(studentViewRecords[0].gender);

 if (studentViewRecords[0].gender === "female"){
  console.log("female gender is here");
 }
 else if(studentViewRecords[0].gender === "male"){
  console.log("male gender is here");
 }
 else if (studentViewRecords[0].gender === "others"){
  console.log("others gender is here");
 }



}

// displaying student data output
function showcaseStudentData() {

  viewBtnDivEl.classList.remove("hidden");

  listSection.classList.add("hidden");

  formSectionEl.classList.add("hidden");
}
