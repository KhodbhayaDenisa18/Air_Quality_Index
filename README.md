🌍 Air Quality Monitoring Project
📌 Week 1 Progress (30%)

This is an internship project to build a **web application** that shows **Air Quality Index (AQI)** for different cities.

In Week 1, the focus was on setting up the project and preparing static city data.

✅ Work Done in Week 1

1 .Created the project structure:

AQI-WebApp/

├── index.html   # Main webpage  
├── style.css    # Stylesheet  
├── script.js    # JavaScript logic  
└── cities.json  # AQI details for 30–40 cities  


2.Added cities.json file containing:
  City name
  AQI value
  Pollutant details (PM2.5, PM10, NO₂)

3.Connected cities.json with script.js using fetch API to display AQI details dynamically.

4.Displayed output format (example for Ahmedabad):

🌍 Air Quality Index (AQI) Checker  
Ahmedabad  
Air Quality Status: Moderate 🙂  
PM2.5: 88 µg/m³  
PM10: 160 µg/m³  
NO₂: 30 µg/m³  

5.Verified that city details are properly displayed in the browser.

🖥️ How to Run (Week 1)
Download or clone the project folder.
Open index.html in a browser.
The app will display AQI details loaded from cities.json.

📅 Next Steps (Week 2 Plan)

Integrate OpenAQ API for real-time AQI data.
Show AQI levels with colored indicators (Good, Moderate, Poor, Hazardous).
Add a search/filter option for cities.
