const apiKey = window.WeatherConfig.WEATHER_API_KEY;
let cityLocation = localStorage.getItem('selectedCity') || window.WeatherConfig.DEFAULT_CITY;

function getApiUrl(city) {
    return `${window.WeatherConfig.API_BASE_URL}/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=yes&alerts=no`;
}

function saveCity(city) {
    localStorage.setItem('selectedCity', city);
}

function getWeatherVideoFile(weatherCode, isDay) {
    // Day time video mappings
    const dayVideoMapping = {
        // Sunny conditions
        1000: 'assets/sun.mp4',           // Sunny
        
        // Cloudy conditions  
        1003: 'assets/cloudy.mp4',        // Partly cloudy
        1006: 'assets/cloudy.mp4',        // Cloudy
        1009: 'assets/cloudy.mp4',        // Overcast
        1030: 'assets/cloudy.mp4',        // Mist
        1135: 'assets/cloudy.mp4',        // Fog
        1147: 'assets/cloudy.mp4',        // Freezing fog
        
        // Rain conditions
        1063: 'assets/rain.mp4',          // Patchy rain possible
        1150: 'assets/rain.mp4',          // Patchy light drizzle
        1153: 'assets/rain.mp4',          // Light drizzle
        1168: 'assets/rain.mp4',          // Freezing drizzle
        1171: 'assets/rain.mp4',          // Heavy freezing drizzle
        1180: 'assets/rain.mp4',          // Patchy light rain
        1183: 'assets/rain.mp4',          // Light rain
        1186: 'assets/rain.mp4',          // Moderate rain at times
        1189: 'assets/rain.mp4',          // Moderate rain
        1192: 'assets/rain.mp4',          // Heavy rain at times
        1195: 'assets/rain.mp4',          // Heavy rain
        1198: 'assets/rain.mp4',          // Light freezing rain
        1201: 'assets/rain.mp4',          // Moderate or heavy freezing rain
        1240: 'assets/rain.mp4',          // Light rain shower
        1243: 'assets/rain.mp4',          // Moderate or heavy rain shower
        1246: 'assets/rain.mp4',          // Torrential rain shower
        
        // Wind conditions
        1087: 'assets/wind.mp4',          // Thundery outbreaks possible
        
        // Snow conditions
        1066: 'assets/snow.mp4',          // Patchy snow possible
        1114: 'assets/snow.mp4',          // Blowing snow
        1117: 'assets/snow.mp4',          // Blizzard
        1210: 'assets/snow.mp4',          // Patchy light snow
        1213: 'assets/snow.mp4',          // Light snow
        1216: 'assets/snow.mp4',          // Patchy moderate snow
        1219: 'assets/snow.mp4',          // Moderate snow
        1222: 'assets/snow.mp4',          // Patchy heavy snow
        1225: 'assets/snow.mp4',          // Heavy snow
        1237: 'assets/snow.mp4',          // Ice pellets
        1249: 'assets/snow.mp4',          // Light sleet showers
        1252: 'assets/snow.mp4',          // Moderate or heavy sleet showers
        1255: 'assets/snow.mp4',          // Light snow showers
        1258: 'assets/snow.mp4',          // Moderate or heavy snow showers
        1261: 'assets/snow.mp4',          // Light showers of ice pellets
        1264: 'assets/snow.mp4',          // Moderate or heavy showers of ice pellets
        1279: 'assets/snow.mp4',          // Patchy light snow with thunder
        1282: 'assets/snow.mp4',          // Moderate or heavy snow with thunder
        
        // Storm/Thunder conditions
        1273: 'assets/storm.mp4',         // Patchy light rain with thunder
        1276: 'assets/storm.mp4',         // Moderate or heavy rain with thunder
        
        // Tornado/Severe weather
        1087: 'assets/tornado.mp4'        // Can be used for severe thunderstorms
    };
    
    // Night time video mappings
    const nightVideoMapping = {
        // Clear night
        1000: 'assets/night.mp4',         // Clear night
        
        // Cloudy night conditions  
        1003: 'assets/cloudy-night.mp4',  // Partly cloudy night
        1006: 'assets/cloudy-night.mp4',  // Cloudy night
        1009: 'assets/cloudy-night.mp4',  // Overcast night
        1030: 'assets/cloudy-night.mp4',  // Mist night
        1135: 'assets/cloudy-night.mp4',  // Fog night
        1147: 'assets/cloudy-night.mp4',  // Freezing fog night
        
        // Rain conditions (same videos work for night)
        1063: 'assets/rain.mp4',          // Patchy rain possible
        1150: 'assets/rain.mp4',          // Patchy light drizzle
        1153: 'assets/rain.mp4',          // Light drizzle
        1168: 'assets/rain.mp4',          // Freezing drizzle
        1171: 'assets/rain.mp4',          // Heavy freezing drizzle
        1180: 'assets/rain.mp4',          // Patchy light rain
        1183: 'assets/rain.mp4',          // Light rain
        1186: 'assets/rain.mp4',          // Moderate rain at times
        1189: 'assets/rain.mp4',          // Moderate rain
        1192: 'assets/rain.mp4',          // Heavy rain at times
        1195: 'assets/rain.mp4',          // Heavy rain
        1198: 'assets/rain.mp4',          // Light freezing rain
        1201: 'assets/rain.mp4',          // Moderate or heavy freezing rain
        1240: 'assets/rain.mp4',          // Light rain shower
        1243: 'assets/rain.mp4',          // Moderate or heavy rain shower
        1246: 'assets/rain.mp4',          // Torrential rain shower
        
        // Wind conditions
        1087: 'assets/wind.mp4',          // Thundery outbreaks possible
        
        // Snow conditions (same for night)
        1066: 'assets/snow.mp4',          // Patchy snow possible
        1114: 'assets/snow.mp4',          // Blowing snow
        1117: 'assets/snow.mp4',          // Blizzard
        1210: 'assets/snow.mp4',          // Patchy light snow
        1213: 'assets/snow.mp4',          // Light snow
        1216: 'assets/snow.mp4',          // Patchy moderate snow
        1219: 'assets/snow.mp4',          // Moderate snow
        1222: 'assets/snow.mp4',          // Patchy heavy snow
        1225: 'assets/snow.mp4',          // Heavy snow
        1237: 'assets/snow.mp4',          // Ice pellets
        1249: 'assets/snow.mp4',          // Light sleet showers
        1252: 'assets/snow.mp4',          // Moderate or heavy sleet showers
        1255: 'assets/snow.mp4',          // Light snow showers
        1258: 'assets/snow.mp4',          // Moderate or heavy snow showers
        1261: 'assets/snow.mp4',          // Light showers of ice pellets
        1264: 'assets/snow.mp4',          // Moderate or heavy showers of ice pellets
        1279: 'assets/snow.mp4',          // Patchy light snow with thunder
        1282: 'assets/snow.mp4',          // Moderate or heavy snow with thunder
        
        // Storm/Thunder conditions
        1273: 'assets/storm.mp4',         // Patchy light rain with thunder
        1276: 'assets/storm.mp4'          // Moderate or heavy rain with thunder
    };
    
    // Choose the appropriate mapping based on day/night
    const videoMapping = isDay ? dayVideoMapping : nightVideoMapping;
    
    // Return the mapped video or default
    return videoMapping[weatherCode] || (isDay ? 'assets/sun.mp4' : 'assets/night.mp4');
}


