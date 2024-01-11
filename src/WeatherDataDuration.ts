export interface WeatherDataDurationForecast {
    dt: number,
    main: {temp: number},
    weather: [{icon: string}]
}