const Api_url = "https://api.adviceslip.com/advice";

const blockquoteEl = document.querySelector("blockquote > p");
const btnEl = document.querySelector("button");


btnEl.addEventListener("click", () => {
  window.location.href = "./index.html";
});


// const result = fetch(Api_url)
// .then((response)=>{
//     return response.json
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Failed to fetch", error);
// })

// console.log(result);

// const result = await fetch(Api_url);
// const jsonData = await result.json();

// console.log(result);

async function getApiData() {
  try {
    const result = await fetch(Api_url);
    const jsonData = await result.json();
    // console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.log(error);
  }
}

const finalData = await getApiData();

blockquoteEl.innerText =`" ${finalData.slip.advice}"` ;

btnEl.classList.remove("hidden");