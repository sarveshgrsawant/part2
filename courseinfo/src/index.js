import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// const Header = (props) => (
// <h1>{props.course.name}</h1>
// )

// const Part = (props) => (
//   <p>
//     {props.course.name} {props.course.exercises}
//   </p>
// )  

// const Content = (props) => (
//   <div>
//     <Part course={props.course.parts[0]} />
//     <Part course={props.course.parts[1]} /> 
//     <Part course={props.course.parts[2]} />
//   </div> 
// )
  
// const Total = ( props ) => {
//   const sum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises

//   return (
//   <p> Number of exercises {sum} </p>
//   )
// }

// const App = () => {
//   const course = {
//     name:'Half Stack application development',
//     parts:[
//       {
//         name:'Fundamentals of React',
//         exercises:10
//       },
//       {
//         name:'Using props to pass data',
//         exercises:7
//       },
//       {
//         name:'State of a component',
//         exercises:14
//       } 
//     ]
//   }
//
//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))