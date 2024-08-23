import React, { useState, useEffect } from 'react';
import { fetchLocationSuggestions, fetchWeatherData } from './api/api.jsx';
import WeatherGraph from './components/WeatherGraph.jsx';

const App = () => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (weatherData) {
      const interval = setInterval(() => {
        setCurrentForecastIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000); // Change forecast every 3 seconds

      return () => clearInterval(interval);
    }
  }, [weatherData]);

  const handleInputChange = async (e) => {
    const input = e.target.value;
    setLocation(input);
    if (input.length > 2) {
      try {
        const suggestions = await fetchLocationSuggestions(input);
        setSuggestions(suggestions);
      } catch (error) {
        console.error("Error fetching location suggestions: ", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setLocation(`${suggestion.name}, ${suggestion.country}`);
    setSuggestions([]);
    setWeatherData(null);
    try {
      const weatherData = await fetchWeatherData(`${suggestion.name}, ${suggestion.country}`);
      setWeatherData(weatherData);
      setLocation('');
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  const handleSearchClick = async () => {
    if (location.length > 2) {
      setWeatherData(null);
      try {
        const weatherData = await fetchWeatherData(location);
        setWeatherData(weatherData);
        setSuggestions([]);
        setLocation('');
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      await handleSearchClick();
    }
  };

  const groupWeatherDataByDay = (data) => {
    const groupedData = {};

    data.forEach(forecast => {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();

      if (!groupedData[date]) {
        groupedData[date] = {
          forecasts: [],
          maxTemp: forecast.main.temp,
          minTemp: forecast.main.temp,
        };
      }

      groupedData[date].forecasts.push(forecast);
      groupedData[date].maxTemp = Math.max(groupedData[date].maxTemp, forecast.main.temp);
      groupedData[date].minTemp = Math.min(groupedData[date].minTemp, forecast.main.temp);
    });

    // Filter out today's date
    const today = new Date().toLocaleDateString();
    const nextDaysData = Object.entries(groupedData).filter(([date]) => date !== today);

    return nextDaysData.slice(0, 7); // Return data for the next 7 days
  };

  return (
    <div className="min-h-screen dark:bg-zinc-900 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold dark:text-neutral-200 mb-4">Weather Dashboard</h1>
      <div className="mb-4 relative flex">
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter location"
          className="p-2 border rounded w-80"
        />
        <button
          onClick={handleSearchClick}
          className="p-2 ml-2 bg-blue-500 text-white rounded">
          Search
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute top-12 left-0 w-full bg-white border rounded shadow-lg z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-200">
                {suggestion.name}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>
      {weatherData && (
        <div className="p-4 m-4 shadow-lg h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
          {/* First Section: Place, date, time, temperature, wind speed, humidity */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl text-white font-bold">{weatherData.city.name}</h2>
              <p className="text-white text-2xl">{Math.round(weatherData.list[0].main.temp)} °C</p>
              <p className="text-white">{new Date(weatherData.list[0].dt * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
              <p className="text-white">Wind Speed: {weatherData.list[0].wind.speed} m/s</p>
              <p className="text-white">Humidity: {weatherData.list[0].main.humidity}%</p>
            </div>

            {/* Second Section: Icon representing the temperature */}
            <div className="flex justify-center mb-4">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                alt="Weather Icon"
                className="w-20 h-20"
              />
            </div>
          </div>

          {/* Third Section: Graph showing weekly analysis */}
          <WeatherGraph weatherData={weatherData} />

          {/* Fourth Section: Summary of the next 7 days' weather */}
          <div>
            <h3 className="text-xl text-white font-bold mb-2">Next 7 Days</h3>
            <div className="m-3">
              {groupWeatherDataByDay(weatherData.list).map(([date, { forecasts, maxTemp, minTemp }], index) => (
                <div key={index} className="bg-gray-700 mb-10 flex text-white p-2 rounded shadow">
                  <div className="w-full">
                    <p className="font-bold m-2">{date}</p>
                    <p className="text-lg m-2">Max: {Math.round(maxTemp)} °C</p>
                    <p className="text-lg m-2">Min: {Math.round(minTemp)} °C</p>
                  </div>
                  {forecasts.map((forecast, subIndex) => (
                    <div key={subIndex} className="w-full mb-2">
                      <div className="p-2">
                        <p>{new Date(forecast.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                      </div>
                      <div className="p-3  m-2">
                        <p className="text-xl">{Math.round(forecast.main.temp)} °C</p>
                        <img
                          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                          alt="Weather Icon"
                          className="w-50 h-50 mx-2"
                        />
                        <p>{forecast.weather[0].description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
