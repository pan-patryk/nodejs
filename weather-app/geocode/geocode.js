const request = require('request');

var geocodeAddress = (address, callback) => {
  var apikey = '&key=AIzaSyAmgDRxNfsHsn3MFwuALgRRA6DTsUEmdYU'
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + apikey,
    json: true
  }, (error,response,body) => {
    if (!error) {
        if (body.status === 'OK'){
        callback(undefined,{
          address: body.results[0].formatted_address,
          lattitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
        } else {
          callback('Error. Did you provided correct address?');
        }
      } else {
      callback('Unable to connect to google servers');
    }
  });
};

module.exports = {
  geocodeAddress
};
