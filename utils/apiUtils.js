const axios = require('axios');

class APIUtils {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeather(city) {
        try {
            const response = await axios.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
            return response;
        } catch (error) {
            console.error(`Error fetching weather data: ${error.message}`);
            throw error;
        }
    }
}

module.exports = { APIUtils };
