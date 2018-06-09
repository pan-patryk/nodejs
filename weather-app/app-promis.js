const yargs = require('yargs');
const axios = require('axios');

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

var address = argv.address;
var apikey = '&key=AIzaSyAmgDRxNfsHsn3MFwuALgRRA6DTsUEmdYU';
var geocodeUrl='https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + apikey;

axios.get(geocodeUrl).then((response) => {
  var weatherUrl=`https://api.darksky.net/forecast/a8fd1f604a364c70b3985d8ac00c708e/${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  console.log(response.data.currently.temperature);
  console.log(response.data.currently.apparentTemperature);
}).catch((e) => {
  console.log(e);
});
