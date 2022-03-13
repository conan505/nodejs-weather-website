const request = require("request");

const weatherStackApiKey = "71daccde6543f4b3ff6dd8e413980406"

// function to show weather status using longitude and latitude values of a place via weatherstack API

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=${latitude},${longitude}&units=m`
    request({ url, json: true }, (e, { body } = {}) => {
        if (e) {
            callback("Unable to connect to weather services", undefined);
        }
        else if (body.error) {
            callback("Unable to find location for weather data!", undefined);
        }
        else {
            callback(undefined, "Weather is " + body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees celcius. There is " + body.current.precip + "% chance of rain.");
        }
    })
}


module.exports = forecast;