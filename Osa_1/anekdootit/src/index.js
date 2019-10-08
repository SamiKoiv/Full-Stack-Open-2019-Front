import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(10).fill(0))

    console.log("current index: ", selected)
    console.log(votes)

    const randomIndex = () => {
        const i = Math.floor(Math.random() * anecdotes.length)
        return i
    }

    const vote = () => {
        console.log("clicked vote")
        const newVotes = votes
        newVotes[selected] = newVotes[selected] + 1
        setVotes(newVotes)
    }

// Voting needs debugging
// Changing votes doesn't call new render

    return (
        <div>
            {props.anecdotes[selected]} <br />
            has {votes[selected]} votes <br />
            <Button text="vote" handleClick={() => vote()} />            
            <Button text="next anecdote" handleClick={() => setSelected(randomIndex())} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)