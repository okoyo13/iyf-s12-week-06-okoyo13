# Async JavaScript & Weather Dashboard

## Project Overview

This repository contains my Week 06 work for the IYF Web Development program. It focuses on **Asynchronous JavaScript**, working with APIs, handling HTTP requests, and building a Weather Dashboard.

The Weather Dashboard allows users to search for a city and view its current weather information using the OpenWeatherMap API.

## Live Demo

[View My Weather Dashboard](https://okoyo13.github.io/iyf-s12-week-06-okoyo13/)

## Features

- Search for weather information by city name.
- Display city name and country.
- Show current temperature in Celsius.
- Display weather icons and descriptions.
- Show feels-like temperature.
- Display humidity, wind speed, and atmospheric pressure.
- Loading indicator while fetching weather data.
- Error handling for invalid cities and network problems.
- Save the five most recent searches using Local Storage.
- Click recent searches to retrieve weather information again.
- Prevent duplicate cities in recent searches.
- Responsive design for different screen sizes.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Async/Await
- OpenWeatherMap API
- Local Storage
- Git and GitHub
- GitHub Actions
- GitHub Pages

## Project Structure

```text
iyf-s12-week-06-okoyo13/
│
├── index.html
├── styles.css
├── app.js
├── async-practice.js
├── config.example.js
├── .gitignore
│
└── .github/
    └── workflows/
        └── deploy.yml
```

**Important files:**

- `index.html` – Provides the Weather Dashboard structure.
- `styles.css` – Contains the dashboard styling and responsive layout.
- `app.js` – Handles API requests, weather display, errors, and recent searches.
- `async-practice.js` – Contains asynchronous JavaScript exercises, including callbacks, promises, async/await, and HTTP requests.
- `config.example.js` – Provides a template for the API configuration.
- `deploy.yml` – Automates deployment to GitHub Pages.

## API Integration

This project uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current).

The application retrieves weather information using the Fetch API and `async/await`.

Weather data is requested using the selected city name and an API key.

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/okoyo13/iyf-s12-week-06-okoyo13.git
```

### 2. Enter the project directory

```bash
cd iyf-s12-week-06-okoyo13
```

### 3. Configure your API key

Create a free account at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.

Copy `config.example.js` and rename the copy to `config.js`.

Open `config.js` and add your API key:

```javascript
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
```

**Security note:** Never commit your real `config.js` file or share your API key publicly. It is excluded through `.gitignore`.

### 4. Open the application

Open `index.html` using the VS Code Live Server extension.

Search for a city to view its current weather information.

## Deployment

The project is deployed using **GitHub Pages and GitHub Actions**.

The deployment workflow:

1. Checks out the repository.
2. Retrieves the `OPENWEATHER_API_KEY` repository secret.
3. Generates `config.js` during deployment.
4. Builds and uploads the project files.
5. Deploys the application to GitHub Pages.

The API key is stored in:

**GitHub Repository → Settings → Secrets and variables → Actions**

The secret name is:

```text
OPENWEATHER_API_KEY
```

The real API key is never committed to the repository.

## What I Learned

Through this assignment, I gained practical experience with:

- Understanding synchronous and asynchronous JavaScript.
- Working with callbacks and callback functions.
- Understanding callback hell and promises.
- Using `async` and `await`.
- Making GET and POST requests using Fetch API.
- Handling HTTP responses and errors.
- Working with external APIs and JSON data.
- Using `localStorage` to save application data.
- Updating HTML elements dynamically using JavaScript.
- Protecting API keys using environment secrets.
- Automating deployment using GitHub Actions.
- Publishing a project using GitHub Pages.

## Author

GitHub: [@okoyo13](https://github.com/okoyo13)
