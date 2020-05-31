import React from 'react'

const ErrorNotification = ({ message }) => {
    const notificationStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    console.log(`inside error noti ${message}`)
    if(message === null){
        console.log(`inside error noti where msg is null ${message}`)
        return null
    }
    console.log(`inside error noti where msg is not null ${message}`)
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default ErrorNotification