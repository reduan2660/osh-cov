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
