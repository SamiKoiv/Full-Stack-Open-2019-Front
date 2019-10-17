import React from 'react'

const DeleteButton = (props) => {
    const { id, persons, deletePerson } = props

    const handleDeletePerson = event => {
        console.log(`attempting to delete ${id}`)

        const name = persons.find(p => p.id === id).name
        const confirm = window.confirm(`Delete ${name} ?`)

        if (confirm) {
            deletePerson(id)
        }
    }

    return (
        <>
            <button onClick={handleDeletePerson}>
                delete
            </button>
        </>
    )
}

export default DeleteButton