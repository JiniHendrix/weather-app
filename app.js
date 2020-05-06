const { geocode, forecast } = require('./utils');

const location = process.argv[2];

if (!location) {
  return console.error('Please provide a location');
}

geocode(location, (error, data) => {
  if (error) {
    return console.error('Error: ', error);
  }

  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.error(error);
    }
    
    console.log(data.forecast);
  })
})