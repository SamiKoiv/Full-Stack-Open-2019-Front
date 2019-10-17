import React from 'react'
import DeleteButton from './DeleteButton'

const Contacts = (props) => {

    const { persons, setPersons, searchName, searchHits, showMessage, deletePerson } = props

    const results = (searchName.length > 0
        ? searchHits
        : [...persons])
        .map(p =>
            <tr key={p.name}>
                <td>{p.name} {p.number}</td>
                <td>
                    <DeleteButton
                        id={p.id}
                        persons={persons}
                        setPersons={setPersons}
                        showMessage={showMessage}
                        deletePerson={deletePerson}
                    />
                </td>
            </tr>)

    return (
        <div>
            <h2>Numbers</h2>

            <table>
                <tbody>
                    {results}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts