const searchbtn = document.getElementById('btnadd');
const displayresult = document.getElementById('result');

searchbtn.addEventListener('click', async () => {

    const city = document.getElementById('city').value.trim();

    if (city === "") {
        displayresult.innerText = "Please Enter a city name";
        return;
    }

    try {
        displayresult.innerText = "Loading...";

        // Step 1: Get coordinates of city
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        const geoData = await geoRes.json();

        if (!geoData.results) {
            displayresult.innerText = "City not found!";
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // Step 2: Get weather
        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        const weatherData = await weatherRes.json();

        const temp = weatherData.current_weather.temperature;

        displayresult.innerText = `${name}, ${country}: ${temp}°C`;

    } catch (error) {
        console.log(error);
        displayresult.innerText = "Error fetching data!";
    }
});