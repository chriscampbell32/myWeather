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
    weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
    weatherData.units = "F";
  }
  else{
    weatherData.temperatureValue = roundTemperature((weatherData.temperatureValue -  32) * 5/9);
    weatherData.units = "C";
  }

  weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + ", ";      
}

//xmlhttp requests
function getLocationAndWeather(){
    if(window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function() {}, false);
    xhr.addEventListener("error", function(){}, false);
    
    xhr.open("GET", "<URL>", true);
    xhr.send();
  }
  //handle errors
  else{
    alert("Unable to fetch the location and weather data.");
  }     
}



//flickr code goes below
    
