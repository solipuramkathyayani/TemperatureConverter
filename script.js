function convertTemperature() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const inputUnit = document.getElementById("inputUnit").value;

  let celsius, fahrenheit, kelvin;

  switch (inputUnit) {
    case "C":
      celsius = inputValue;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 273.15;
      break;
    case "F":
      fahrenheit = inputValue;
      celsius = ((fahrenheit - 32) * 5) / 9;
      kelvin = celsius + 273.15;
      break;
    case "K":
      kelvin = inputValue;
      celsius = kelvin - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      break;
  }
}

  document.getElementById(
    "celsiusResult"
  ).textContent = `Celsius: ${celsius.toFixed(2)}°C`;
  document.getElementById(
    "fahrenheitResult"
  ).textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  document.getElementById(
    "kelvinResult"
  ).textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}
