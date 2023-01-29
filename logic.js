
var city = "";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=49439b1e276c5c0fe6a90aed6c8ed2de`;

var searchForm = $("#search-form")
var searchInput = $("#search-input")
var todayContainer = $("#today")
var forecastContainer = $("#forecast")
var historyContainer = $("#history")
var searchHistory = []





function fetchCity(){
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=49439b1e276c5c0fe6a90aed6c8ed2de`)
  .then(response => response.json())
  .then(data => {
    // Do something with the returned data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
}

function handleSearch(e){
// if there is no value in the search form return
if (!searchInput.val()){
  return;
} 
e.preventDefault()
// var search = searchInput.val().trim();
city = searchInput.val().trim();
fetchCity(city);
// searchInput.val("");
console.log(city)
}

searchForm.on("submit", handleSearch)



//search history button function
//try to get value of search history button (event.target??)
//will do call back to fetchCity() function with the value of the button

//need an event listener for search buttons

//example var 
// var humidity = data.main.humidity
// var humidityEl = $("<p>");
//humidityEl.text("humidity: " + humidity)