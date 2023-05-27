const Course = ({course}) => {

  const Header = ({course}) => {
    return(
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }
  
  const Part = ({name, exercise}) => {
    return(
      <div>
        <p>{name} {exercise}</p>
      </div>
    )
  }
  
  const Content = ({courseList}) => {
    const partsList = courseList.parts
    return(
      <div>
        {partsList.map(
          (part, i) => 
          <Part name={partsList[i].name} exercise={partsList[i].exercises}/>
        )}
      </div>
    )
  }
  
  const Total = ({courseList}) =>{
    const partsList = courseList.parts
    let sum = 0

    for (let part in partsList){
      sum += partsList[part].exercises
    }
    return(
      <p>Number of exercises {sum}</p>
    )
  }

  return(
    <div>
    <Header course={course} />
    <Content courseList={course} />
    <Total courseList={course} />
  </div>
  )
}

export default Course