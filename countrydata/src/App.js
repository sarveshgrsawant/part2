import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const App = () => {
    const [ countries, setCountries ] = useState([])
    

    useEffect(() => {
        axios
          .get('https://restcountries.eu/rest/v2/all').then(response => {
            setCountries(response.data)
          })
      }, [])

    
    
    return (
        <div>
            {/* find countries <input value={country} onChange={handleCountry} /> */}
            <Filter countries={countries} />
        </div>
    )
}

export default App