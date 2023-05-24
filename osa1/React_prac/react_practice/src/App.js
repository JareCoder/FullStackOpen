import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handeClick, text }) => (
    <button onClick={handeClick}>
      {text}
    </button>
)

function App(){
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter +1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  return (
    <div>
      <Display counter={counter} />
      <Button handeClick={increaseByOne} text='plus' />
      <Button handeClick={setToZero} text='zero' />
      <Button handeClick={decreaseByOne} text='minus' />
    </div>
  )
}

export default App;
