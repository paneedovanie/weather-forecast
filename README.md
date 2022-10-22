# weather-forecast

Create a simple application for retrieving the city's weather data.

## Technology used
1. [VueJS](https://vuejs.org) - JS Framework used to make UI
2. [OAuth0](https://auth0.com) + [GitHub](https://github.com) - Used for login
3. [OpenWeather API](https://openweathermap.org) - Source of weather data

### Dependencies
1. [vue-router](https://router.vuejs.org/) - For creating SPA
2. [@auth0/auth0-vue](https://www.npmjs.com/package/@auth0/auth0-vue) - Library that helps us used 0Auth0 API
3. [axios](https://www.npmjs.com/package/axios) - Used for making request
4. [date-fns](https://date-fns.org) - To easily format date

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Expose the app to the internet (So we can use the OAuth0 + GitHub login)

```sh
npx lt --port 5173 --subdomain weather-forecast-hiramis
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
