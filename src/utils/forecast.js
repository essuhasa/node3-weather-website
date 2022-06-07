const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d51f191fe3bd27c1fc992273e7b25ae0&query=' + latitude + "," + longitude;

    request({url, json:true},(error,{ body }) => {
        if(error){
            callback('Unable to connect to weather services!',undefined);
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else {
            const temp = body.current.temperature;
            const feels = body.current.feelslike;
            callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${temp} degrees out. It feels like ${feels} degrees out.`)
        }
    })
}

module.exports = forecast;