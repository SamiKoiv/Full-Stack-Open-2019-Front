import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {

    const { good, neutral, bad, all } = props

    const Average = () => {
        const average = (good - bad) / all
        return average
    }

    const Positive = () => {
        const positive = good / all * 100
        return (positive + " %")
    }

    if (all === 0)
        return <p>No feedback given</p>

    return (
        <table>
            <tbody>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={Average()} />
                <Statistic text="positive" value={Positive()} />
            </tbody>
        </table>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const AddValue = (value, setValue) => {
        setAll(all + 1)
        setValue(value + 1)
    }

    return (
        <div>
            <Header text="give feedback" />
            <Button handleClick={() => AddValue(good, setGood)} text="good" />
            <Button handleClick={() => AddValue(neutral, setNeutral)} text="neutral" />
            <Button handleClick={() => AddValue(bad, setBad)} text="bad" />

            <Header text="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'));
