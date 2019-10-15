import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
    console.log('App ->')
    const [countries, setCountries] = useState([])
    const [searchPhrase, setSearchPhrase] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        console.log('...retrieve data')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('...retrieval successful')
                setCountries(response.data)
            })
    }, [])

    return (
        <div>
            <Filter
                countries={countries}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                setFiltered={setFiltered}
            />

            <Countries
                filtered={filtered}
            />
        </div>
    )
}

export default App;
