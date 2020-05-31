import React from 'react'

const PersonForm = (props) => {
    const newName = props.newName
    const newNo = props.newNo
    const handleName = props.handleName
    const handleNo = props.handleNo
    const submitName = props.submitName
    return (
        <form onSubmit={submitName}>
          <div>
            name: <input value={newName} onChange={handleName} />
            number: <input value={newNo} onChange={handleNo} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm