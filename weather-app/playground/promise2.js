const request = require('request');
var geocodeAddress = (address) => {
 return new Promise((resolve,reject)=>{
   var apikey = '&key=AIzaSyAmgDRxNfsHsn3MFwuALgRRA6DTsUEmdYU'
   request({
     url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + apikey,
     json: true
   }, (error,response,body) => {
      !error && body.status ==='OK' ? resolve(body.results[0].geometry.location) : reject(error);
   });
 });
};

geocodeAddress('12345').then((location) => {
 console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
  console.log(errorMessage);
})
