var myHeaders = new Headers();
var message1 = "Yahoo!";
var myInit = {
    method: "GET",
};
var lat="";
var long="";
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
     
     fetch(url, myInit)
.then(response => response.json())
.then(data => {
    weather = JSON.stringify(data)
    document.getElementById("weather1").innerHTML = weather;
}
)}
console.log(data);
console.log(url);
console.log(weather);
console.log(jsobj);