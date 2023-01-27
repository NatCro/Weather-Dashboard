fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=49439b1e276c5c0fe6a90aed6c8ed2de')
  .then(response => response.json())
  .then(data => {
    // Do something with the returned data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });


