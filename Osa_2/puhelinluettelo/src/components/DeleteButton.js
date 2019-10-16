import React from 'react'
import personService from '../services/persons'

const DeleteButton = (props) => {
    const { id, persons, setPersons } = props

    const handleDeletePerson = event => {
        console.log(`attempting to delete ${id}`)

        const name = persons.find(p => p.id === id).name
        const confirm = window.confirm(`Delete ${name} ?`)

        if (confirm)
            personService.remove(id)
                .then(response => {
                    console.log(response)
                    const newPersons = persons.filter(p => p.id !== id)
                    console.log(newPersons)
                    setPersons(newPersons)
                })
    }

    return (
        <div>
            <button onClick={handleDeletePerson}>
                delete
            </button>
        </div>
    )
}

export default DeleteButton