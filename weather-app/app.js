const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js')
const argv = yargs
.options({
  address:{
    demand: true,
    alias: 'a',
    describe: 'Adress to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (!errorMessage){
    console.log(results.address);
    weather.getWeather(results.lattitude,results.longitude, (errorMessage, weatherResults) => {
      if (!errorMessage){
        console.log(`Temperature is ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`);
      } else {
        console.log(errorMessage);
      }
    });
  } else {
    console.log(errorMessage);
}});
