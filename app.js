const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=fd6621ff82539cd3e25a24d3d6243596&query=Los%20Angeles';

request({ url, json: true }, (err, res, body) => {
  console.log(`It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees`);
});

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamluaWhlbmRyaXgiLCJhIjoiY2s5dDJlYzFjMDA4MDNucG43c3dxM2ZhcyJ9.5gUfNd3yNgXZWtsu8owG8A';

request({ url: geoUrl, json: true }, (err, res, body) => {
  console.log(body.features[0].center)
});