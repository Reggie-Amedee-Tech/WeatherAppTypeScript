import React from "react"

interface WeatherDataProps {
    weatherData: {
    id: number,
    name: string, 
    timezone: number,
    main: {temp: number},
    weather: [{main: string, icon: string}],
    sys: {country: string},
    wind: {deg: number, gust: number, speed: number}
    }[]
}

const GeneralWeatherData: React.FC<WeatherDataProps> = props => {

    console.log(props.weatherData)

    return <>
        {props.weatherData.length < 1 ? <p>LOADING...</p> : props.weatherData.map(data => {
            return <div key={data.id}>
                <h1>{data.name}</h1>
                <p>{data.sys.country}</p>
                <p>{data.timezone}</p>
                <p>{data.main.temp}</p>
                {data.weather.map(item => {
                    return <div>
                        <p>{item.main}</p>
                        <img src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="weather-icon" />
                    </div>
                    
                })}

                <p>{data.wind.speed}</p>
                </div>
        })}
        </>
    
}

export default GeneralWeatherData;