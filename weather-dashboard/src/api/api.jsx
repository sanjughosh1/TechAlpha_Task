// src/api.js
import axios from 'axios';

// https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=0de865ee17c4ae6e5956ba3877128606

const API_KEY = '0de865ee17c4ae6e5956ba3877128606'

// Function to fetch location suggestions based on user input
export const fetchLocationSuggestions = async (query) => {
  const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
    params: {
      q: query,
      limit: 5,
      appid: API_KEY,
    },
  });
  return response.data;
};

// Function to fetch weather data for a given location
export const fetchWeatherData = async (location) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    params: {
      q: location,
      units: 'metric',
      appid: API_KEY,
    },
  });
  return response.data;
};
