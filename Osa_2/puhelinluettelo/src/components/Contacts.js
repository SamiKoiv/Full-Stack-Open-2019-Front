import React from 'react'

const Contacts = (props) => {

    const { persons, searchName, searchHits } = props

    const results = (searchName.length > 0
        ? searchHits
        : [...persons])
        .map(p =>
            <div key={p.name}>
                {p.name} {p.number} <br />
            </div>)

    return (
        <div>
            <h2>Numbers</h2>
            {results}
        </div>)
}

export default Contacts