import React, { useState, useEffect } from 'react';
import { fetchLocationSuggestions, fetchWeatherData } from './api/api.jsx';
import Chart from 'chart.js/auto';  // Import Chart.js for the weekly analysis graph

const App = () => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [currentForecastIndex, setCurrentForecastIndex] = useState(0);

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
    setWeatherData(null);  // Clear previous weather data
    try {
      const weatherData = await fetchWeatherData(`${suggestion.name}, ${suggestion.country}`);
      setWeatherData(weatherData);
      setLocation('');  // Clear the input field
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  const handleSearchClick = async () => {
    if (location.length > 2) {
      setWeatherData(null);  // Clear previous weather data
      try {
        const weatherData = await fetchWeatherData(location);
        setWeatherData(weatherData);
        setSuggestions([]);
        setLocation('');  // Clear the input field
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
        groupedData[date] = [];
      }
      
      if (groupedData[date].length < 3) { // Limit to 3 entries per day
        groupedData[date].push(forecast);
      }
    });

    return Object.entries(groupedData).slice(0, 7); // Limit to 7 days
  };

  useEffect(() => {
    if (weatherData) {
      const ctx = document.getElementById('weeklyAnalysisChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: weatherData.list.slice(0, 7).map(forecast => new Date(forecast.dt * 1000).toLocaleDateString()),
          datasets: [{
            label: 'Temperature (°C)',
            data: weatherData.list.slice(0, 7).map(forecast => forecast.main.temp),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }]
        }
      });
    }
  }, [weatherData]);

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <div className="mb-4 relative flex">
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}  // Add the onKeyPress event here
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
        <div className="bg-gray-500 p-4 m-4 rounded shadow-lg w-full max-w-4xl">
          {/* First Section: Place, date, time, temperature, wind speed, humidity */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl text-white font-bold">{weatherData.city.name}</h2>
              <p className='text-white text-2xl'>{Math.round(weatherData.list[0].main.temp)} °C</p>
              <p className='text-white'>{new Date(weatherData.list[0].dt * 1000).toLocaleString()}</p>
              <p className='text-white'>Wind Speed: {weatherData.list[0].wind.speed} m/s</p>
              <p className='text-white'>Humidity: {weatherData.list[0].main.humidity}%</p>
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
          <div className="mb-4 bg-white" >
            <h3 className="text-2xl text-white font-bold mb-2">Weekly Analysis</h3>
            <canvas id="weeklyAnalysisChart"></canvas>
          </div>

          {/* Fourth Section: Summary of the next 7 days' weather */}
          <div>
            <h3 className="text-xl  text-white font-bold mb-2">Next 7 Days</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {groupWeatherDataByDay(weatherData.list).map(([date, forecasts], index) => (
                <div key={index} className="bg-gray-700 text-white p-2 rounded shadow">
                  <p className="font-bold">{date}</p>
                  {forecasts.map((forecast, subIndex) => (
                    <div key={subIndex} className="flex w-full justify-start mb-2">
                      <div className='p-5 m-3'>
                        <p className='text-xl'>{Math.round(forecast.main.temp)} °C</p>
                        <p>{new Date(forecast.dt * 1000).toLocaleTimeString()}</p>
                        <p>{forecast.weather[0].description}</p>
                      </div>
                      <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                        alt="Weather Icon"
                        className="w-50 h-50 mx-auto"
                      />
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
