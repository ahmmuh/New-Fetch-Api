//fetch local text
const btn1 = document.getElementById("btn1");

btn1.addEventListener("mouseover", getText);

function getText() {
  fetch("data.txt")
    .then(res => res.text())

    .then(data => {
      console.log(data);
      document.getElementById("text").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// //fetch local json
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", getJson);

function getJson() {
  fetch("data.json")
    .then(data => data.json())
    .then(data => {
      document.getElementById("json").innerHTML = data.name;
    })
    .catch(function(err) {
      console.log(err);
    });
}

//fetch json data from external Api

const btn3 = document.getElementById("btn3");
btn3.addEventListener("mouseenter", geExternalData);

function geExternalData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(resapi => {
      return resapi.json();
    })
    .then(data => {
      let api = "";
      data.forEach(function(user) {
        api += `<li>${user.name}</li>`;
      });
      document.getElementById("api").innerHTML = api;
    })
    .catch(function(err) {
      console.log(err);
    });
}