function getBackgroundColor(weatherCode, isDay) {
    // Day background colors
    const dayBgMapping = {
        1000: '#ffe066', // Sunny
        1003: '#b3c6e7', // Partly cloudy
        1006: '#a0a4a8', // Cloudy
        1009: '#888c8f', // Overcast
        1030: '#cfd8dc', // Mist
        1135: '#cfd8dc', // Fog
        1147: '#cfd8dc', // Freezing fog
        1063: '#a4b0be', // Rain
        1150: '#a4b0be',
        1153: '#a4b0be',
        1168: '#a4b0be',
        1171: '#a4b0be',
        1180: '#a4b0be',
        1183: '#a4b0be',
        1186: '#a4b0be',
        1189: '#a4b0be',
        1192: '#a4b0be',
        1195: '#a4b0be',
        1198: '#a4b0be',
        1201: '#a4b0be',
        1240: '#a4b0be',
        1243: '#a4b0be',
        1246: '#a4b0be',
        1087: '#b0bec5', // Wind/Thunder
        1066: '#e0e7ef', // Snow
        1114: '#e0e7ef',
        1117: '#e0e7ef',
        1210: '#e0e7ef',
        1213: '#e0e7ef',
        1216: '#e0e7ef',
        1219: '#e0e7ef',
        1222: '#e0e7ef',
        1225: '#e0e7ef',
        1237: '#e0e7ef',
        1249: '#e0e7ef',
        1252: '#e0e7ef',
        1255: '#e0e7ef',
        1258: '#e0e7ef',
        1261: '#e0e7ef',
        1264: '#e0e7ef',
        1279: '#e0e7ef',
        1282: '#e0e7ef',
        1273: '#b0bec5', // Storm
        1276: '#b0bec5'
    };

    // Night background colors
    const nightBgMapping = {
        1000: '#232946', // Clear night
        1003: '#3a3f58', // Partly cloudy night
        1006: '#2c2f3a', // Cloudy night
        1009: '#232946', // Overcast night
        1030: '#343a40', // Mist night
        1135: '#343a40', // Fog night
        1147: '#343a40', // Freezing fog night
        1063: '#2d3a4b', // Rain night
        1150: '#2d3a4b',
        1153: '#2d3a4b',
        1168: '#2d3a4b',
        1171: '#2d3a4b',
        1180: '#2d3a4b',
        1183: '#2d3a4b',
        1186: '#2d3a4b',
        1189: '#2d3a4b',
        1192: '#2d3a4b',
        1195: '#2d3a4b',
        1198: '#2d3a4b',
        1201: '#2d3a4b',
        1240: '#2d3a4b',
        1243: '#2d3a4b',
        1246: '#2d3a4b',
        1087: '#3a3f58', // Wind/Thunder night
        1066: '#4b4e69', // Snow night
        1114: '#4b4e69',
        1117: '#4b4e69',
        1210: '#4b4e69',
        1213: '#4b4e69',
        1216: '#4b4e69',
        1219: '#4b4e69',
        1222: '#4b4e69',
        1225: '#4b4e69',
        1237: '#4b4e69',
        1249: '#4b4e69',
        1252: '#4b4e69',
        1255: '#4b4e69',
        1258: '#4b4e69',
        1261: '#4b4e69',
        1264: '#4b4e69',
        1279: '#4b4e69',
        1282: '#4b4e69',
        1273: '#3a3f58', // Storm night
        1276: '#3a3f58',
        1087: '#3a3f58', // Tornado/Severe night
    };

    const bgMapping = isDay ? dayBgMapping : nightBgMapping;
    return bgMapping[weatherCode] || (isDay ? '#ffe066' : '#232946');
}


