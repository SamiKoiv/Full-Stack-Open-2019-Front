import React from 'react'

const Weather = (props) => {
    const { country, weather } = props

    if (country != null && weather != null) {
        const current = weather.current

        return (
            <div>
                <h2>Weather in {weather.location.name}</h2>

                <div><b>temperature:</b> {current.temperature} Celsius</div>

                <img src={current.weather_icons} alt={current.weather_descriptions} />

                <div><b>wind:</b> {current.wind_speed} kph direction {current.wind_dir}</div>
            </div>
        )
    }

    return (
        <div> </div>
    )
}

export default Weather