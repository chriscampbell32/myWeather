var weatherData = {
    city: document.querySelector("#city"),
    weather: document.querySelector("#weather"),
    temperature: document.querySelector("#temperature"),
    temperatureValue: 0,
    units: "C"
};


//function changes celsius to fahrenheit
function switchUnits(){
  if (weatherData.units == "C"){
    weatherData.temperatureValue = Math.round(weatherData.temperatureValue * 9/5 + 32);
    weatherData.units = "F";
  }
  else{
    weatherData.temperatureValue = Math.round(weatherData.temperatureValue -  32 * 5/9);
    weatherData.units = "C";
  }

  weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + ", ";      
}

//xmlhttp requests
function getLocationAndWeather(){
  if (window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
      var response = JSON.parse(xhr.responseText);

      console.log(response);
      var position = {
        latitude: response.latitude,
        longitude: response.longitude
      };
      var cityName = response.city;

      var weatherSimpleDescription = response.weather.simple;
      var weatherDescription = response.weather.description;
      var weatherTemperature = Math.round(response.weather.temperature);

      weatherData.temperatureValue = weatherTemperature;

      loadBackground(position.latitude, position.longitude, weatherSimpleDescription);
      weatherData.city.innerHTML = cityName;
      weatherData.weather.innerHTML =  ", " + weatherDescription;
      weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
    }, false);

    xhr.addEventListener("error", function(err){
      alert("Could not complete the request");
    }, false);

       xhr.open("GET", "https://fourtonfish.com/tutorials/weather-web-app/getlocationandweather.php?owapikey=824a583b9e96f79b106e6ed7f7b0f433&units=metric", true);
    xhr.send();
  }
  else{
    alert("Unable to fetch the location and weather data.");
  }           
}



// //flickr code goes below
    
