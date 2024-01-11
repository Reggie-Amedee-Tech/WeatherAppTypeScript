export interface WeatherData {
    id: number;
    name: string;
    timezone: number;
    main: {temp: number, temp_min: number, temp_max: number};
    weather: [{main: string, icon: string, description: string}];
    sys: {country: string};
    wind: {deg: number, gust: number, speed: number};
    dt: number;
}

