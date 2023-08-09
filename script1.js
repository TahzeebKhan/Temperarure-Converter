function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitType = document.getElementById('unitType').value;
    let result;
  
    if (unitType === 'celsius') {
      result = (inputValue * 9 / 5) + 32;
      document.getElementById('result').innerText = `${inputValue} °C is equal to ${result.toFixed(2)} °F`;
    } else if (unitType === 'fahrenheit') {
      result = (inputValue - 32) * 5 / 9;
      document.getElementById('result').innerText = `${inputValue} °F is equal to ${result.toFixed(2)} °C`;
    }
  }
  