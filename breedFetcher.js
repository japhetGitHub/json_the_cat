const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) {
    console.error("Request Error:", error);
    return;
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Breed not found.");
  } else {
    console.log(data[0].description);
  }
});