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
        <p>{name}: {exercise}</p>
      </div>
    )
  }
  
  const Content = ({courseList}) => {
    const partsList = courseList.parts
    //Key == name, due to lazy implementation. Can be fixed by using a proper UUID lib
    return(
      <div>
        {partsList.map(
          (part, i) => 
          <Part key={partsList[i].name} name={partsList[i].name} exercise={partsList[i].exercises}/>
        )}
      </div>
    )
  }
  
  const Total = ({courseList}) =>{
    const partsList = courseList.parts

    let total = partsList.reduce((total, currentVal) => {
      return total + currentVal.exercises
    }, 0)

    //for (let part in partsList){
     // total += partsList[part].exercises
   // }
    return(
      <p><b>Total numer of exercises: </b>{total}</p>
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