import React from 'react'

const Filter = (props) => {
    console.log('filter enter')
    const {
        countries,
        searchPhrase,
        setSearchPhrase,
        filtered,
        setFiltered
    } = props

    return (
        <form>
            find countries <input
                value={searchPhrase}
            />
        </form>
    )
}

export default Filter