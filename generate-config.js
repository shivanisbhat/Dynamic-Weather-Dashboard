// generate-config.js - Generates config.js from .env file
require('dotenv').config(); // Load .env file
const fs = require('fs');

// Get API key from environment variable or use a fallback for static deployment
const apiKey = process.env.WEATHER_API_KEY || 'YOUR_API_KEY_HERE';

// Generate config content
const configContent = `// Auto-generated config file from environment variables
const config = {
    WEATHER_API_KEY: '${apiKey}',
    DEFAULT_CITY: 'Mumbai',
    API_BASE_URL: 'https://api.weatherapi.com/v1',
    INDIAN_CITIES: [
        'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
        'Kolkata', 'Pune', 'Jaipur', 'Ahmedabad', 'Kochi',
        'Lucknow', 'Chandigarh', 'Bhopal', 'Indore', 'Guwahati'
    ]
};

window.WeatherConfig = config;`;

// Write the config file
fs.writeFileSync('config.js', configContent);
console.log(' Config file generated successfully!');
