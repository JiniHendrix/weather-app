const { geocode, forecast } = require('./utils');

geocode('New York', (error, data) => {
  if (error) {
    return console.error('Error: ', error);
  }

  console.log('Data: ', data);

  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.error(error);
    }
    
    console.log(data);
  })
})