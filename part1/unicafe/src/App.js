import { useState } from 'react'

const Heading = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  ) 
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = good*100/total

  if (total == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive + " %"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodRating = () => setGood(good + 1)
  const handleNeutralRating = () => setNeutral(neutral + 1)
  const handleBadRating = () => setBad(bad + 1)

  return (
    <div>
      <Heading text="give feedback"/>

      <Button text="good" handleClick={handleGoodRating}/>
      <Button text="neutral" handleClick={handleNeutralRating}/>
      <Button text="bad" handleClick={handleBadRating}/>

      <Heading text="statistics"/>

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App
