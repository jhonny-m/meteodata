# MeteoData App

This React app allows user to search and compare temperature in celcius from 3 or more different cities. Aswell to check the time of sunrise and sunset.
The app includes an small express API that will comunicate with an external API.

## Getting Started
To use the app you need an [Open Weather Map](https://openweathermap.org/) API key.

## Installation

Make sure you have Node (version 12+) and npm (6+) installed. 
after cloning the repo, you need to install the dependencies individually for the client and server. On the root folder

```bash
npm install
```
to install the server dependencies, on the root folder run:
```bash
cd server/
npm install
```
And for the client go back to the root folder and run:
```bash
cd client/
npm install
```

## Running the Application 

The application uses a `.env`  file for the client and one for the server. To be able to run the application you need to create them.
To run locally we provide a template, to use them run:
```bash
cp client/.env_template client/.env
cp server/.env_template server/.env
```
The client template suffices enough information to run the application locally, but the server also needs [Open Weather Map](https://openweathermap.org/) API key, after you have this key just replace `alphanumeric0key123` for `OWM_KEY` in the  `server/.env` file.
