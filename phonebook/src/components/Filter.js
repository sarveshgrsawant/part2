import React from 'react'

const Filter = (props) => {
    const findName = props.findName
    const handleFindNo = props.handleFindNo
    
    return(
        <div>
            filter shown with<input value={findName} onChange={handleFindNo} />
        </div>
    )
}

export default Filter