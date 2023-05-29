import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/FilterNames'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/persons'
import Popup from './components/Popup'
import ErrorPopup from './components/ErrorPopup'

function App(){
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() =>{
    personsService.getAll()
    .then(returnedPersons => setPersons(returnedPersons))
  }, [])

  const addPerson = (event) =>{
    event.preventDefault()
    console.log('addPerson called')
    const newPerson = {name: newName, number: newNumber}
    const personToUpdate = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
    console.log("personToUpdate: ", personToUpdate)
    if(personToUpdate){
      if(
        window.confirm(`Person ${newName} already exists! Do you want to update their number?`)
      ){
        //setUpdatePersonId(personToUpdate.id)
        personService.update(personToUpdate.id, newPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== personToUpdate.id ? p : returnedPerson))
          setMessage(`Update ${newName} number to: ${newNumber}`)
          setTimeout(() => {setMessage(null)}, 5000)
        })
        .catch(e => {
          setErrorMessage(`User ${newName} has already been removed`)
          setTimeout(() => {setErrorMessage(null)}, 5000)
          personService.getAll()
          .then(returnedPersons => setPersons(returnedPersons))
        })
      }

      
    }
    else if(persons.find((person) => person.number === newNumber))
      alert(`Number ${newNumber} already exists!`)
    else{
      personsService.create(newPerson)
      .then(returnedPerson => {
        setMessage(`Added user: ${newName}`)
        setPersons(persons.concat(returnedPerson))
        setTimeout(() => {setMessage(null)}, 5000)
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (person) =>{
    if(
      window.confirm(`Are you sure you want to delete ${person.name}?`)
      )
      {
        personsService.remove(person.id)
        .then(() => {
          setPersons(persons.filter(removedPerson => removedPerson.id !== person.id))
          setMessage(`Removed user: ${person.name} `)
          setTimeout(() => {setMessage(null)}, 5000)
        })
      }
  }

  const handleNameInput = (event) =>{
    setNewName(event.target.value)
  }

  const handlePhoneInput = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) =>{
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Popup message={message} />
      <ErrorPopup message={errorMessage} />
      <Filter value={filter} onChange={handleFilterInput} />
      <h2>Add Person</h2>
      <PersonForm 
        onSubmit={addPerson} 
        nameValue={newName} 
        nameOnChange={handleNameInput} 
        numberValue={newNumber} 
        numberOnChange={handlePhoneInput} 
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} removePerson={removePerson}/>
    </div>
  )

}

export default App