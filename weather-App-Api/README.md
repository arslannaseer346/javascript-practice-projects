💡 #How It Works

User enters a city name in the input field

When the Search button is clicked:

The app sends a request to the Open-Meteo Geocoding API to get the city's latitude and longitude

Using these coordinates, it sends another request to the Open-Meteo Weather API

The API returns the current temperature data

The result is then displayed on the screen with the city name and temperature

🔄 #Workflow

Get city name from input

Fetch coordinates (latitude & longitude)

Fetch weather data using coordinates

Display temperature result

⚠️ #Notes

The app handles empty input validation

Shows "City not found" if the location is invalid

Displays loading text while fetching data