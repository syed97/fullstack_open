import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({text, clickHandler}) => {
  return (
    <button onClick={clickHandler}>
      {text}
    </button>
  )
}

const Anecdote = ({text, num_votes}) => {
  return (
  <div>
    <p>{text}</p>
    <p>has {num_votes} votes</p>
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const max_vote_index = votes.indexOf(Math.max(...votes))
  
  const handleNext = (arr) => {
    const random_index = Math.floor(Math.random() * arr.length);
    setSelected(random_index);
  }

  const handleVote = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      <Anecdote text={anecdotes[selected]} num_votes={votes[selected]}/>
      <Button text="vote" clickHandler={() => handleVote(selected)}/>
      <Button text="next anecdote" clickHandler = {() => handleNext(anecdotes)}/>   
      <Heading text="Anecdote with most votes"/>
      <Anecdote text={anecdotes[max_vote_index]} num_votes={votes[max_vote_index]}/>
    </div>
  )
}

export default App