import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchHits, setSearchHits] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  const showMessage = (msg, type) => {
    setMessage(msg)
    setMessageType(type)

    setTimeout(() => {
      setMessage(null)
      setMessageType(null)
    }, 3000)
  }

  useEffect(() => {
    personService.getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const postPerson = newPerson => {
    personService.post(newPerson)
      .then(added => {
        setPersons(persons.concat(added))
        showMessage(`Added ${added.name}`, 'confirm')
      })

    setNewName('')
    setNewNumber('')
  }

  const deletePerson = id => {
    const deleted = persons.find(p => p.id === id)
    personService.remove(id)
      .then(response => {
        showMessage(`Deleted ${deleted.name}`, 'confirm')
        const newPersons = persons.filter(p => p.id !== id)
        setPersons(newPersons)
      })
      .catch(error => {
        console.log(error)
        showMessage(`Error: ${deleted.name} has already been removed from server`, 'error')
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification
        message={message}
        setMessage={setMessage}
        messageType={messageType}
        setMessageType={setMessageType}
      />

      <Filter
        persons={persons}
        searchName={searchName}
        setSearchName={setSearchName}
        setSearchHits={setSearchHits}
      />

      <NewContactForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        postPerson={postPerson}
        showMessage={showMessage}
      />

      <Contacts
        persons={persons}
        setPersons={setPersons}
        searchName={searchName}
        searchHits={searchHits}
        showMessage={showMessage}
        deletePerson={deletePerson}
      />
    </div>
  )

}

export default App