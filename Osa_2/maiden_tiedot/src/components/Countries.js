import React from 'react';
import Country from './Country';

const Countries = (props) => {
    console.log("Countries ->")
    const { filtered } = props

    const output = () => {

        console.log("...filtering")

        if (filtered.length === 0) {
            console.log("...filter result: no matches")
            return (<div>no matches</div>)
        }
        else if (filtered.length > 10) {
            console.log("...filter result: too many matches")
            return (
                <div>
                    too many matches, specify another filter
                </div>)
        }
        else if (filtered.length === 1) {
            console.log("...filter result: single match: ", filtered[0].name)
            console.log(filtered[0])
            return <Country country={filtered[0]} />
        }
        else {
            console.log("...filter result: suitable selection")
            return (filtered
                .map(country =>
                    <div key={country.name}>
                        {country.name}
                    </div>)
            )
        }
    }

    console.log('...return')
    //console.log(filtered)
    return (
        output())
}

export default Countries