const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target = 'Mumbai';
let currentTimezone = null; // Store the location's timezone

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=cf9e13d697a0413d9fe184643251008&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    currentTimezone = data.location.tz_id; // Save timezone for live clock

    updateWeather(temp, locationName, condition);
    startClock(); // Start clock updates
};

function updateWeather(temp, locationName, condition) {
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    conditionField.innerText = condition;
}

function startClock() {
    if (!currentTimezone) return;

    // Clear any old interval
    if (window.clockInterval) {
        clearInterval(window.clockInterval);
    }

    // Update every second
    window.clockInterval = setInterval(() => {
        let now = new Date().toLocaleString("en-GB", {
            timeZone: currentTimezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        dateandTimeField.innerText = now;
    }, 1000);
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

fetchResults(target);
