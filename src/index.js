const body = document.querySelector('body');

async function getReport(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eed84943e5486d8a117b70b7eaf2d745`,
      { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
  } catch {
    console.log('oops');
  }
}

getReport('London');
