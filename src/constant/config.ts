export const config = {
  title: "Weather Forecast",
  baseUrl: 'https://weather-forecast-hiramis.loca.lt/',
  oauth: {
    domain: 'dev-ivqax42gc0o7l17y.us.auth0.com',
    client_id: 'mmDoUqMKKsPFvSDlF5x7UwQvWIa2DzDM',
    redirect_uri: window.location.origin,
  },
  weatherApi: {
    domain: 'https://api.openweathermap.org',
    key: '1ca403a4d70e588f60efd5b0ef1347b2'
  }
};
