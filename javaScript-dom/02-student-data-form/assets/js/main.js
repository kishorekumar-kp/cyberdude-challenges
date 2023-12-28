import JustValidate from "just-validate";

const formEl = document.getElementById("studentForm");

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

  const formDataObj = Object.fromEntries(formData);
  
  const existingStudentData = localStorage.getItem("studentData");
  
  if (existingStudentData) {
    const studentArray = JSON.parse(existingStudentData);
    studentArray.push(formDataObj);
    localStorage.setItem("studentData", JSON.stringify(studentArray));
    formEl.reset();
  } else {
    const studentAllData = [];
    studentAllData.push(formDataObj);
    localStorage.setItem("studentData", JSON.stringify(studentAllData));
    formEl.reset();
  }
  
  getAllStudenData();
});

function getAllStudenData(){
  const allStudentData = localStorage.getItem("studentData");

  const getAllStudenDataArr = JSON.parse(allStudentData);

  console.log(getAllStudenDataArr);
}


