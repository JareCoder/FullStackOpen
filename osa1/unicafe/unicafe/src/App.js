import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, val}) =>{
  if(text === "Positive")
    return(<p>{text}: {val}%</p>)
  return(<p>{text}: {val}</p>)
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  let avg = (good - bad) / total
  let positive = (good / total)*100

  if(total === 0)
    return(<p>No Data</p>)

  return(
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" val={good} />
      <StatisticLine text="Neutral" val={neutral} />
      <StatisticLine text="Bad" val={bad} />
      <StatisticLine text="Total" val={total} />
      <StatisticLine text="Average" val={avg} />
      <StatisticLine text="Positive" val={positive} />
    </div>
  )
}


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() =>{setGood(good+1)}} text="Good" />
      <Button handleClick={() =>{setNeutral(neutral+1)}} text="Neutral" />
      <Button handleClick={() =>{setBad(bad+1)}} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
