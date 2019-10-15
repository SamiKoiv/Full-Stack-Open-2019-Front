import React from 'react';

const Country = ({ country }) => {
    console.log("Country ->", country.name)
    console.log("...showing: ", country.name)

    const languages = () => country.languages
        .map(l =>
            <li key={l.name}>
                {l.name}
            </li>)

    return (
        <div>
            <h2>{country.name}</h2>
            <div>capital {country.capital} <br /></div>
            <div>population {country.population} <br /></div>
            <h3>languages</h3>
            <div>{languages()} <br /></div>
            <img
                src={country.flag}
                alt={country.name + "'s flag"}
                width={150}
                height={92}
                mode='fit'
            />
        </div>
    )
}

export default Country