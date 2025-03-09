const { test, expect } = require('@playwright/test');
const { APIUtils } = require('../utils/apiUtils');

test('Verify OpenWeather API for Islamabad', async () => {  
  const API_KEY = "c46aebb7c927fff01020c541c92e0d04";  // Your OpenWeather API key
  const CITY = "Islamabad";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
  const apiUtils = new APIUtils(URL);
  const response = await apiUtils.getWeather(CITY);

    // Assert response status
    expect(response.status).toBe(200);

    // Log and assert temperature
    console.log(`Temperature in Islamabad: ${response.data.main.temp}°C`);
    expect(typeof response.data.main.temp).toBe('number');
});