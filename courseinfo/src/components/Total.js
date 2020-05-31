import React from 'react'

const Total = ( props ) => {
  const arr = props.course.parts
  const sum = arr.reduce((sum, exercise) => {
    return sum + exercise.exercises
  }, 0)  
  return (
  <p> Number of exercises {sum} </p>
  )
}

export default Total