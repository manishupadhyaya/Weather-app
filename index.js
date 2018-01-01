var myHeaders = new Headers();
var message1 = "Yahoo!";
var lat="";
var long="";
// This data variable is declared as a global variable.
var data;
var jsobj;
var weather;
var url="https://fcc-weather-api.glitch.me/api/current?"
var x = document.getElementById("Yo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    getWeather(lat,long);
}

function getWeather(lat, long) {
    lat = "lat=" + lat;
    long ="lon=" + long;
    url = url + lat +"&"+long;
     
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Look up. This function has a formal argument named data. This data
        // will overshadow the global data variable.
        console.log(data);
        document.getElementById("weather1").innerHTML = data.main.temp + " 'C";
    }
)}