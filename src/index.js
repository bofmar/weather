import getTime from './time';

const body = document.querySelector('body');
const time = document.getElementById('time');
const location = document.getElementById('location');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const feels = document.getElementById('feels');
const imgHumidity = document.getElementById('humidity-image');
const humidity = document.getElementById('humidity');
const imgMin = document.getElementById('min-image');
const min = document.getElementById('min');
const imgMax = document.getElementById('max-image');
const max = document.getElementById('max');
const imgWind = document.getElementById('wind-image');
const wind = document.getElementById('wind');
const imgVisibility = document.getElementById('visibility-image');
const visibility = document.getElementById('visibility');
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const unitsButton = document.getElementById('units');

let units = 'celsius';

function getCelsius(temp) {
  return `${(Number(temp) - 273.15).toPrecision(3)} ℃`;
}

function getFarenheit(temp) {
  //  	℉=((K-273.15)*1.8)+32
  return `${(((Number(temp) - 273.15) * 1.8) + 32).toPrecision(4)} ℉`;
}

function displayWeather(data, units = 'celsius') {
  // Weekday, Month, Day, Hours
  time.innerText = getTime(data.dt);
  // City, Country code
  location.innerText = `${data.name}, ${data.sys.country}`
  // Temperatures 
  if (units === 'celsius') {
    temperature.innerText = getCelsius(data.main.temp);
    feels.innerText = getCelsius(data.main.feels_like);
    min.innerText = getCelsius(data.main.temp_min);
    max.innerText = getCelsius(data.main.temp_max);
  } else {
    temperature.innerText = getFarenheit(data.main.temp);
    temperature.innerText = getFarenheit(data.main.feels_like);
    min.innerText = getFarenheit(data.main.temp_min);
    max.innerText = getFarenheit(data.main.temp_max);
  }
  // Description
  description.innerText = data.weather[0].main;
  // Humidity
  humidity.innerText = `${data.main.humidity}% Humidity`;
  // Wind Speed
  wind.innerText = `${data.wind.speed} km/h`;
  // Visibility
  visibility.innerText = `${(data.visibility / 1000).toPrecision(3)} km/h`;
}

async function getReport(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eed84943e5486d8a117b70b7eaf2d745`,
      { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
    displayWeather(weatherData, units);
  } catch {
    console.log('oops');
  }
}

searchButton.addEventListener('click', () => {
  getReport(searchBar.value);
});

unitsButton.addEventListener('click', () => {
  units = (units === 'celsius') ? 'farenheit' : 'celsius';
  unitsButton.innerText = (units === 'celsius') ? '℃' : '℉';
  getReport(searchBar.value || 'London');
});

getReport('London');
