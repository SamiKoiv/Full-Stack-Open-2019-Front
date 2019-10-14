import React, { useState, useEffect } from 'react';
import axios from 'axios'
//import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {

    const [countries, setCountries] = useState([])
    const [searchPhrase, setSearchPhrase] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        console.log('retrieve data')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('retrieval successful')
                console.log(response.data)
                setCountries(response.data)
            })
    }, [])

    return (
        <div>
            <Filter
                countries={countries}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                filtered={filtered}
                setFiltered={setFiltered}
            />

            {countries
                .map(c =>
                    <div key={c.name}>
                        {c.name}
                    </div>)}
        </div>
    )
}

export default App;
