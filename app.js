//Importing Necessary NPM Packages
const express = require("express");
const https = require("https");

//Greating an Express APP
const app = express();

//Setting a variable to the PORT for changin later.
const PORT = 3000;

//This is the weather API url that we need in order to go recieve the information from the WeatherMap API
// const starturl = 'http://api.weatherapi.com/v1/current.json?key=5a7b27039073496996c34110223103&q=';
// const place =
// const endurl = '&aqi=no'//This is the weather API url that we need in order to go recieve the information from the WeatherMap API
const url =
  "https://api.weatherapi.com/v1/current.json?key=5a7b27039073496996c34110223103&q=Chicago&aqi=no";

app.get("/", (req, res) => {
  //Making a GET request to the Weathermap API
  //Logging the Status Code to check whether the correct status code is displayed
  https.get(url, (response) => {
    console.log(response.statusCode);
    //Here we are taking the hexidcimal value given by the terminal and parsing the data and then storing that data
    // inside of a const called 'weatherData'
    //Lastly we log the data in the terminal so that we can see what information was provided by the API
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      //Initialized variables to the API data for later use
      //Combined two different piecees of information from API to create the name since both are sperate
      const name =
        weatherData.location.name +
        ", " +
        weatherData.location.region +
        "  " +
        weatherData.location.country;
      const temp = weatherData.current.temp_f;
      const description = weatherData.current.condition.text;
      //Include humidity, wind, pressure, dewpoint, visibility and UV index.
      const icon = weatherData.current.condition.icon;
      //Add the image URL later.
      //const imgURL = ''
      //Logged data to console to make sure that the data was correct.
      console.log(name);
      console.log(temp);
      console.log(description);
      console.log(icon);
      //Sending data to the browser using a res.send()
      res.write("<h1>The Weather in " + name + " is " + temp + " degrees F.</h1><br>");
      res.write('<h2>' + description + '</h2>');
      res.write('Powered by ' + '<a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>' + '.')
      //Link icons at a later date
      //res.write('<img src='' + imgURL + ''>')
      // Sending the res.writes^^^
      res.send();
    });
  });
});

app.listen(PORT, (req, res) => {
  console.log("Server 🏃🏽‍♂️🏃🏽‍♂️🏃🏽‍♂️ on PORT " + PORT + "!!!");
});
