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
        const code = data.current.weathercode;
        const temp = data.current.temperature_2m;

        document.getElementById("weather1").innerHTML = temp + " °C";
    }
)}
function setIcon(code) {
    let iconSrc;
    if(code===0){
        console.log("Hello")
        iconSrc = "icons/clear.png"
    }
    else if(code>=1 && code<=3){
        iconSrc = "icons/cloudy.png"
    }
    else if(code===45 || code ===48){
        iconSrc = "icons/fog.png"
    }
    else if((code>=51 && code<=67) || (code>=80 && code<=82)){
        iconSrc = "icons/rain.png"
    }
    else if(code>=71 && code <=77){
        iconSrc = "icons/snow.png"
    }
    else if(code>=95 && code<=99){
        iconSrc = "icons/thunder.png"
    }
    else {
        iconSrc = "icons/default.png"
    }
    console.log("code", code, " iconSrc", iconSrc)
    document.getElementById("icon").setAttribute("src", iconSrc);
}
