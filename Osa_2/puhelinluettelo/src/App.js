import React, { useState } from 'react'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchHits, setSearchHits] = useState([])

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
      />

      <Contacts
        persons={persons}
        searchName={searchName}
        searchHits={searchHits}
      />
    </div>
  )

}

export default App