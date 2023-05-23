function Header(course){
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

function Content({partsList, exercisesList}){
  return(
    <div>
      <p>
        {partsList[0]} {exercisesList[0]}
      </p>
      <p>
        {partsList[1]} {exercisesList[1]}
      </p>
      <p>
        {partsList[2]} {exercisesList[2]}
      </p>
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
