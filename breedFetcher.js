const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=siberian`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});