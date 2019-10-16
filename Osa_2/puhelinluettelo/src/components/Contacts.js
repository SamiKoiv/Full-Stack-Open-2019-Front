import React from 'react'
import DeleteButton from './DeleteButton'

const Contacts = (props) => {

    const { persons, setPersons, searchName, searchHits } = props

    const results = (searchName.length > 0
        ? searchHits
        : [...persons])
        .map(p =>
            <div key={p.name}>
                {p.name} {p.number}
                <DeleteButton
                    id={p.id}
                    persons={persons}
                    setPersons={setPersons}
                /> <br />
            </div>)

    return (
        <div>
            <h2>Numbers</h2>
            {results}
        </div>)
}

export default Contacts