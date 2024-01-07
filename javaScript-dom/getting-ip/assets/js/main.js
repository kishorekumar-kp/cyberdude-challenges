// getting ip from this website https://ipv4.icanhazip.com/

const addressEl = document.getElementById("address");

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    addressEl.innerText = xhr.responseText;
  }
  else{
    addressEl.innerText = "Not Found";
  }
};
xhr.open('GET', "https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/");
xhr.send();


// without cors
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     if (this.status === 200) {
//       addressEl.innerText = xhr.responseText;
//     }
//   } else {
//     addressEl.innerText = "Not found";
//   }
// };

// xhr.open("GET", "https://ipv4.icanhazip.com/");
// xhr.send();
