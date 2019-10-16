import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchHits, setSearchHits] = useState([])

  useEffect(() => {
    personService.getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const postPerson = newPerson => {
    personService.post(newPerson)
      .then(response => setPersons(persons.concat(response)))

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      />

      <Contacts
        persons={persons}
        setPersons={setPersons}
        searchName={searchName}
        searchHits={searchHits}
      />
    </div>
  )

}

export default App