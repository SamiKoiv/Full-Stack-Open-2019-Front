import React from 'react';
import Country from './Country';
import ShowButton from './ShowButton';

const Countries = (props) => {
    console.log("Countries ->")
    const { filtered, shown, setShown } = props

    const output = () => {

        console.log("...filtering")

        if (shown != null) {
            return <Country country={shown} />
        }

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
            setShown(filtered[0])
            return <div> </div>
        }
        else {
            console.log("...filter result: suitable selection")
            return (filtered
                .map(country =>
                    <div key={country.name}>
                        {country.name} <ShowButton
                            text='show'
                            country={country}
                            setShown={setShown} />
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