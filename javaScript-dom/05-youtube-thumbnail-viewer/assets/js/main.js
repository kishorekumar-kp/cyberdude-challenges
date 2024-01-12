const formEl = document.getElementsByTagName("form");
const inputFieldEl = document.getElementById("inputField");
const btnEl = document.querySelector("#inputBtn");
const imgEl = document.querySelector("img");
const imgDivEl = document.getElementById("imgDiv");
const inputDivEl = document.getElementById("inputDiv");
const imgBtnEl = document.getElementById("imgBtn");

function inputdata(event) {
  const urlData = inputFieldEl.value;
  const videoId = urlData.match(/v=([^&]+)/)[1];
  console.log(videoId);
  imgEl.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  inputdata();
  imgDivEl.classList.remove("hidden");
  imgDivEl.classList.add("flex");
  inputDivEl.classList.add("hidden");
});

imgBtnEl.addEventListener("click", () => {
  inputDivEl.classList.remove("hidden");
  imgDivEl.classList.add("hidden");
  inputFieldEl.value="";
  
});

