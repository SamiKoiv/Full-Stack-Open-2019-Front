import React, { useState } from 'react'

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

  const handleSearchNameChange = (event) => {

    const search = event.target.value
    setSearchName(search)

    const hits = [...persons].filter(p =>
      p.name.toLowerCase()
        .startsWith(search.toLowerCase())
    )

    setSearchHits(hits)
  }

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

  const contents = () => {
    const results = searchName.length > 0
      ? searchHits
      : [...persons]

    return (
      results.map(p =>
        <div key={p.name}>
          {p.name} {p.number} <br />
        </div>)
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input
          value={searchName}
          onChange={handleSearchNameChange} />
      </div>

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
      <h2>Numbers</h2>
      <div>
        {contents()}
      </div>
    </div>
  )

}

export default App