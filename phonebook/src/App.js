
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/person'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNo, setNewNo ] = useState('')
    const [ findName, setFindName ] = useState('')
    const [ noti, setNoti ] = useState(null)
    const [ errorNoti, setError ] = useState(null)

    const handleFindNo = (event) => {   
      setFindName(event.target.value)     
    }

    const handleName = (event) => {
      setNewName(event.target.value)
    } 
    const handleNo = (event) => {
        setNewNo(event.target.value)
    }
    const submitName = (event) => {
        event.preventDefault();

        const newPerson = { name:newName, number:newNo }
        console.log(newPerson);
        
        
        const existingPerson = persons.find(person => person.name === newName)
        
        if(existingPerson){
            const addPerson = {...existingPerson, number:newPerson.number}
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
              
              
              PersonService
              .update(existingPerson.id, addPerson)
              .then(responseD => {
                setPersons(persons.map(person => person.id !== responseD.id ? person : responseD))
              })
              setNewName('')
              setNewNo('')
            }
        }else{
            PersonService
            .add(newPerson)
            .then(responseD => {
              setNoti(`Added ${responseD.name}`)
              setPersons(persons.concat(responseD))
              setNewName('')
              setNewNo('')
            })
        }
    }

    const removePerson = (id) => {
      PersonService
      .remove(id)
      .then(responseD => {
        console.log(responseD)
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(
        () => setError(`Information of ${persons.find(p => p.id === id).name} has already been removed from the server`)
      )
    } 
    
    const filteredPerson =  persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase()))

    useEffect(
      () => {
        PersonService
        .getAll()
        .then(responseD => {
          setPersons(responseD)
        })
      },
      []
    )

    useEffect(
      () => {
        const timeout = setTimeout(
          () => {
            setNoti(null) 
          },
          3000
        )
        return () => clearTimeout(timeout)
      },
      [noti]    
    )

    useEffect(
      () => {
        const timeout = setTimeout(
          () => {
            setError(null)
          },
          3000
        )
        return () => clearTimeout(timeout)
      },
      [errorNoti]
    )
    return (
      <div>
        <h2>Phonebook</h2>
          <Notification message={noti} />
          <ErrorNotification message={errorNoti} />
          <Filter findName={findName} handleFindNo={handleFindNo} />
        <h2>add a new</h2>
          <PersonForm newName={newName} newNo={newNo} handleName={handleName} handleNo={handleNo} submitName={submitName} />
        <h2>Numbers</h2>
          <Persons personShow={filteredPerson} removePerson={removePerson}/>
      </div>
    )
  }
  
  export default App