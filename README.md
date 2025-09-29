# Dynamic Weather Dashboard

A beautiful and responsive weather application that displays current weather conditions and a 2-day forecast for cities in India. The app features dynamic video backgrounds that change based on weather conditions and time of day.

![Weather Dashboard](Weatherapp.png)

## Features

- **Current weather conditions** with real-time data
- **2-day weather forecast** with detailed information
- **Dynamic video backgrounds** that change based on weather conditions
- **City selector** for 15+ major Indian cities
- **Fully responsive design** - works on mobile, tablet, and desktop
- **Detailed weather metrics**: humidity, wind speed, pressure, visibility, UV index
- **Automatic day/night mode** based on local time
- **Fast and lightweight** - built with vanilla JavaScript

## Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A free API key from [WeatherAPI.com](https://www.weatherapi.com/)

### Installation

1. **Clone this repository**
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

2. **Copy the example configuration file**

**Windows (Command Prompt):**
```cmd
copy config.example.js config.js
```

3. **Get your free API key**
   - Go to [WeatherAPI.com](https://www.weatherapi.com/)
   - Sign up for a free account
   - Copy your API key from the dashboard

4. **Add your API key to config.js**

**Windows:**
```cmd
notepad config.js
```
**Replace this line:**
```javascript
WEATHER_API_KEY: 'YOUR_API_KEY_HERE',
```
**With your actual API key:**
```javascript
WEATHER_API_KEY: 'abc123def456ghi789',
```

**Save the file!**
5. **Open the application**

**Option A: Direct file opening**

**Windows:**
```cmd
start index.html
```

Or simply **double-click** the `index.html` file in your file explorer.

**Option B: Using a local server (Recommended)**

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server
```

Then open your browser and navigate to:
```
http://localhost:8000
```

## Project Structure

```
weather-dashboard/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── app.js                  # JavaScript application logic
├── config.example.js       # Example configuration file (commit this)
├── config.js              # Your actual config with API key (DON'T commit)
├── .gitignore             # Git ignore file
├── README.md              # This file
└── Weatherapp.png         # Screenshot (optional)
```

##  Configuration

### Step 2: Create Your Configuration File

The repository includes `config.example.js` as a template. You need to copy it to create your own `config.js` file where you'll add your API key.
**Why?** The `config.example.js` is safe to share (no secrets), but your `config.js` will contain your personal API key and is ignored by Git.

#### Windows (Command Prompt)
```cmd
copy config.example.js config.js
```
After this step, you should have both files:
- `config.example.js` - Template (don't edit this)
- `config.js` - Your personal config (edit this one)
---

## Dynamic Backgrounds

The app automatically changes video backgrounds based on:
- **Sunny**: Clear sky with sun
- **Cloudy**: Overcast and cloudy conditions
- **Rainy**: Rain, drizzle, or storms
- **Night**: Nighttime across all weather conditions

## Supported Cities

The app comes pre-configured with these Indian cities:
- Mumbai
- Delhi
- Bangalore
- Hyderabad
- Chennai
- Kolkata
- Pune
- Ahmedabad
- Jaipur
- Kochi
- Lucknow
- Chandigarh
- Goa
- Surat
- Indore

You can easily add more cities by editing the `INDIAN_CITIES` array in `config.js`.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **WeatherAPI.com** - Real-time weather data
- **Pixabay Videos** - Dynamic video backgrounds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Note

**IMPORTANT:** Never commit your `config.js` file with your actual API key to GitHub!

The `.gitignore` file is configured to exclude `config.js` from version control. Always use `config.example.js` as a template.

## Troubleshooting

### Weather data not loading?
- Check that you've replaced `YOUR_API_KEY_HERE` with your actual API key
- Verify your API key is valid at [WeatherAPI.com](https://www.weatherapi.com/)
- Check browser console (F12) for error messages
- Ensure you're connected to the internet

### Background video not playing?
- Try using a local server instead of opening the file directly
- Check your browser's autoplay policy settings
- Ensure you have a stable internet connection

### API rate limit exceeded?
- Free tier allows 1,000,000 calls per month
- If exceeded, upgrade your plan or wait for the monthly reset

## License

MIT License

Copyright (c) 2024 Weather Dashboard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including, without limitation, the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

For questions or suggestions, please open an issue on GitHub.

## Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Video backgrounds from [Pixabay](https://pixabay.com/)
- Icons and design inspiration from modern weather apps

---

Made with ❤️ for weather enthusiasts
