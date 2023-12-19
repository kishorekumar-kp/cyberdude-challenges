const formEl = document.forms.jobApplication;
let divEl = document.getElementById("division");

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);

  // Convert formdata to object
  const jsonData = Object.fromEntries(formData);
  console.log(jsonData);

  for (const key in jsonData) {
    // console.log(`Key: ${key}, Value: ${jsonData[key]}`);

    // create dom element
    const p = document.createElement("p");
    p.innerHTML= `<p class = text-2xl text-gray-700  >${key}, ${jsonData[key]}</p>`
    // const textNode = document.createTextNode(`${key}, ${jsonData[key]}`);

    // Append
    // p.append(textNode);
    divEl.prepend(p);
  }

  // jsonData.name;

  console.log("form submitted");
};

formEl.addEventListener("submit", handleSubmit);
