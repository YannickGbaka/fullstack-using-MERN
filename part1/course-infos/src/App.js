
const Header = (props)=>{
  return(
    <div>
      <p>{props.courseName}</p>
    </div>
  )
}

const Content = (props)=>{
  return(
    <div>
      <p>{props.part} {props.numberOfExerice} </p>
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercices {props.totalNumberOfExerices}</p>
    </div>
  )
}
const App = ()=>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercices1 = 10
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part={part1} numberOfExerice={exercices1} />
      <Content part={part2} numberOfExerice={exercices2} />
      <Content part={part3} numberOfExerice={exercices3} />
      <Total totalNumberOfExerices={exercices1 + exercices2 + exercices3}/>
    </div>
  );
}

export default App;
