document.addEventListener('DOMContentLoaded', function() {
    const weatherContainer = document.getElementById('weather-container');
    const apiKey = '6aae32ad69c2a785bc8be4392a16f0fe26794f8';
    const lat = 55.676098;
    const lon = 12.568337;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const dailyWeather = data.daily;
            dailyWeather.forEach(day => {
                const date = new Date(day.dt * 1000);
                const weatherDiv = document.createElement('div');
                weatherDiv.innerHTML = `
                    <p><strong>${date.toLocaleDateString()}</strong></p>
                    <p>Vejr: ${day.weather[0].description}</p>
                    <p>Temperatur: ${Math.round(day.temp.day - 273.15)}°C</p>
                `;
                weatherContainer.appendChild(weatherDiv);
            });
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
