const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=fd6621ff82539cd3e25a24d3d6243596&query=Los%20Angeles';

request(url, (err, res, body) => {
  console.log(body)
});