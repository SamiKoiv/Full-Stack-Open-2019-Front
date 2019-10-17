import React from 'react'
import personService from '../services/persons'

const NewContactForm = (props) => {
    const {
        persons,
        setPersons,
        newName,
        setNewName,
        newNumber,
        setNewNumber,
        postPerson,
        showMessage
    } = props

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleOverlappingPerson = overlap => {
        const replace = window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`)

        if (!replace) {
            showMessage('Canceled', 'error')
            return
        }

        personService.update(overlap.id, personObject)
            .then(response => {
                console.log(response)
                const filtered = persons.filter(p => p.name !== response.data.name)
                setPersons(filtered.concat(response.data))
                showMessage(`Updated ${response.data.name}`, 'confirm')
            })
            .catch(response => {
                console.log(response)
                showMessage('Service unavailable', 'error')
            })

        setNewName('')
        setNewNumber('')
    }

    const personObject = {
        name: newName.trim(),
        number: newNumber.trim(),
    }

    const addPerson = (event) => {
        event.preventDefault()

        const overlap = persons.find(p => p.name === newName)
        const exists = overlap != null

        if (!exists) {
            postPerson(personObject)
        }
        else {
            handleOverlappingPerson(overlap)
            return
        }

    }

    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                name:
                        </td>
                            <td>
                                <input
                                    value={newName}
                                    onChange={handleNameChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                number:
                        </td>
                            <td>
                                <input
                                    value={newNumber}
                                    onChange={handleNumberChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <button type="submit" >add</button>
            </form>
        </div>

    )
}

export default NewContactForm