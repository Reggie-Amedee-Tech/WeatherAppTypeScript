export interface WeatherData {
    id: number;
    name: string;
    timezone: number;
    main: {temp: number};
    weather: [{main: string, icon: string}];
    sys: {country: string};
    wind: {deg: number, gust: number, speed: number}
}

