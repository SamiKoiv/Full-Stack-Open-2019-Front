import React from 'react'

const Filter = (props) => {


    const {
        persons,
        searchName,
        setSearchName,
        setSearchHits
    } = props

    const handleSearchNameChange = (event) => {

        const search = event.target.value
        setSearchName(search)

        const hits = [...persons].filter(p =>
            p.name.toLowerCase()
                .startsWith(search.toLowerCase())
        )

        setSearchHits(hits)
    }

    return (
        <div>
            filter shown with <input
                value={searchName}
                onChange={handleSearchNameChange} />
        </div>
    )
}

export default Filter