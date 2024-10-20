document.addEventListener('DOMContentLoaded', function() {
    // Vejr API
    const apiKey = '6aae32a10be8bef8171fbc3b973f7b90';
    const city = 'Copenhagen';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=da`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            weatherDiv.innerHTML = `
                <h2>Temperatur: ${temperature}°C</h2>
                <p>Vejret: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Vis flere blog post
    document.getElementById('load-more').addEventListener('click', function() {
        const extraArticles = document.querySelectorAll('.extra-articles');
        extraArticles.forEach(article => {
            article.style.display = 'block'; 
        });
        this.style.display = 'none'; 
    });

});
