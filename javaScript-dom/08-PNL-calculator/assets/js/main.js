import JustValidate from "just-validate";
const formEl = document.querySelector("form");
const sectionEl = document.querySelector("section");
const selectEl = document.querySelector("#currencylist");

// getting span elements

const marginSpanEl = document.querySelector("#spanMargin");
const totalMarginSpanEl = document.querySelector("#spanTotalMargin");
const leveragesSanEl = document.querySelector("#spanLeverage");
const quantitySpanEl = document.querySelector("#spanQuantity");
const pnlSpanEl = document.querySelector("#spanPnl");

const pnlInput = document.querySelector("#pnlUiInput");
const convertBtnEL = document.querySelector("#covertBtn");
const backBtnEl = document.querySelector("#backBtn");
const outputEl = document.querySelector("#output");

const { entryPrice, exitPrice, margin, leverage } = formEl.elements;

const validateCalculate = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

const marginivalue = margin.value;

validateCalculate.addField(
  "#margin",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 1,
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
validateCalculate.addField(
  "#entryPrice",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 1,
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
validateCalculate.addField(
  "#exitPrice",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 1,
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

validateCalculate.onSuccess((event) => {
  const formData = new FormData(formEl);
  console.log(formData);

  // Convert formdata to object
  const jsonData = Object.fromEntries(formData);
  console.log(jsonData);

  // getting margin values from formData
  const margininit = parseFloat(jsonData.margin);
  const leverageinit = parseFloat(jsonData.leverage);

  // formula for price difference
  let priceDifferenceformula = entryPrice.value - exitPrice.value;
  const priceDifference = Number(priceDifferenceformula.toFixed(2));
  // console.log("Price difference :", priceDifference);

  //  formula for total margin
  let totalMarginformula = margin.value * leverage.value;
  const totalMargin = Number(totalMarginformula.toFixed(2));

  // console.log("total Margin:", totalMargin);

  //   total quantity formula
  let totalQuantityformula = totalMargin / entryPrice.value;
  const totalQuantity = Number(totalQuantityformula.toFixed(2));

  // console.log("total Quantity:", totalQuantity);

  //   PNL Calculation formula

  const PnLformula = priceDifference * totalQuantity;
  // console.log(Math.round(2.5)); //
  const PNL = Number(PnLformula.toFixed(2));
  // console.log("PNL :", PNL);

  // output value object

  const finalOutput = {
    margin: margininit,
    leverage: leverageinit,
    priceDifference,
    totalMargin,
    totalQuantity,
    PNL,
  };
  // console.log(finalOutput);

  // displaying results in UI

  marginSpanEl.textContent = finalOutput.margin;
  totalMarginSpanEl.textContent = finalOutput.totalMargin;
  leveragesSanEl.textContent = finalOutput.leverage;
  quantitySpanEl.textContent = finalOutput.totalQuantity;
  pnlSpanEl.textContent = finalOutput.PNL;
  pnlInput.value = finalOutput.PNL;

  currenciesNameApi();
  sectionEl.classList.remove("hidden");
  formEl.classList.add("hidden");
});

// api currency country code

const URL = "https://api.frankfurter.app/currencies";

const currenciesNameApi = async () => {
  try {
    const apiCall = await fetch(URL);
    const jsonApiCountry = await apiCall.json();
    const currency = Object.entries(jsonApiCountry);
    currency.forEach((currencyName) => {
      // console.log(currencyName[0]);
      // return currencyName;
      selectEl.innerHTML += `<option value="${currencyName[0]}">${currencyName[0]}</option>`;
      // sectionEl.append(dropdown);
    });
  } catch (err) {
    console.log(err.message);
  }
};

// currency convertion

convertBtnEL.addEventListener("click", async () => {
  const ConvertURL = `https://api.frankfurter.app/latest?amount=${pnlInput.value}&from=USD&to=${selectEl.value}`;
  
  if (selectEl.value === "USD" || selectEl.value === "") {
    alert("Please select a Valide currency");
    sectionEl.classList.remove("hidden");
    outputEl.classList.add("hidden");
  }
  try {
    const apiCall = await fetch(ConvertURL);
    const jsonApiData = await apiCall.json();
    const convertCurrency = Object.values(jsonApiData.rates)[0];
    const outputCurrency = Number(convertCurrency.toFixed(2));
    outputEl.innerHTML = `
    <h1 class="p-5 text-center text-xl font-bold">This is result of your currency covertion</h1>
    <p class="p-5 text-center text-xl font-semibold">${pnlInput.value} USD equal to ${outputCurrency} ${selectEl.value}</p>
    <button onclick="window.location.href='/index.html'" class="bg-gray-400 text-gray-800 block w-full mt-5 p-2 text-xl  font-medium rounded-xl"
    >Back to Home</button>
    `;
    sectionEl.classList.add("hidden");
    outputEl.classList.remove("hidden");
    // alert(`${pnlInput.value} USD equal to ${outputCurrency} ${selectEl.value}`);
  } catch (err) {
    console.log(err.message);
  }
  formEl.reset();
 
});

backBtnEl.addEventListener("click", () => {
  sectionEl.classList.add("hidden");
  formEl.classList.remove("hidden");
});
