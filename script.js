const API_KEY = "d4caf93ef45fd6f4dc04e41ecc89e11f";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(cityName) {
  let response = await fetch(URL + `&q=${cityName}&appid=${API_KEY}`);
  let data = await response.json();
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document
      .querySelector(".weather img")
      .setAttribute("src", `images/${data.weather[0].main}.png`);
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

