const apiKey = "b96de8ef8cb52f8d67fb21d394d633bd";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon-container");

async function successfulLookup(position) {
	const { latitude, longitude } = position.coords;
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${
			Math.round(latitude * 10) / 10
		}&lon=${longitude}&appid=${apiKey}&units=metric`
	);
	let geoData = await response.json();

	console.log(geoData);

	document.querySelector(".city").innerHTML = geoData["name"];

	document.querySelector(".temp").innerHTML = `${Math.round(
		geoData["main"]["temp"]
	)}°C`;

	document.querySelector(
		".humidity"
	).innerHTML = `${geoData["main"]["humidity"]}%`;

	document.querySelector(".wind").innerHTML = `${Math.round(
		geoData["wind"]["speed"] * 3.6
	)} km/h`;

	if (geoData["weather"][0]["icon"] == "01d") {
		weatherIcon.innerHTML = `<img src="images/day/base Sun.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "02d") {
		weatherIcon.innerHTML = `<img src="images/day/day cloud.svg" class="weather-icon"></img>`;
	} else if (
		geoData["weather"][0]["icon"] == "03d" ||
		geoData["weather"][0]["icon"] == "04d"
	) {
		weatherIcon.innerHTML = `<img src="images/day/day scatt Cloud.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "09d") {
		weatherIcon.innerHTML = `<img src="images/day/shower day.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "10d") {
		weatherIcon.innerHTML = `<img src="images/day/heavy rain day.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "50d") {
		weatherIcon.innerHTML = `<img src="images/day/mist day.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "13d") {
		weatherIcon.innerHTML = `<img src="images/day/snow day.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "01n") {
		weatherIcon.innerHTML = `<img src="images/night/base Moon.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "02n") {
		weatherIcon.innerHTML = `<img src="images/night/night cloud.svg" class="weather-icon"></img>`;
	} else if (
		geoData["weather"][0]["icon"] == "03n" ||
		geoData["weather"][0]["icon"] == "04n"
	) {
		weatherIcon.innerHTML = `<img src="images/night/night scatt Cloud.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "09n") {
		weatherIcon.innerHTML = `<img src="images/night/shower night.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "10n") {
		weatherIcon.innerHTML = `<img src="images/night/heavy rain night.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "50n") {
		weatherIcon.innerHTML = `<img src="images/night/mist night.svg" class="weather-icon"></img>`;
	} else if (geoData["weather"][0]["icon"] == "13n") {
		weatherIcon.innerHTML = `<img src="images/night/snow night.svg" class="weather-icon"></img>`;
	} else {
		weatherIcon.innerHTML = `<img src="images/thunderstorm.svg" class="weather-icon"></img>`;
	}
}

window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log);

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	let data = await response.json();

	console.log(data);

	document.querySelector(".city").innerHTML = data["name"];

	document.querySelector(".temp").innerHTML = `${Math.round(
		data["main"]["temp"]
	)}°C`;

	document.querySelector(
		".humidity"
	).innerHTML = `${data["main"]["humidity"]}%`;

	document.querySelector(".wind").innerHTML = `${Math.round(
		data["wind"]["speed"] * 3.6
	)} km/h`;

	if (data["weather"][0]["icon"] == "01d") {
		weatherIcon.innerHTML = `<img src="images/day/base Sun.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "02d") {
		weatherIcon.innerHTML = `<img src="images/day/day cloud.svg" class="weather-icon"></img>`;
	} else if (
		data["weather"][0]["icon"] == "03d" ||
		data["weather"][0]["icon"] == "04d"
	) {
		weatherIcon.innerHTML = `<img src="images/day/day scatt Cloud.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "09d") {
		weatherIcon.innerHTML = `<img src="images/day/shower day.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "10d") {
		weatherIcon.innerHTML = `<img src="images/day/heavy rain day.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "50d") {
		weatherIcon.innerHTML = `<img src="images/day/mist day.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "13d") {
		weatherIcon.innerHTML = `<img src="images/day/snow day.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "01n") {
		weatherIcon.innerHTML = `<img src="images/night/base Moon.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "02n") {
		weatherIcon.innerHTML = `<img src="images/night/night cloud.svg" class="weather-icon"></img>`;
	} else if (
		data["weather"][0]["icon"] == "03n" ||
		data["weather"][0]["icon"] == "04n"
	) {
		weatherIcon.innerHTML = `<img src="images/night/night scatt Cloud.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "09n") {
		weatherIcon.innerHTML = `<img src="images/night/shower night.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "10n") {
		weatherIcon.innerHTML = `<img src="images/night/heavy rain night.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "50n") {
		weatherIcon.innerHTML = `<img src="images/night/mist night.svg" class="weather-icon"></img>`;
	} else if (data["weather"][0]["icon"] == "13n") {
		weatherIcon.innerHTML = `<img src="images/night/snow night.svg" class="weather-icon"></img>`;
	} else {
		weatherIcon.innerHTML = `<img src="images/thunderstorm.svg" class="weather-icon"></img>`;
	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value.toLowerCase());
});

searchBox.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		checkWeather(searchBox.value.toLowerCase());
	}
});

// console.log(navigator.geolocation.getCurrentPosition(console.log, console.log));
