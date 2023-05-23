function Header(course){
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

function Part({part, exercise}){
  return(
    <div>
      <p>{part} {exercise}</p>
    </div>
  )
}

function Content({partsList, exercisesList}){
  return(
    <div>
      <Part part={partsList[0]} exercise={exercisesList[0]} />
      <Part part={partsList[1]} exercise={exercisesList[1]} />
      <Part part={partsList[2]} exercise={exercisesList[2]} />
    </div>
  )
}

function Total({exercisesList}){
  return(
    <p>Number of exercises {exercisesList[0] + exercisesList[1] + exercisesList[2]}</p>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partsList = [part1, part2, part3]
  const exercisesList = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content partsList={partsList} exercisesList={exercisesList} />
      <Total exercisesList={exercisesList} />
    </div>
  );
}

export default App;
