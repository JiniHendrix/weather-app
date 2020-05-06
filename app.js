const { geocode, forecast } = require('./utils');

geocode(process.argv[2], (error, data) => {
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