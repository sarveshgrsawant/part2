import React from 'react'
import Part from './Part'

const Content = (props) => {
  const parts = props.course.parts
  return(
    <div>
      {parts.map(part => <Part course={part} key={part.id}/>)}
    </div> 
  ) 
}

export default Content