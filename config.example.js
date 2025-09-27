// Example configuration file for Weather App
// Copy this file to config.js and update with your actual API key

const config = {
    WEATHER_API_KEY: 'your_weatherapi_key_here', // Get your key from weatherapi.com
    DEFAULT_CITY: 'Mumbai',
    API_BASE_URL: 'https://api.weatherapi.com/v1',
    INDIAN_CITIES: [
        'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
        'Kolkata', 'Pune', 'Jaipur', 'Ahmedabad', 'Kochi',
        'Lucknow', 'Chandigarh', 'Bhopal', 'Indore', 'Guwahati'
    ]
};

window.WeatherConfig = config;