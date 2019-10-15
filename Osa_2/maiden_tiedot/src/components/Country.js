import React from 'react';

const Country = ({ country }) => {
    console.log("accessed", country.name)

    const languages = () => country.languages
        .map(l =>
            <li key={l.name}>
                {l.name}
            </li>)

    return (
        <div>
            <h2>{country.name}</h2>
            capital {country.capital}
            <h3>languages</h3>
            {languages()}
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