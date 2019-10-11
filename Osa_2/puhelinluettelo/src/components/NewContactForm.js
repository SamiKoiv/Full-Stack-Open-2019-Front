import React from 'react'

const NewContactForm = (props) => {
    const {
        persons,
        setPersons,
        newName,
        setNewName,
        newNumber,
        setNewNumber,
    } = props

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {

        const exists = persons
            .reduce((previous, current) =>
                current.name === newName, false)

        if (exists) {
            window.alert(`${newName} is already added to phonebook`)
            return
        }

        event.preventDefault()
        const personObject = {
            name: newName.trim(),
            number: newNumber.trim()
        }

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange} />
                </div>
                <div>
                    number: <input
                        value={newNumber}
                        onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit" >add</button>
                </div>
            </form>
        </div>

    )
}

export default NewContactForm