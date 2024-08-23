import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeatherGraph = ({ weatherData }) => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    if (weatherData) {
      const ctx = chartRef.current.getContext('2d');

      // If a chart instance already exists, destroy it before creating a new one
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }

      // Process weather data to get one highest and one lowest temperature per day
      const dailyData = {};
      weatherData.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        
        if (!dailyData[date]) {
          dailyData[date] = {
            high: forecast.main.temp_max,
            low: forecast.main.temp_min
          };
        } else {
          if (forecast.main.temp_max > dailyData[date].high) {
            dailyData[date].high = forecast.main.temp_max;
          }
          if (forecast.main.temp_min < dailyData[date].low) {
            dailyData[date].low = forecast.main.temp_min;
          }
        }
      });

      // Extract labels and data
      const labels = Object.keys(dailyData).slice(0, 7);
      const highTemps = labels.map(date => dailyData[date].high);
      const lowTemps = labels.map(date => dailyData[date].low);

      myChartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Highest Temperature (°C)',
              data: highTemps,
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
              tension: 0.4,  // Smoother curve
            },
            {
              label: 'Lowest Temperature (°C)',
              data: lowTemps,
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: true,
              tension: 0.4,  // Smoother curve
            }
          ]
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: '#ffffff',  // X-axis label color
              },
              title: {
                display: true,
                text: 'Date',
                color: '#ffffff',
              },
            },
            y: {
              ticks: {
                color: '#ffffff',  // Y-axis label color
              },
              beginAtZero: true,
              title: {
                display: true,
                text: 'Temperature (°C)',
                color: '#ffffff',
              },
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#ffffff'  // Legend color
              }
            }
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 7,
              backgroundColor: '#000000',
              borderColor: '#ffffff',
            },
          },
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 10,
              right: 10,
            }
          }
        }
      });

      // Clean up on component unmount or when the weatherData changes
      return () => {
        if (myChartRef.current) {
          myChartRef.current.destroy();
        }
      };
    }
  }, [weatherData]);

  return (
    <div className="mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-bold mb-2">Weekly Temperature Analysis</h3>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default WeatherGraph;
