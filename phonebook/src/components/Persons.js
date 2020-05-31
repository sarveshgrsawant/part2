import React from 'react'

const Persons = (props) => {
    const personShow = props.personShow
    const removePerson = props.removePerson
    return (
        <ul>
            {personShow.map((person => <li key={person.name}>{person.name} {person.number} <button onClick={()=>removePerson(person.id)}>delete</button></li>))}
        </ul>
    )
}

export default Persons