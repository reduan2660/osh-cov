const select = document.getElementById("selectCountry");
var countryName = select.options[select.selectedIndex].value;

const span = document.getElementById("cases");
updateCountry();
function updateCountry() {
  countryName = select.options[select.selectedIndex].value;
  span.innerHTML = "Loading 🔃";

  axios
    .get(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
    .then((data) => {
      span.innerHTML = data["data"]["cases"];
    });
}

// ---------------------------
// Input
const btn = document.getElementById("updateCountryInput");
btn.addEventListener("click", updateCountryInput);

function updateCountryInput() {
  countryName = document.getElementById("selectCountryText").value;
  span.innerHTML = "Loading 🔃";

  axios
    .get(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
    .then((data) => {
      if (!!data["data"]["cases"]) {
        span.innerHTML = data["data"]["cases"];
      } else {
        span.innerHTML = "Country doesn't exist 🌋";
      }
    })
    .catch((err) => {
      console.log(err);
      span.innerHTML = "Error 🌋";
    });
}
