import React, { useState } from 'react'


const Filter = (props) => {
    const countries = props.countries
   const [ country, setCountry ] = useState('')
   const [ show, setShow ] = useState({})


   

   const handleShow = (con) => {
        setShow(con)
   }

   const handleCountry = (event) => {
    setShow({})
    setCountry(event.target.value)
    
   }
   const filteredCountries = country !== '' ? countries.filter((con) => con.name.toLowerCase().includes(country.toLowerCase())) : []
   if(Object.keys(show).length !== 0){
    return (
        <div>
            find countries <input value={country} onChange={handleCountry} />
            <h1>{show.name}</h1>
            <p>capital {show.capital}</p>
            <p>population {show.population}</p>
            <h2>languages</h2>
            <ul>{show.languages.map(lan => <li key={lan.name}>{lan.name}</li>)}</ul>
        </div>
    )
   }
   else if(filteredCountries.length === 0){
    return (
        <div>
            find countries <input value={country} onChange={handleCountry} />
        </div>
    )
   }else if(filteredCountries.length === 1){
    
    const con = filteredCountries[0]
    
    
    return (
        <div>
            find countries <input value={country} onChange={handleCountry} />
            <h1>{con.name}</h1>
            <p>capital {con.capital}</p>
            <p>population {con.population}</p>
            <h2>languages</h2>
            <ul>{con.languages.map(lan => <li key={lan.name}>{lan.name}</li>)}</ul>
        </div>
    )
   }else if(filteredCountries.length < 11){
    return (
        <div>
            find countries <input value={country} onChange={handleCountry} />
            <ul>{filteredCountries.map((con) => <li key={con.name}>{con.name} <button onClick={()=>handleShow(con)}>show</button></li>)}</ul>
        </div>
    )
   }else if(filteredCountries.length > 10){
    return (
        <div>
            find countries <input value={country} onChange={handleCountry} />
            <p>Too many matches, specify more specific filter</p>
        </div>
    )
   }
}

export default Filter