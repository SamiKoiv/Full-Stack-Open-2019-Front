import React, { useState, useEffect } from 'react';
import Networking from './components/Networking'
import Countries from './components/Countries';
import Filter from './components/Filter';
import Weather from './components/Weather';

const App = () => {
    console.log('App ->')
    const [countries, setCountries] = useState([])
    const [searchPhrase, setSearchPhrase] = useState('')
    const [filtered, setFiltered] = useState([])
    const [shown, setShown] = useState(null)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        Networking.fetchCountries(setCountries)
    }, [])

    useEffect(() => {
        Networking.fetchCapitalWeather(shown, setWeather)
    }, [shown])

    console.log('...return')
    return (
        <div>
            <Filter
                countries={countries}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                setFiltered={setFiltered}
                setShown={setShown}
            />

            <Countries
                filtered={filtered}
                shown={shown}
                setShown={setShown}
            />

            <Weather
                country={shown}
                weather={weather}
            />
        </div>
    )
}

export default App;
