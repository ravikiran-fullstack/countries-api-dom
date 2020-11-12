// Solving problems using array functions on rest countries data.

// Get all the countries from Asia continent using Filter function

function allCountriesInAsia(data){
  let asianCountries = data.filter(country => country.region === 'Asia');
  return asianCountries; 
}

// Get all the countries with population of less than 2 lacks using Filter function
function getCountriesWithPopLessThan2Lakhs(data){
  return data.filter(country => country.population < 200000);
}

// Print the following details name, capital, flag using forEach function
function printCountryDetails(data){
  data.forEach(country => {
    console.log(country.name, country.capital, country.flag);
  });
}

// Print the total population of countries using reduce function
function calculateTotalPopulationOfWorld(data){
  return data.reduce((acc, country)=>{
    return country.population + acc;
  },0)
}

// Print the total population of countries in Asia continent using reduce and filter function
function calculateTotalPopulationOfAsia(data){
  //console.log('data', data);
  let asianCountries = data.filter(country => country.region === 'Asia');
  //console.log(asianCountries);
  return asianCountries.reduce((currentValue, country) => country.population + currentValue, 0)
  //console.log(total)
}

// Print the country which use US Dollars as currency. 
function getCountriesWithUSDCurrency(data){
  return data.filter(country => country.currencies[0].code === "USD");
}

function retrieveCountriesDataXml() {
  let req = new XMLHttpRequest(); // 1. Create a new XMLHttpRequest object
  let countriesData;
  req.open("GET", "https://restcountries.eu/rest/v2/all", true); // 2. Initialize it: GET-request for the URL

  req.send(); // 3. Send the request

  req.onload = function () {
    if (req.status != 200) {
      console.log(`Error ${req.status}: ${req.statusText}`);
    } else {
      countriesData = JSON.parse(req.response);
      //console.log(countriesData);
      console.log('All Countries in Asia',allCountriesInAsia(countriesData));
      console.log('*********************************************************');
      console.log('Countries with population less than 2 lakhs',getCountriesWithPopLessThan2Lakhs(countriesData));
      console.log('*********************************************************');
      printCountryDetails(countriesData);
      console.log('*********************************************************');
      console.log('World\'s Population ',calculateTotalPopulationOfWorld(countriesData));
      console.log('*********************************************************');
      console.log('Asia\'s Total population',calculateTotalPopulationOfAsia(countriesData));
      console.log('*********************************************************');
      console.log('All countries with USD as their currency',getCountriesWithUSDCurrency(countriesData));
    }
  };

  // Add error handling to the xml http request code
  req.onerror = function () {
    console.log("Request failed", req);
  };
}


function retrieveCountriesDataFetch(){
  const url = 'https://restcountries.eu/rest/v2/all';

  fetch(url)
    .then(res => res.json())
    .then(data => {calculatePop(data)})
    .catch(err => console.log(err));
}

retrieveCountriesDataXml();