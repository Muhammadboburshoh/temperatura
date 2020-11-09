var elForm = document.querySelector(".form-input");
var addFarengeyTemperature = elForm.querySelector(".farengey-temperature");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputTemperature = parseFloat(elForm.querySelector(".input-temperature").value.trim(),10);

  var farengeyTemperature = (inputTemperature * 9/5) + 32;
  addFarengeyTemperature.textContent = farengeyTemperature;
})