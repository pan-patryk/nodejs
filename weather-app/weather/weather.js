const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/a8fd1f604a364c70b3985d8ac00c708e/${lat},${lng}`,
    json: true
  },(error,response,body) => {
    if (!error && response.statusCode===200) {
        callback(undefined,{
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
      })
    } else if (!error && response.statusCode===400) {
      callback('There is http error');
    } else {
      callback('There is request error');
    }
})};

module.exports = {
  getWeather
};