async function getWeatherData(city = cityLocation) {
    document.getElementById('loading-display').classList.remove('hidden');
    document.getElementById('weather-display').classList.add('hidden');
    
    try {
        const apiUrl = getApiUrl(city);
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const currentTemp = data.current.temp_c;
        const currentWindKph = data.current.wind_kph;
        const heatIndex = data.current.feelslike_c;
        const airQualityPm2_5 = data.current.air_quality.pm2_5;
        const locationName = data.location.name;
        const conditionText = data.current.condition.text;
        const conditionCode = data.current.condition.code;
        const isDay = data.current.is_day === 1;

        console.log(`Weather in ${locationName}:`);
        console.log(`  Condition: ${conditionText} (Code: ${conditionCode})`);
        console.log(`  Time: ${isDay ? 'Day' : 'Night'}`);
        console.log(`  Temperature: ${currentTemp}°C`);
        console.log(`  Feels Like (Heat Index): ${heatIndex}°C`);
        console.log(`  Wind Speed: ${currentWindKph} kph`);
        console.log(`  Air Quality (PM2.5): ${airQualityPm2_5}`);
        
        // Forecast data
        const forecastDays = data.forecast.forecastday;
        console.log(`Received forecast for ${forecastDays.length} days`);

        updateWeatherDisplay({
            locationName,
            conditionText,
            currentTemp,
            heatIndex,
            currentWindKph,
            airQualityPm2_5,
            conditionCode,
            isDay,
            forecast: forecastDays
        });
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
        showError();
    }
}

