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

function Content({courseList}){
  return(
    <div>
      <Part part={courseList[0].name} exercise={courseList[0].exercises} />
      <Part part={courseList[1].name} exercise={courseList[1].exercises} />
      <Part part={courseList[2].name} exercise={courseList[2].exercises} />
    </div>
  )
}

function Total({courseList}){
  return(
    <p>Number of exercises {courseList[0].exercises + courseList[1].exercises + courseList[2].exercises}</p>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const courseList = [part1, part2, part3]

  return (
    <div>
      <Header course={course} />
      <Content courseList={courseList} />
      <Total courseList={courseList} />
    </div>
  );
}

export default App;
