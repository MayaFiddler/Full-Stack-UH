const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Welcome to our {props.course} course!</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <ul>
        <li>{props.part} and the exercises: {props.exercises}</li>
      </ul>
      
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h2>Please find the course content below:</h2>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3} </h3>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}
export default App
