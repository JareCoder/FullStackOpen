import { useState } from 'react'

const increaseVote = ({ index, array }) => {
  const copy = [...array]
  copy[index] += 1

  return copy
}

const CurrentVotes = ({ index, array }) => {
  return <p>This anecdote has {array[index]} votes.</p>
}

const findIndexOfMaxNum = ({ array }) => {
  let indexOfMax = array.reduce((maxI, n, i, array) => {
    if (n > array[maxI]){
      return i
    }else{
      return maxI
    }
  }, 0)

  return indexOfMax
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random()*8))
  const [points, setPoints] = useState(new Array(8).fill(0))
  const topAnecdote = findIndexOfMaxNum({array: points})

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h4>{anecdotes[selected]}</h4>
      <CurrentVotes index={selected} array={points} />
      <button onClick={() => {setPoints(increaseVote({index: selected, array: points}))}}>Vote</button>
      <button onClick={() => {setSelected(Math.floor(Math.random()*8))}}>Roll for another anecdote</button>
      <h1>Anecdote with most votes</h1>
      <h4>{anecdotes[topAnecdote]}</h4>
      <CurrentVotes index={topAnecdote} array={points} />
    </div>
  )
}

export default App;
