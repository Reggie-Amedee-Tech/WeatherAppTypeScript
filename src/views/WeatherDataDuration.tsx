import axios from "axios";
import React, { useEffect, useState } from "react";
import { WeatherDataDurationForecast } from "../WeatherDataDuration";

interface WeatherApiProp {
    cityName: string
}

const WeatherDataDuration: React.FC<WeatherApiProp> = props => {
    const [weatherDataDuration, setWeatherDataDuration] = useState<WeatherDataDurationForecast[]>([])
    const [loader, setLoader] = useState<Boolean>(false)
    const filteredData = [];

    const weatherAPI = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&appid=${weatherAPI}`)
        .then(res => {
            setWeatherDataDuration(res.data.list)
            setLoader(true)
        })
        .catch(err => {
            console.log(err.message, props.cityName)
        })
    }, [props.cityName])

    for(let i = 0; i < weatherDataDuration.length; i++) {
        if(i % 8 === 0) {
            filteredData.push(weatherDataDuration[i])
        }
    }

    return <div>
        <div>
            {filteredData.length === 5 ? filteredData.map(data => {
                console.log(data, data.dt, data.main.temp)
                const date = data.dt;
                var fullDate = new Date(date * 1000);
                var stringDate = fullDate.toString();
                var day = stringDate.slice(0, 3);

                return <div>
                    <h1>{day}</h1>
                    {data.weather.map(item => {
                        return <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="weather-icon"/>
                    })}
                    <p>{data.main.temp}</p>
                </div>
            }) : <p>Weather Forecast Data</p>}
        </div>

    </div>
}

export default WeatherDataDuration;