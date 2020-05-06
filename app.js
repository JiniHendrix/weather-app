const { geocode, forecast } = require('./utils');

const location = process.argv[2];

if (!location) {
  return console.error('Please provide a location');
}

geocode(location, (error, { latitude, longitude } = {}) => {
  if (error) {
    return console.error('Error: ', error);
  }

  forecast(latitude, longitude, (error, { forecast } = {}) => {
    if (error) {
      return console.error(error);
    }
    
    console.log(forecast);
  })
})