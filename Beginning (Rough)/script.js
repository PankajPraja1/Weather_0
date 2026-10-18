const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p");
const dateAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const weatherIcon = document.getElementById("weatherIcon");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

const humidityField = document.getElementById("humidity");
const windField = document.getElementById("wind");
const sunriseField = document.getElementById("sunrise");
const sunsetField = document.getElementById("sunset");

form.addEventListener('submit', searchForLocation);

let target = 'Mumbai';

// Icon mapping
const weatherIcons = {
    Sunny: "icons/sunny.svg",
    Clear: "icons/clear-night.svg",
    Clouds: "icons/cloudy.svg",
    Rain: "icons/rain.svg",
    Mist: "icons/mist.svg",
    Snow: "icons/snow.svg",
    Thunderstorm: "icons/thunder.svg"
};

async function fetchResults(targetLocation) {
    const url = `https://api.weatherapi.com/v1/current.json?key=cf9e13d697a0413d9fe184643251008&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    const locationName = data.location.name;
    const time = data.location.localtime;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const isDay = data.current.is_day === 1;

    const humidity = data.current.humidity;
    const wind = data.current.wind_kph;
    const sunrise = "--"; // Only available in forecast API
    const sunset = "--"; // Only available in forecast API

    updateDetails(temp, locationName, time, condition, humidity, wind, sunrise, sunset, isDay);
}

function updateDetails(temp, locationName, time, condition, humidity, wind, sunrise, sunset, isDay) {
    const [date, clock] = time.split(' ');
    const currentDay = getDayName(new Date(date).getDay());

    temperatureField.innerText = `${temp}°C`;
    locationField.innerText = locationName;
    dateAndTimeField.innerText = `${date} ${currentDay} ${clock}`;
    conditionField.innerText = condition;

    weatherIcon.src = weatherIcons[condition] || "icons/default.svg";

    humidityField.innerText = humidity;
    windField.innerText = wind;
    sunriseField.innerText = sunrise;
    sunsetField.innerText = sunset;

    updateBackground(condition, isDay);
}

function updateBackground(condition, isDay) {
    let bg;
    if (condition.includes("Rain")) {
        bg = "linear-gradient(to top, #3a7bd5, #3a6073)";
    } else if (condition.includes("Snow")) {
        bg = "linear-gradient(to top, #e6dada, #274046)";
    } else if (condition.includes("Cloud")) {
        bg = "linear-gradient(to top, #bdc3c7, #2c3e50)";
    } else if (condition.includes("Clear") && isDay) {
        bg = "linear-gradient(to top, #fbc2eb, #a6c1ee)";
    } else if (condition.includes("Clear") && !isDay) {
        bg = "linear-gradient(to top, #0f2027, #203a43, #2c5364)";
    } else {
        bg = "linear-gradient(to top, #667db6, #0082c8, #0082c8, #667db6)";
    }
    document.body.style.background = bg;
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

function getDayName(number) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][number];
}

fetchResults(target);
