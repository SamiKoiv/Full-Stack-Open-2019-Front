import React from 'react'

const ShowButton = (props) => {
    const { text, country, setShown } = props

    const showCountry = () => {
        console.log('showing country: ', country.name)
        setShown(country)
    }

    return (
        <button onClick={showCountry}>
            {text}
        </button>
    )
}

export default ShowButton