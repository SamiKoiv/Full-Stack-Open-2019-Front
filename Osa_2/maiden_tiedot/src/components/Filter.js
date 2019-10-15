import React from 'react'

const Filter = (props) => {
    console.log('Filter ->')

    const {
        countries,
        searchPhrase,
        setSearchPhrase,
        setFiltered,
        setShown
    } = props

    const handlePhraseChange = (event) => {
        const phrase = event.target.value
        setSearchPhrase(phrase)
        setShown(null)

        const hits = [...countries].filter(p =>
            p.name.toLowerCase()
                .startsWith(phrase.toLowerCase())
        )

        setFiltered(hits)
    }

    console.log('...return')
    return (
        <form>
            find countries <input
                value={searchPhrase}
                onChange={handlePhraseChange}
            />
        </form>
    )
}

export default Filter