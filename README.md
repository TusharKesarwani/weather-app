# Weather App Project

## Overview

The Weather App is a responsive web application built with React.js that allows users to search for and view the current weather conditions for any city. By leveraging the OpenWeatherMap API, the app provides accurate and up-to-date weather information. The application is designed to be simple and intuitive, enabling users to quickly find the weather information they need.

## Key Features

- **City Search**: Users can search for weather information by entering a city name in the search bar.
- **Current Weather**: Displays the current temperature, weather conditions, and location for the searched city.
- **Weather Icon**: Shows a weather icon representing the current weather conditions.
- **Error Handling**: Provides user-friendly error messages for invalid city names or network issues.
- **Responsive Design**: Ensures a seamless experience across different devices, including desktops, tablets, and smartphones.

## Installation

### Clone the repository:

```sh
git clone https://github.com/TusharKesarwani/weather-app.git
```

### Navigate to the project directory:

```sh
cd weather-app
```

### Install dependencies:

```sh
npm install
```

### Obtain an API Key:

1. Sign up for a weather API service (e.g., OpenWeatherMap).
2. Obtain your API key from the service.

### Configure Environment Variables:

Create a `.env` file in the project root and add your API key:

```sh
API_KEY=your_api_key_here
```

### Start the development server:

```sh
npm start
```

The app will run at http://localhost:3000.

## Usage

1. Open your browser and navigate to http://localhost:3000.
2. Use the search bar to enter a city name and get the current weather information.
3. View the current temperature, weather conditions, and location for the searched city.
4. If an invalid city name is entered, a user-friendly error message will be displayed.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **API**: OpenWeatherMap
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: CSS Modules or styled-components
- **Material-UI**: Used for the search bar component

## Credits

This project was created by [Tushar Kesarwani](https://github.com/TusharKesarwani) to provide users with a simple and effective way to access weather information.
