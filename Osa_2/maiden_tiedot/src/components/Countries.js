import React from 'react'

const Countries = (props) => {
    const { countries, searchMatches } = props

    return (
        <div>
            {countries
                .map(country =>
                    <div key={country.name}>
                        {country.name}
                    </div>)}
        </div>
    )
}

export default Countries