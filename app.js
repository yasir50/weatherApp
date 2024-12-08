const apiKey = "acd0fe954dc8d067d2445bc5135aaf10";

const searchData = async () => {
  const spin = document.getElementById("showWeather");
  spin.innerHTML = `

      <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div`;

  const input = document.getElementById("input");
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  console.log(input.value);
  const fetchData = await fetch(api);
  const response = await fetchData.json();
  showData(response);
    input.value = "";
};

function showData(data) {
  const weatherData = document.getElementById("showWeather");

  console.log(data);
  weatherData.innerHTML = `
   
  <img id="weather-icon" class="icon" src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}" alt="Weather Icon">
  <h1 class="temperature">${data.name}</h1>
  <p  class="temperature">${data.main.temp}C</p>

  
  `;
}
