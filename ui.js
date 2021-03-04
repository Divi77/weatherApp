class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    let newIcon = weather.weather[0].icon;
    // console.log(newIcon);
    const icon = `http://openweathermap.org/img/wn/${newIcon}@2x.png`;
    this.location.textContent = `${weather.name} , ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    this.icon.setAttribute("src", icon);
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like : ${weather.main.feels_like} °C`;
    this.dewpoint.textContent = `Pressure : ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;
  }
}
