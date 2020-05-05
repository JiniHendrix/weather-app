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

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiamluaWhlbmRyaXgiLCJhIjoiY2s5dDJlYzFjMDA4MDNucG43c3dxM2ZhcyJ9.5gUfNd3yNgXZWtsu8owG8A`;

  request({ url, json: true }, (err, res, body) => {
    if (err) {
      callback('Unable to connect to geo service!')
    } else if (!body.features.length) {
      callback('Location not found! Try another search');
    } else {
      const {
        center: [longitude, latitude],
        place_name: location,
      } = body.features[0];

      callback(undefined, {
        latitude,
        longitude,
        location
      });
    }
  });
}

geocode('New York', (error, data) => {
  console.log('Error: ', error);
  console.log('Data: ', data);
})