
const course = 'Half Stack application development'

const part1 = 'Fundamentals of React'
const part2 = 'Using props to pass data'
const part3 = 'State of a component'

const exercices1 = 10
const exercices2 = 7
const exercices3 = 14

const Header = (props)=>{
  return(
    <div>
      <p>{props.courseName}</p>
    </div>
  )
}

const Part = (props)=>{
  return(
    <div>
      <p>{props.part} {props.numberOfExerice} </p>
    </div>
  )
}

const Content = ()=>{

  return(
    <div>
      <Part part={part1} numberOfExerice={exercices1}/>
      <Part part={part2} numberOfExerice={exercices2}/>
      <Part part={part3} numberOfExerice={exercices3}/>
    </div>

  )
}

const Total = (props)=>{
  return(
   <div>
    <p>The number of exerices is {props.totalNumberOfExerices}</p>
   </div>
  )
}
const App = ()=>{
 
  return (
    <div>
      <Header name={course}/>
      <Content  />
      <Total totalNumberOfExerices={exercices1 + exercices2 + exercices3}/>
    </div>
  );
}

export default App;