function updateWeatherDisplay(weatherData) {
    document.getElementById('loading-display').classList.add('hidden');
    document.getElementById('error-display').classList.add('hidden');
    
    document.getElementById('location-name').textContent = `Weather in ${weatherData.locationName}`;
    document.getElementById('condition-text').textContent = weatherData.conditionText;
    document.getElementById('temperature').textContent = weatherData.currentTemp;
    document.getElementById('feels-like').textContent = weatherData.heatIndex;
    document.getElementById('wind-speed').textContent = weatherData.currentWindKph;
    document.getElementById('air-quality').textContent = weatherData.airQualityPm2_5;
    
    const weatherContainer = document.getElementById('weather-display');
    const existingIndicator = weatherContainer.querySelector('.is-day, .is-night');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    const dayNightIndicator = document.createElement('div');
    dayNightIndicator.className = weatherData.isDay ? 'is-day' : 'is-night';
    dayNightIndicator.innerHTML = weatherData.isDay ? '☀️' : '🌙';
    weatherContainer.appendChild(dayNightIndicator);
    
    const videoPath = getWeatherVideoFile(weatherData.conditionCode, weatherData.isDay);
    const videoElement = document.getElementById('weather-video-icon');
    const sourceElement = videoElement.getElementsByTagName('source')[0];
    sourceElement.setAttribute('src', videoPath);
    videoElement.load(); 

    const bgColor = getBackgroundColor(weatherData.conditionCode, weatherData.isDay);
    weatherContainer.style.backgroundColor = bgColor;
    
    const textColor = weatherData.isDay ? '#333' : '#f5f5f5';
    const containerTextColor = weatherData.isDay ? '#222' : '#f0f0f0';
    
    const bodyBgColor = weatherData.isDay ? adjustColor(bgColor, 40) : adjustColor(bgColor, -20);
    document.body.style.backgroundColor = bodyBgColor;
    document.body.style.color = textColor;
    weatherContainer.style.color = containerTextColor;
    
    const airQualityValue = parseFloat(weatherData.airQualityPm2_5);
    const airQualityElement = document.getElementById('air-quality');
    
    if (airQualityValue <= 12) {
        // Good
        airQualityElement.style.borderLeftColor = '#2ecc71';
    } else if (airQualityValue <= 35.4) {
        // Moderate
        airQualityElement.style.borderLeftColor = '#f1c40f';
    } else if (airQualityValue <= 55.4) {
        // Unhealthy for Sensitive Groups
        airQualityElement.style.borderLeftColor = '#e67e22';
    } else if (airQualityValue <= 150.4) {
        // Unhealthy
        airQualityElement.style.borderLeftColor = '#e74c3c';
    } else if (airQualityValue <= 250.4) {
        // Very Unhealthy
        airQualityElement.style.borderLeftColor = '#9b59b6';
    } else {
        // Hazardous
        airQualityElement.style.borderLeftColor = '#8e44ad';
    }
    
    if (weatherData.forecast && weatherData.forecast.length > 0) {
        updateForecast(weatherData.forecast);
    }
    
    console.log(`Weather code: ${weatherData.conditionCode}, ${weatherData.isDay ? 'Day' : 'Night'}. Displaying video: ${videoPath}`);
    
    weatherContainer.classList.remove('hidden');
    weatherContainer.style.animation = 'fadeIn 0.8s ease-in-out';
}

function updateForecast(forecastData) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Clear existing forecast cards
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    forecastData.forEach((day, index) => {
        if (index === 0) return; 
        
        const date = new Date(day.date);
        const dayName = days[date.getDay()];
        const maxTemp = day.day.maxtemp_c;
        const minTemp = day.day.mintemp_c;
        const condition = day.day.condition.text;
        const conditionCode = day.day.condition.code;
        
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        
        const videoSrc = getWeatherVideoFile(conditionCode, true);
        

        forecastCard.innerHTML = `
            <div class="day-name">${dayName}</div>
            <video class="forecast-icon" autoplay loop muted playsinline>
                <source src="${videoSrc}" type="video/mp4">
            </video>
            <div class="forecast-temp">${Math.round(maxTemp)}° / ${Math.round(minTemp)}°</div>
            <div class="forecast-condition">${condition}</div>
        `;
        
        forecastContainer.appendChild(forecastCard);
    });
}

function showError() {
    document.getElementById('loading-display').classList.add('hidden');
    document.getElementById('weather-display').classList.add('hidden');
    document.getElementById('error-display').classList.remove('hidden');
}

function adjustColor(hex, amount) {
    hex = hex.replace('#', '');
    
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    r = Math.max(0, Math.min(255, r + amount));
    g = Math.max(0, Math.min(255, g + amount));
    b = Math.max(0, Math.min(255, b + amount));
    
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');
    
    return `#${rHex}${gHex}${bHex}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Set up the city selector
    const citySelect = document.getElementById('city-select');
    if (citySelect && window.WeatherConfig.INDIAN_CITIES) {
        citySelect.innerHTML = '';
        
        // Populate with cities from config
        window.WeatherConfig.INDIAN_CITIES.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        
        // Set the default city
        for (let i = 0; i < citySelect.options.length; i++) {
            if (citySelect.options[i].value.toLowerCase() === cityLocation.toLowerCase()) {
                citySelect.selectedIndex = i;
                break;
            }
        }
    }
    
    // Set up update city button
    const updateCityButton = document.getElementById('update-city');
    if (updateCityButton) {
        updateCityButton.addEventListener('click', function() {
            const selectedCity = citySelect.value;
            cityLocation = selectedCity; 
            saveCity(selectedCity); 
            getWeatherData(selectedCity);
        });
    }
    
    // Set up retry button
    const retryButton = document.getElementById('retry-button');
    if (retryButton) {
        retryButton.addEventListener('click', function() {
            document.getElementById('error-display').classList.add('hidden');
            document.getElementById('loading-display').classList.remove('hidden');
            getWeatherData();
        });
    }
    
    // Initial weather data load
    getWeatherData();
});