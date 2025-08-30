const form = document.getElementById("cityForm");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result");
const cityName = document.getElementById("cityName");
const aqiValue = document.getElementById("aqiValue");
const pollutantsDiv = document.getElementById("pollutants");

// Load city data from local JSON
let citiesData = [];

async function loadCities() {
  try {
    const response = await fetch("cities.json");
    citiesData = await response.json();
    console.log("Cities loaded:", citiesData);
  } catch (error) {
    console.error("Error loading cities.json:", error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim().toLowerCase();

  if (city === "") return;

  // Search city in JSON
  const cityData = citiesData.find(
    (c) => c.city.toLowerCase() === city
  );

  if (!cityData) {
    cityName.innerText = "No data found for this city 😔";
    aqiValue.innerText = "";
    pollutantsDiv.innerHTML = "";
    result.classList.remove("hidden");
    return;
  }

  // Show data
  cityName.innerText = cityData.city;
  pollutantsDiv.innerHTML = `
    <p>PM2.5: ${cityData.pm25} µg/m³</p>
    <p>PM10: ${cityData.pm10} µg/m³</p>
    <p>NO₂: ${cityData.no2} µg/m³</p>
  `;

  // Simple AQI status message (based on PM2.5)
  let status = "";
  if (cityData.pm25 <= 50) status = "Good 😊";
  else if (cityData.pm25 <= 100) status = "Moderate 🙂";
  else if (cityData.pm25 <= 200) status = "Unhealthy 😷";
  else status = "Very Unhealthy/Severe ☠️";

  aqiValue.innerText = `Air Quality Status: ${status}`;
  result.classList.remove("hidden");
});

// Initialize data
loadCities();
