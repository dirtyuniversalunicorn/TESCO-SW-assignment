# Weather App Assignment

This project is a weather forecast application built using React.js. It integrates with the OpenWeather API to provide users with real-time weather data for various locations. The app allows users to search for cities, view current weather conditions, and see a 5-day weather forecast. It also supports geolocation to quickly display the weather for the user's current location.

## Features

- Search for City: Users can search for weather conditions in any city using the search functionality.
- Current Weather: Displays the current weather conditions for the selected city.
- 5-Day Forecast: Provides a 5-day weather forecast, with information such as temperature, weather conditions, and date.
- Geolocation: A button that allows users to fetch the weather data for their current location.
- Responsive Design: Mobile-friendly design for easy access on different devices.
- Debounced Search: The search input uses debouncing to avoid unnecessary API calls while typing.

## Components Overview

- CurrentDayWeather: Displays current weather (temperature, humidity, condition).
- Forecast: Shows a 5-day weather forecast.
- GeolocationButton: Retrieves weather data based on the user’s location.
- SearchPlace: Enables city search functionality for fetching weather data.

## Hooks

- useCities: Fetches and manages city data.
- useDebounce: Optimizes API calls by debouncing user input.
- useGeolocation: Retrieves the user's current location.
- useUserLanguage: Detects and provides the user’s preferred language.

## Providers

- SearchProvider: Handles states returned from OpenWeatherAPI

## Supported Browsers

- Google Chrome latest
- Microsoft Edge latest
- Mozzila Firefox latest

## How to Run the Project

1. Clone the repository.
2. Run npm install to install dependencies.
3. Obtain an API key from OpenWeather and set it in your environment.
4. Run npm run dev to start the development server.
5. Visit http://localhost:5174 to view the application.
