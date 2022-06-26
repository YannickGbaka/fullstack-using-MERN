

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


const part1 = 'Fundamentals of React'
const part2 = 'Using props to pass data'
const part3 = 'State of a component'

const exercices1 = 10
const exercices2 = 7
const exercices3 = 14

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
 
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercices: 10 
  }
  const part2 = {
    name: 'Using props to pass data',
    exercices: 7
  }
  const part3 = {
    name: 'State of a component',
    exercices: 14
  }


  return (
    <div>
      <Header name={course}/>
      <Content  />
      <Total totalNumberOfExerices={part1.exercices + part2.exercices + part3.exercices}/>
    </div>
  );
}

export default App;
