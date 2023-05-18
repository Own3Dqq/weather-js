function getWeather() {
  var city = document.getElementById('cityInput').value;
  var apiKey = '2f2af7426eb244ce82b90503231805';
  var apiUrl = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayWeather(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayWeather(data) {
  var weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = '';

  var location = data.location.name + ', ' + data.location.country;
  var temperature = data.current.temp_c;
  var condition = data.current.condition.text;

  var locationElement = document.createElement('h2');
  locationElement.textContent = location;
  weatherInfo.appendChild(locationElement);

  var temperatureElement = document.createElement('p');
  temperatureElement.textContent = 'Температура: ' + temperature + '°C';
  weatherInfo.appendChild(temperatureElement);

  var conditionElement = document.createElement('p');
  conditionElement.textContent = 'Умови: ' + condition;
  weatherInfo.appendChild(conditionElement);
}
