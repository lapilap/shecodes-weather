let apiKey = "417ebtb8abef04ca4c5fo2cbf8b13fe6";
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
    let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
    return days[now.getDay()] + " " + hours + ":" + minutes;
}

function setLocation(event) {
    event.preventDefault();
    let searchLocation = document.querySelector("#search-input");

    fetchForecast(searchLocation.value);
}

function fetchForecast(city) {
    axios
        .get(`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`)
        .then(parseResponse, city);
}

function parseResponse(response, city) {
    document.querySelector("#actual-temp").innerHTML = Math.round(response.data.temperature.current);
    document.querySelector(".current-city").innerHTML = response.data.city;
    document.querySelector(".current-country").innerHTML = response.data.country;
}

document.querySelector("#day-time").innerHTML = getCurrentTime();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", setLocation);


