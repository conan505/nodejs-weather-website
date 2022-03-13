const request = require("request");


const mapboxApiKey = "pk.eyJ1IjoicmFodWw3MDQyIiwiYSI6ImNsMG5ydmQ3ajExeXIzYnBlYWRmOXVhcG4ifQ.KmPTaGLPsQ5j799DG8zrGw"

// function to get latitude and longitude from an address via mapbox API

const geocode = (address, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxApiKey}`
    request({ url: geocodeUrl, json: true }, (e, { body } = {}) => {
        if (e) {
            callback("Unable to connect to mapbox service", undefined);
        }
        else if (body.features.length === 0) {
            callback("Unable to find location in mapbox!", undefined);
        }
        else {
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data);
        }
    })
}

module.exports = geocode;