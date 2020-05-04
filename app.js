const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=fd6621ff82539cd3e25a24d3d6243596&query=Los Angeles';

request({ url, json: true }, (err, res, body) => {
  if (err) {
    console.log('Unable to connect to weather service!')
  } else if (body.error) {
    console.log('Unable to find location');
  } else {
    console.log(`It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees`);
  }
});

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los Angeles.json?access_token=pk.eyJ1IjoiamluaWhlbmRyaXgiLCJhIjoiY2s5dDJlYzFjMDA4MDNucG43c3dxM2ZhcyJ9.5gUfNd3yNgXZWtsu8owG8A';

request({ url: geoUrl, json: true }, (err, res, body) => {
  if (err) {
    console.log('Unable to connect to geo service!')
  } else if (!body.features.length) {
    console.log('Location not found!');
  } else {
    console.log(...body.features[0].center)
  }
});