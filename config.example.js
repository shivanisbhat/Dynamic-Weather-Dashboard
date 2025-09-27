// Weather App Configuration
// Replace 'YOUR_API_KEY_HERE' with your actual WeatherAPI.com API key

const config = {
    WEATHER_API_KEY: 'YOUR_API_KEY_HERE', // Get your key from weatherapi.com
    DEFAULT_CITY: 'Mumbai',
    API_BASE_URL: 'https://api.weatherapi.com/v1',
    INDIAN_CITIES: [
        'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
        'Kolkata', 'Pune', 'Jaipur', 'Ahmedabad', 'Kochi',
        'Lucknow', 'Chandigarh', 'Bhopal', 'Indore', 'Guwahati'
    ]
};

window.WeatherConfig = config;