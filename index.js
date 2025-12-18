var myHeaders = new Headers();
var message1 = "Yahoo!";
var lat="";
var long="";
// This data variable is declared as a global variable.
var data;
var jsobj;
var weather;
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
    getWeather(position.coords.latitude, position.coords.longitude);
}

function getWeather(lat, long) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weathercode`;
    console.log(url)
     
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Look up. This function has a formal argument named data. This data
        // will overshadow the global data variable.
        console.log(data);
        document.getElementById('icon').setAttribute('src', data.weather[0].icon);
        document.getElementById("weather1").innerHTML = data.main.temp + " 'C";
    }
)}
