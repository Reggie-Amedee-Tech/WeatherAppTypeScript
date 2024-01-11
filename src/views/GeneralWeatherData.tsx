import React from "react"
import '../styles/GeneralWeatherData.css'

interface WeatherDataProps {
    weatherData: {
        id: number,
        name: string,
        timezone: number,
        main: { temp: number, temp_min: number, temp_max: number },
        weather: [{ main: string, icon: string, description: string }],
        sys: { country: string },
        wind: { deg: number, gust: number, speed: number },
        dt: number
    }[]
}

const GeneralWeatherData: React.FC<WeatherDataProps> = props => {



    return <div className="weather-data-container">

        {props.weatherData.length < 1 ? <div className="weather-data-section"><p>Please type in City Name</p></div> : props.weatherData.map(data => {
            const date = props.weatherData[0].dt
            var fullDate = new Date(date * 1000)
            var stringDate = fullDate.toString()
            var shortHandDate = stringDate.slice(3, 15)
            var day = stringDate.slice(0, 3)
            return <div key={data.id} className="weather-data-section">
                <div className="weather-data-top">
                    <h1>{data.name}</h1>
                    <div className="min-max">
                        <p>{Math.floor(data.main.temp_min)}</p>
                        <p>{Math.floor(data.main.temp_max)}</p>
                    </div>
                </div>
                <div className="weather-data-middle">
                    <div className="weather-data-middle-left">
                        <p>{day}</p>
                        <p>{shortHandDate}</p>
                        <p>{Math.floor(data.wind.speed)}</p>
                    </div>
                    <div className="weather-data-middle-center">
                        {data.weather.map(item => {
                            return <div className="weather-data-middle-center-middle">
                                <img src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`} alt="weather-icon" className="general-weather-icon"/>
                                <p className="main-temp">{item.main}</p>
                            </div>
                        })}
                    </div>
                    <h1 className="main-degree">{Math.floor(data.main.temp)}</h1>
                </div>
            </div>
        })}
    </div>

}

export default GeneralWeatherData;