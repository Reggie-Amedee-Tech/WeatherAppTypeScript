import axios from "axios";
import React, {useRef} from "react";
import { useEffect, useState } from "react";
import GeneralWeatherData from "../views/GeneralWeatherData";
import {WeatherData} from '../WeatherData'
import '../styles/WeatherApiCall.css'
import WeatherDataDuration from "../views/WeatherDataDuration";


const WeatherApiCall: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
    const [cityName, setCityName] = useState<string>("");
    const textInputRef = useRef<HTMLInputElement>(null);
    const weatherAPI = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${weatherAPI}`)
            .then(res => {
                setWeatherData([res.data])
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [cityName, weatherAPI])

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredCity = textInputRef.current!.value;
        setCityName(enteredCity)
    }

    return <div className="component-container">
        <div className="form-container">
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="get-weather">Please input a city name.</label>
            <input type="text" id="get-weather" ref={textInputRef}/>
            <button type="submit" onClick={(e) => {
                onSubmitHandler(e)
            }}>Submit</button>
        </form>
        </div>
        <GeneralWeatherData weatherData={weatherData}/>
        <WeatherDataDuration cityName={cityName}/>
    </div>
}

export default WeatherApiCall;